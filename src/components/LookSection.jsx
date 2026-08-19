import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import ProductCard, { LookProductCard } from './ProductCard'
import chevronLeft from '../assets/icons/chevron-left.svg'
import chevronRight from '../assets/icons/chevron-right.svg'

const CARD_WIDTH = 92
const CARD_GAP = 4
const CARDS_PER_VIEW = 4
const MOBILE_CARD_WIDTH = '310px'

export default function LookSection({ products }) {
  const scrollRef = useRef(null)
  const showPager = products.length > CARDS_PER_VIEW
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(showPager)
  const [atStart, setAtStart] = useState(true)
  const [peekRect, setPeekRect] = useState(null)

  useEffect(() => {
    const track = scrollRef.current
    if (!track || !showPager) return undefined

    const updateScrollState = () => {
      setCanScrollPrev(track.scrollLeft > 1)
      setCanScrollNext(track.scrollLeft < track.scrollWidth - track.clientWidth - 1)
      setAtStart(track.scrollLeft <= 1)
    }

    updateScrollState()
    track.addEventListener('scroll', updateScrollState)
    return () => track.removeEventListener('scroll', updateScrollState)
  }, [showPager, products])

  // The peek is a purely decorative hint of the next hidden card, bled past the
  // sidebar's clipped edge toward the browser edge. It only exists at rest — as
  // soon as the row scrolls away from the start, the last card should end up
  // flush with the content block instead of continuing to bleed.
  const showPeek = showPager && atStart && Boolean(products[CARDS_PER_VIEW])

  useEffect(() => {
    if (!showPeek) {
      setPeekRect(null)
      return undefined
    }

    let rafId = null
    const measure = () => {
      rafId = null
      const track = scrollRef.current
      if (!track) return
      const rect = track.getBoundingClientRect()
      const left = rect.right + CARD_GAP
      setPeekRect({ top: rect.top, left, height: rect.height, width: window.innerWidth - left })
    }
    const scheduleMeasure = () => {
      if (rafId) return
      rafId = requestAnimationFrame(measure)
    }

    measure()
    window.addEventListener('scroll', scheduleMeasure, true)
    window.addEventListener('resize', scheduleMeasure)
    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', scheduleMeasure, true)
      window.removeEventListener('resize', scheduleMeasure)
    }
  }, [showPeek])

  const scrollByCard = (direction) => {
    const track = scrollRef.current
    if (!track) return
    track.scrollBy({ left: direction * (CARD_WIDTH + CARD_GAP), behavior: 'smooth' })
  }

  return (
    <div className="flex w-full flex-col items-start gap-[20px] py-[20px] mobile:gap-[20px] mobile:py-0">
      <div className="flex w-full items-center justify-center mobile:px-[20px]">
        <p className="flex-1 text-sm font-medium uppercase leading-[16px] text-text-primary">Весь образ</p>
        {showPager && (
          <div className="mobile:hidden flex items-center">
            <button
              type="button"
              aria-label="Предыдущие товары образа"
              onClick={() => scrollByCard(-1)}
              disabled={!canScrollPrev}
              className="transition-opacity not-disabled:hover:opacity-60"
            >
              <img src={chevronLeft} alt="" className={`size-[16px] ${canScrollPrev ? '' : 'opacity-30'}`} />
            </button>
            <button
              type="button"
              aria-label="Следующие товары образа"
              onClick={() => scrollByCard(1)}
              disabled={!canScrollNext}
              className="transition-opacity not-disabled:hover:opacity-60"
            >
              <img src={chevronRight} alt="" className={`size-[16px] ${canScrollNext ? '' : 'opacity-30'}`} />
            </button>
          </div>
        )}
      </div>

      <div ref={scrollRef} className="mobile:hidden no-scrollbar flex w-full gap-[4px] overflow-x-auto scroll-smooth">
        {products.map((item, index) => (
          <LookProductCard key={index} image={item.image} className="w-[92px] shrink-0" />
        ))}
      </div>

      <div className="hidden mobile:flex no-scrollbar w-full gap-[20px] overflow-x-auto scroll-smooth px-[20px]">
        {products.map((item, index) => (
          <ProductCard key={index} {...item} width={MOBILE_CARD_WIDTH} className="shrink-0" />
        ))}
      </div>

      {peekRect &&
        createPortal(
          <div
            className="mobile:hidden pointer-events-none fixed z-10 overflow-hidden"
            style={{ top: peekRect.top, left: peekRect.left, width: peekRect.width, height: peekRect.height }}
          >
            <LookProductCard image={products[CARDS_PER_VIEW].image} className="w-[92px] shrink-0" />
          </div>,
          document.body,
        )}
    </div>
  )
}
