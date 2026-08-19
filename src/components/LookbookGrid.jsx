import { useEffect, useRef, useState } from 'react'

const SLOTS = 10
const CROSSFADE = true
const FADE_MS = 700
const STAGGER_MIN_MS = 180
const STAGGER_MAX_MS = 320

function delay(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms))
}

function pick(list) {
  return list[Math.floor(Math.random() * list.length)]
}

function preload(src) {
  return new Promise((resolve) => {
    const image = new Image()
    image.onload = resolve
    image.onerror = resolve
    image.src = src
  })
}

function GridCell({ photo, incoming, fading }) {
  return (
    <div className="relative aspect-[224/350] min-h-0 min-w-0 overflow-hidden bg-background-secondary">
      <img
        src={photo.src}
        alt={photo.alt}
        draggable={false}
        className="absolute inset-0 size-full object-cover object-top"
      />
      {incoming && CROSSFADE && (
        <img
          src={incoming.src}
          alt={incoming.alt}
          draggable={false}
          className={`absolute inset-0 size-full object-cover object-top transition-opacity ease-[cubic-bezier(0.4,0,0.2,1)] ${
            fading ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDuration: `${FADE_MS}ms` }}
        />
      )}
    </div>
  )
}

function patchCells(cells, slot, patch) {
  return cells.map((cell, index) => (index === slot ? { ...cell, ...patch } : cell))
}

export default function LookbookGrid({ photos }) {
  const rootRef = useRef(null)
  const cellsRef = useRef(Array.from({ length: SLOTS }, (_, i) => ({ shown: i, incoming: null, fading: false })))
  const lastSlotRef = useRef(-1)
  const [cells, setCells] = useState(cellsRef.current)

  const commit = (next) => {
    cellsRef.current = next
    setCells(next)
  }

  useEffect(() => {
    const root = rootRef.current
    let cancelled = false
    let inView = true

    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting
      },
      { threshold: 0.25 },
    )
    if (root) io.observe(root)

    const swapOnce = async () => {
      const current = cellsRef.current
      const used = new Set()
      const idle = []

      current.forEach((cell, slot) => {
        used.add(cell.shown)
        if (cell.incoming != null) used.add(cell.incoming)
        else if (slot !== lastSlotRef.current) idle.push(slot)
      })

      const unused = photos.map((_, index) => index).filter((index) => !used.has(index))
      if (idle.length === 0 || unused.length === 0) return

      const slot = pick(idle)
      const nextIndex = pick(unused)
      lastSlotRef.current = slot
      commit(patchCells(cellsRef.current, slot, { incoming: nextIndex, fading: false }))

      await preload(photos[nextIndex].src)
      if (cancelled) return

      if (!CROSSFADE) {
        commit(patchCells(cellsRef.current, slot, { shown: nextIndex, incoming: null, fading: false }))
        return
      }

      await preload(photos[nextIndex].src)
      if (cancelled) return

      await delay(32)
      if (cancelled) return
      commit(patchCells(cellsRef.current, slot, { fading: true }))

      await delay(FADE_MS)
      if (cancelled) return
      commit(patchCells(cellsRef.current, slot, { shown: nextIndex, incoming: null, fading: false }))
    }

    const loop = async () => {
      while (!cancelled) {
        const wait = inView
          ? STAGGER_MIN_MS + Math.random() * (STAGGER_MAX_MS - STAGGER_MIN_MS)
          : 400
        await delay(wait)
        if (cancelled || !inView) continue
        void swapOnce()
      }
    }

    loop()
    return () => {
      cancelled = true
      io.disconnect()
    }
  }, [photos])

  return (
    <div
      ref={rootRef}
      className="grid w-full grid-cols-5 gap-[20px] px-[120px]"
    >
      {cells.map((cell, index) => (
        <GridCell
          key={index}
          photo={photos[cell.shown]}
          incoming={cell.incoming == null ? null : photos[cell.incoming]}
          fading={cell.fading}
        />
      ))}
    </div>
  )
}
