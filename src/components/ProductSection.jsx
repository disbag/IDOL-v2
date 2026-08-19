import { useRef } from 'react'
import ProductCard from './ProductCard'
import chevronLeft from '../assets/icons/chevron-left.svg'
import chevronRight from '../assets/icons/chevron-right.svg'

const ROW_CARD_WIDTH = 'calc((100% - 60px) / 4)'
const MOBILE_CARD_WIDTH = '310px'

export default function ProductSection({
  title,
  products,
  layout = 'grid',
  pager = false,
  bordered = true,
  mobile = false,
}) {
  const scrollRef = useRef(null)
  const mobileScrollRef = useRef(null)

  const scrollByCard = (trackRef, direction) => {
    const track = trackRef.current
    if (!track) return
    const card = track.firstElementChild
    const cardWidth = card ? card.getBoundingClientRect().width : 0
    const gap = parseFloat(getComputedStyle(track).columnGap || '0')
    track.scrollBy({ left: direction * (cardWidth + gap), behavior: 'smooth' })
  }

  return (
    <section
      className={`flex w-full flex-col items-start gap-[20px] ${
        mobile ? 'mobile:flex hidden' : 'mobile:hidden'
      } ${mobile ? '' : 'py-[80px]'} ${bordered && !mobile ? 'border-b border-control-border' : ''}`}
    >
      <div className="flex w-full items-center justify-center px-[40px] mobile:px-[20px]">
        <p className="flex-1 text-md font-semibold uppercase leading-[18px] text-text-primary mobile:text-sm mobile:font-medium mobile:leading-[16px]">
          {title}
        </p>
        {pager && (
          <div className="mobile:hidden flex items-center">
            <button
              type="button"
              aria-label="Предыдущие товары"
              onClick={() => scrollByCard(scrollRef, -1)}
              className="transition-opacity hover:opacity-60"
            >
              <img src={chevronLeft} alt="" className="size-[24px]" />
            </button>
            <button
              type="button"
              aria-label="Следующие товары"
              onClick={() => scrollByCard(scrollRef, 1)}
              className="transition-opacity hover:opacity-60"
            >
              <img src={chevronRight} alt="" className="size-[24px]" />
            </button>
          </div>
        )}
      </div>

      {layout === 'grid' ? (
        <div className="mobile:hidden grid w-full grid-cols-4 gap-[20px] px-[40px]">
          {products.map((item) => (
            <ProductCard key={item.name} {...item} />
          ))}
        </div>
      ) : (
        <div
          ref={scrollRef}
          className="mobile:hidden no-scrollbar flex w-full gap-[20px] overflow-x-auto scroll-smooth px-[40px]"
        >
          {products.map((item) => (
            <ProductCard key={item.name} {...item} width={ROW_CARD_WIDTH} className="shrink-0" />
          ))}
        </div>
      )}

      <div
        ref={mobileScrollRef}
        className={`no-scrollbar w-full gap-[20px] overflow-x-auto scroll-smooth px-[20px] ${
          mobile ? 'flex' : 'hidden mobile:flex'
        }`}
      >
        {products.map((item) => (
          <ProductCard key={item.name} {...item} width={MOBILE_CARD_WIDTH} className="shrink-0" />
        ))}
      </div>
    </section>
  )
}
