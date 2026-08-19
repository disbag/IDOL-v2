import { useEffect, useRef, useState } from 'react'
import chevronLeft from '../assets/icons/chevron-left.svg'
import chevronRight from '../assets/icons/chevron-right.svg'

const SLIDE_MS = 5000

function Pager({ count, active, onSelect, playKey, paused }) {
  return (
    <div className="pointer-events-auto flex items-center gap-[10px]">
      {Array.from({ length: count }, (_, i) =>
        i === active ? (
          <button
            key={i}
            type="button"
            aria-label={`Слайд ${i + 1}`}
            aria-current="true"
            onClick={() => onSelect(i)}
            className="relative h-[8px] w-[26px] overflow-hidden rounded-[8px] bg-white/60"
          >
            <span
              key={playKey}
              className={`lookbook-pager-fill absolute top-0 left-0 h-[8px] rounded-[8px] bg-white ${paused ? 'is-paused' : ''}`}
            />
          </button>
        ) : (
          <button
            key={i}
            type="button"
            aria-label={`Слайд ${i + 1}`}
            onClick={() => onSelect(i)}
            className="size-[8px] rounded-full bg-white/40"
          />
        ),
      )}
    </div>
  )
}

export default function LookbookCarousel({ aspect, fillViewport = false, slides, children, ref }) {
  const scrollerRef = useRef(null)
  const indexRef = useRef(0)
  const remainingRef = useRef(SLIDE_MS)
  const [index, setIndex] = useState(0)
  const [playKey, setPlayKey] = useState(0)
  const [inView, setInView] = useState(true)
  const count = slides.length

  const goTo = (next) => {
    const el = scrollerRef.current
    if (!el) return
    const wrapped = (next + count) % count
    el.scrollTo({ left: wrapped * el.clientWidth, behavior: 'smooth' })
  }

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return

    const sync = () => {
      const next = Math.round(el.scrollLeft / Math.max(el.clientWidth, 1))
      if (next === indexRef.current) return
      indexRef.current = next
      setIndex(next)
      setPlayKey((key) => key + 1)
    }

    const onResize = () => {
      el.scrollLeft = indexRef.current * el.clientWidth
    }

    el.addEventListener('scroll', sync, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      el.removeEventListener('scroll', sync)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    remainingRef.current = SLIDE_MS
  }, [playKey])

  useEffect(() => {
    if (count <= 1 || !inView) return undefined

    const startedAt = Date.now()
    const id = window.setTimeout(() => {
      remainingRef.current = SLIDE_MS
      goTo(indexRef.current + 1)
    }, remainingRef.current)

    return () => {
      window.clearTimeout(id)
      remainingRef.current = Math.max(0, remainingRef.current - (Date.now() - startedAt))
    }
  }, [count, playKey, inView])

  return (
    <section
      ref={ref}
      className={`relative w-full overflow-hidden ${fillViewport ? 'h-dvh' : ''}`}
      style={fillViewport ? undefined : { aspectRatio: aspect }}
    >
      <div
        ref={scrollerRef}
        className="no-scrollbar absolute inset-0 flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain"
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="relative h-full w-full shrink-0 snap-start overflow-hidden"
            style={{ backgroundColor: slide.bg }}
          >
            {slide.images.map((image) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                draggable={false}
                className="absolute max-w-none object-cover"
                style={image.style}
              />
            ))}
            {slide.gradient && (
              <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: slide.gradient }} />
            )}
            {slide.caption && children}
          </div>
        ))}
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            aria-label="Предыдущий слайд"
            onClick={() => goTo(index - 1)}
            className="absolute inset-y-0 left-0 z-10 flex items-center px-[40px]"
          >
            <img src={chevronLeft} alt="" className="size-[24px]" />
          </button>
          <button
            type="button"
            aria-label="Следующий слайд"
            onClick={() => goTo(index + 1)}
            className="absolute inset-y-0 right-0 z-10 flex items-center px-[40px]"
          >
            <img src={chevronRight} alt="" className="size-[24px]" />
          </button>
          <div className="pointer-events-none absolute bottom-[max(24px,4.167vw)] left-1/2 z-10 -translate-x-1/2">
            <Pager count={count} active={index} playKey={playKey} paused={!inView} onSelect={goTo} />
          </div>
        </>
      )}
    </section>
  )
}
