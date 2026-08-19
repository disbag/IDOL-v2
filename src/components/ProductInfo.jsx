import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import heartIcon from '../assets/icons/heart-outline-2.svg'
import shareIcon from '../assets/icons/share.svg'
import plusIcon from '../assets/icons/plus.svg'
import minusIcon from '../assets/icons/minus.svg'
import storeIcon from '../assets/icons/store.svg'
import tryonIcon from '../assets/icons/tryon.svg'
import { PaymentDeliveryContent, SizesContent, CareContent, ReviewsContent } from './AccordionSections'
import SizeDropdown from './SizeDropdown'
import CartAddedPanel from './CartAddedPanel'
import NotifyModal from './NotifyModal'

const ACCORDION_CONTENT = {
  'Оплата и доставка': PaymentDeliveryContent,
  'Размеры изделия': SizesContent,
  'Состав и Уход': CareContent,
  Отзывы: ReviewsContent,
}

export default function ProductInfo({ product, infoAccordion }) {
  return (
    <div className="mobile:hidden flex w-full flex-col items-start gap-[24px]">
      <div className="flex w-full flex-col items-start gap-[4px]">
        <div className="flex w-full flex-col items-start gap-[2px] uppercase">
          <p className="text-xs text-text-secondary">{product.badge}</p>
          <p className="w-[379px] text-md text-brand-black">{product.title}</p>
        </div>

        <div className="flex w-full flex-col items-start justify-center gap-[2px]">
          <div className="flex items-center gap-[12px] uppercase text-text-primary">
            <p className="text-md">{product.price}</p>
            <div className="flex items-center gap-[8px]">
              <p className="text-[12px] leading-[18px] line-through">{product.oldPrice}</p>
              <p className="text-md">{product.discount}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-start gap-[4px]">
        <p className="whitespace-nowrap text-xs uppercase text-text-secondary">{product.colorName}</p>
        <div className="flex items-center justify-center gap-[4px]">
          {product.colors.map((color) => (
            <button
              key={color.hex}
              type="button"
              aria-label={`Цвет ${color.hex}`}
              className={`flex items-start border p-[2px] transition-colors ${
                color.selected
                  ? 'border-control-primary'
                  : 'border-transparent hover:border-control-border'
              }`}
            >
              <div className="size-[16px]" style={{ backgroundColor: color.hex }} />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ProductActions({ product, thumbnail }) {
  const [sizeOpen, setSizeOpen] = useState(false)
  const [anchorRect, setAnchorRect] = useState(null)
  const [cartOpen, setCartOpen] = useState(false)
  const [selectedSize, setSelectedSize] = useState(null)
  const [notifyOpen, setNotifyOpen] = useState(false)
  const [notifySize, setNotifySize] = useState(null)
  const containerRef = useRef(null)
  const cartButtonRef = useRef(null)
  const mobileBarRef = useRef(null)

  useEffect(() => {
    const bar = mobileBarRef.current
    if (!bar) return undefined

    const updateHeight = () => {
      document.documentElement.style.setProperty('--mobile-cta-h', `${bar.offsetHeight}px`)
    }

    updateHeight()
    const observer = new ResizeObserver(updateHeight)
    observer.observe(bar)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!sizeOpen) return undefined

    const updateAnchorRect = () => {
      if (cartButtonRef.current) {
        setAnchorRect(cartButtonRef.current.getBoundingClientRect())
      }
    }
    updateAnchorRect()

    const handleClickOutside = (event) => {
      const clickedInsideTrigger = containerRef.current && containerRef.current.contains(event.target)
      const clickedInsideMobileBar = event.target.closest('[data-mobile-cta-bar]')
      const clickedInsideDropdown = event.target.closest('.size-dropdown-enter')
      if (!clickedInsideTrigger && !clickedInsideMobileBar && !clickedInsideDropdown) {
        setSizeOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    window.addEventListener('scroll', updateAnchorRect, true)
    window.addEventListener('resize', updateAnchorRect)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('scroll', updateAnchorRect, true)
      window.removeEventListener('resize', updateAnchorRect)
    }
  }, [sizeOpen])

  const handleSelectSize = (size) => {
    setSizeOpen(false)
    setSelectedSize(size)
    setCartOpen(true)
  }

  const handleNotify = (size) => {
    setSizeOpen(false)
    setNotifySize(size)
    setNotifyOpen(true)
  }

  return (
    <>
      <div ref={containerRef} className="mobile:hidden relative flex w-full items-center justify-center gap-[4px]">
        <button
          ref={cartButtonRef}
          type="button"
          onClick={() => setSizeOpen((open) => !open)}
          aria-expanded={sizeOpen}
          className={`flex flex-1 items-center justify-center gap-[8px] px-[24px] py-[12px] transition-colors ${
            sizeOpen ? 'bg-control-thirty-hover' : 'bg-control-thirty hover:bg-control-thirty-hover'
          }`}
        >
          <span className="text-center text-sm font-medium uppercase text-text-primary">
            {sizeOpen ? 'Выберите размер' : 'Добавить в корзину'}
          </span>
        </button>
        <button
          type="button"
          className="flex items-center justify-center gap-[8px] bg-control-thirty p-[8px] transition-colors hover:bg-control-thirty-hover"
          aria-label="Поделиться"
        >
          <img src={shareIcon} alt="" className="size-[24px]" />
        </button>
        <button
          type="button"
          className="flex items-center justify-center gap-[8px] bg-control-thirty p-[8px] transition-colors hover:bg-control-thirty-hover"
          aria-label="В избранное"
        >
          <div className="relative size-[24px]">
            <div className="absolute inset-[20.22%_14.58%_16.68%_14.58%]">
              <img src={heartIcon} alt="" className="block size-full" />
            </div>
          </div>
        </button>
      </div>

      {createPortal(
        <div
          ref={mobileBarRef}
          data-mobile-cta-bar
          className="hidden mobile:flex fixed inset-x-0 bottom-0 z-30 flex-col items-start gap-[12px] border-t border-control-border bg-white px-[20px] py-[12px]"
        >
          <div className="flex w-full items-end gap-[8px]">
            <div className="flex flex-1 flex-col items-start justify-center gap-[2px] uppercase">
              <p className="whitespace-nowrap text-xs text-text-secondary">{product.badge}</p>
              <p className="w-full text-sm text-text-primary">{product.title}</p>
              <div className="flex w-full items-center gap-[8px] text-sm text-text-primary">
                <p className="font-semibold">{product.price}</p>
                <div className="flex items-center gap-[4px]">
                  <p className="line-through">{product.oldPrice}</p>
                  <p>{product.discount}</p>
                </div>
              </div>
            </div>

            <div className="flex shrink-0 flex-col items-end justify-center gap-[2px]">
              <div className="flex items-center justify-center gap-[4px]">
                {product.colors.map((color) => (
                  <button
                    key={color.hex}
                    type="button"
                    aria-label={`Цвет ${color.hex}`}
                    className={`flex items-start border p-[2px] transition-colors ${
                      color.selected
                        ? 'border-control-primary'
                        : 'border-transparent hover:border-control-border'
                    }`}
                  >
                    <div className="size-[12px]" style={{ backgroundColor: color.hex }} />
                  </button>
                ))}
              </div>
              <p className="whitespace-nowrap text-xs uppercase text-text-secondary">{product.colorName}</p>
            </div>
          </div>

          <div className="flex w-full items-center justify-center gap-[4px]">
            <button
              type="button"
              onClick={() => setSizeOpen((open) => !open)}
              aria-expanded={sizeOpen}
              className={`flex flex-1 items-center justify-center gap-[8px] px-[24px] py-[12px] transition-colors ${
                sizeOpen ? 'bg-control-thirty-hover' : 'bg-control-thirty hover:bg-control-thirty-hover'
              }`}
            >
              <span className="text-center text-sm font-medium uppercase text-text-primary">
                {sizeOpen ? 'Выберите размер' : 'Добавить в корзину'}
              </span>
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-[8px] bg-control-thirty p-[8px] transition-colors hover:bg-control-thirty-hover"
              aria-label="Поделиться"
            >
              <img src={shareIcon} alt="" className="size-[24px]" />
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-[8px] bg-control-thirty p-[8px] transition-colors hover:bg-control-thirty-hover"
              aria-label="В избранное"
            >
              <div className="relative size-[24px]">
                <div className="absolute inset-[20.22%_14.58%_16.68%_14.58%]">
                  <img src={heartIcon} alt="" className="block size-full" />
                </div>
              </div>
            </button>
          </div>
        </div>,
        document.body,
      )}

      <SizeDropdown
        open={sizeOpen}
        anchorRect={anchorRect}
        onClose={() => setSizeOpen(false)}
        onSelect={handleSelectSize}
        onNotify={handleNotify}
      />

      <CartAddedPanel
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        product={product}
        thumbnail={thumbnail}
        size={selectedSize}
      />

      <NotifyModal open={notifyOpen} onClose={() => setNotifyOpen(false)} size={notifySize} />
    </>
  )
}

export function ProductDescription({ description }) {
  return (
    <div className="flex w-full flex-col items-start text-sm leading-[16px] text-text-primary">
      {description.map((paragraph, index) => (
        <p key={paragraph} className={index < description.length - 1 ? 'mb-[4px]' : undefined}>
          {paragraph}
        </p>
      ))}
    </div>
  )
}

export function ProductAccordion({ items }) {
  const [openLabel, setOpenLabel] = useState(null)

  const toggle = (label) => {
    setOpenLabel((current) => (current === label ? null : label))
  }

  return (
    <div className="flex w-full flex-col items-start gap-[8px] bg-background-base">
      {items.map((item) => {
        const Content = ACCORDION_CONTENT[item.label]
        const isOpen = openLabel === item.label

        return (
          <div
            key={item.label}
            className={`flex w-full flex-col items-start ${isOpen ? 'gap-[12px]' : ''}`}
          >
            <button
              type="button"
              onClick={() => toggle(item.label)}
              className="group flex w-full flex-col items-start justify-center py-[4px]"
              aria-expanded={isOpen}
            >
              <div className="flex w-full items-center gap-[8px]">
                <div className="flex flex-1 items-center gap-[8px]">
                  <span className="text-left text-sm font-normal uppercase leading-[16px] text-text-primary transition-colors group-hover:text-text-primary-hover">
                    {item.label}
                  </span>
                  {item.rating && (
                    <span className="text-sm font-normal uppercase leading-[16px] text-text-secondary">
                      {item.rating}
                    </span>
                  )}
                </div>
                <img src={isOpen ? minusIcon : plusIcon} alt="" className="size-[16px]" />
              </div>
            </button>
            {isOpen && Content && <Content />}
          </div>
        )
      })}
      <button type="button" className="group flex w-full flex-col items-start justify-center py-[4px]">
        <div className="flex w-full items-center gap-[8px]">
          <span className="flex-1 text-left text-sm font-normal uppercase leading-[16px] text-text-primary transition-colors group-hover:text-text-primary-hover">
            Наличие в 10 магазинах
          </span>
          <img src={storeIcon} alt="" className="size-[16px]" />
        </div>
      </button>
      <button type="button" className="group flex w-full flex-col items-start justify-center py-[4px]">
        <div className="flex w-full items-center gap-[8px]">
          <img src={tryonIcon} alt="" className="size-[16px]" />
          <span className="flex-1 text-left text-sm font-normal uppercase leading-[16px] text-text-primary transition-colors group-hover:text-text-primary-hover">
            Виртуальная примерка
          </span>
        </div>
      </button>
    </div>
  )
}
