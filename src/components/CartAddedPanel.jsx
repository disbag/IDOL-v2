import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import addButtonIcon from '../assets/icons/plus.svg'
import { cartSuggestedProducts } from '../data/productData'

function SuggestedCard({ image, name, price, colors }) {
  return (
    <div className="flex flex-col items-start gap-[8px] bg-brand-white pb-[16px]">
      <div className="relative w-full overflow-hidden bg-background-secondary">
        <div className="aspect-[165/248]">
          <img src={image} alt={name} className="pointer-events-none absolute inset-0 size-full object-cover" />
        </div>
        <div className="absolute bottom-0 right-0 flex items-end p-[4px]">
          <button type="button" aria-label="Добавить в корзину" className="transition-opacity hover:opacity-60">
            <img src={addButtonIcon} alt="" className="size-[16px]" />
          </button>
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-[2px]">
        <p className="line-clamp-2 w-full text-[8px] uppercase leading-[10px] text-text-primary">{name}</p>
        <p className="whitespace-nowrap text-[8px] uppercase leading-[10px] text-text-primary">{price}</p>
        {colors && (
          <p className="w-full overflow-hidden text-ellipsis text-[8px] leading-[10px] text-text-secondary">
            {colors}
          </p>
        )}
      </div>
    </div>
  )
}

export default function CartAddedPanel({ open, onClose, product, thumbnail, size }) {
  const [shouldRender, setShouldRender] = useState(open)
  const [animateIn, setAnimateIn] = useState(false)

  useEffect(() => {
    let rafId
    let timeoutId

    if (open) {
      setShouldRender(true)
      rafId = requestAnimationFrame(() => {
        rafId = requestAnimationFrame(() => setAnimateIn(true))
      })
    } else {
      setAnimateIn(false)
      timeoutId = setTimeout(() => setShouldRender(false), 300)
    }

    return () => {
      cancelAnimationFrame(rafId)
      clearTimeout(timeoutId)
    }
  }, [open])

  useEffect(() => {
    if (!shouldRender) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [shouldRender, onClose])

  if (!shouldRender) return null

  return createPortal(
    <div className="fixed inset-0 z-[60]">
      <div
        className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ease-out ${
          animateIn ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      <div
        className={`absolute flex h-full w-[480px] flex-col bg-background-base transition-transform duration-300 ease-out right-0 top-0 mobile:inset-x-0 mobile:bottom-0 mobile:top-auto mobile:h-auto mobile:max-h-[calc(100dvh-194px)] mobile:w-full ${
          animateIn ? 'translate-x-0 mobile:translate-y-0' : 'translate-x-full mobile:translate-x-0 mobile:translate-y-full'
        }`}
      >
        <div className="flex w-full shrink-0 items-center justify-between border-b border-control-border px-[40px] py-[24px] mobile:p-[20px]">
          <div className="flex w-[224px] shrink-0 items-center gap-[8px]">
            <img src={thumbnail} alt="" className="h-[42px] w-[32px] object-cover" />
            <div className="flex flex-col items-start justify-center gap-[4px] uppercase text-text-primary">
              <p className="whitespace-nowrap text-sm">Добавлен в корзину</p>
              <div className="flex flex-col items-start gap-[2px] text-xs">
                <p>Цвет {product.colorName.toLowerCase()}</p>
                <p>Размер {size}</p>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="flex shrink-0 flex-col items-center justify-center border-b border-control-primary pb-[2px] transition-colors hover:border-control-primary-hover hover:text-text-primary-hover"
          >
            <p className="whitespace-nowrap text-xs uppercase text-text-primary">Перейти в корзину</p>
          </button>
        </div>

        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto mobile:overscroll-contain">
          <p className="w-full shrink-0 px-[40px] pb-[16px] pt-[24px] text-sm font-medium uppercase text-text-primary mobile:px-[20px]">
            Может быть интересно
          </p>
          <div className="grid w-full grid-cols-3 gap-x-[8px] gap-y-[16px] px-[40px] pb-[40px] mobile:px-[20px] mobile:pb-[24px]">
            {cartSuggestedProducts.map((item, index) => (
              <SuggestedCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
