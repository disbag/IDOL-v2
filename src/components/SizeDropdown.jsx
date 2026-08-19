import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { sizeOptions } from '../data/accordionData'

function SizeList({ variant = 'desktop', onSelect, onNotify }) {
  const isMobile = variant === 'mobile'

  return (
    <div className={`flex w-full flex-col ${isMobile ? 'gap-[24px]' : 'gap-[4px]'}`}>
      {sizeOptions.map((size) => (
        <button
          key={size.label}
          type="button"
          onClick={() => (size.available ? onSelect(size.label) : onNotify(size.label))}
          className={`relative flex w-full items-center gap-[4px] text-sm uppercase text-text-primary transition-colors ${
            isMobile ? 'py-0' : 'px-[12px] py-[8px] hover:bg-background-secondary'
          }`}
        >
          <span className="flex-1 text-left">{size.label}</span>
          {size.lastOne && (
            <span className="shrink-0 rounded-full bg-background-secondary px-[8px] py-[2px] text-xs font-medium uppercase text-text-secondary">
              Последний
            </span>
          )}
          {!size.available && (
            <span
              className={`shrink-0 whitespace-nowrap text-xs text-text-secondary ${
                isMobile ? 'absolute right-0 top-[2px] text-right' : 'text-right'
              }`}
            >
              Сообщить о поступлении
            </span>
          )}
        </button>
      ))}
    </div>
  )
}

export default function SizeDropdown({ open, anchorRect, onClose, onSelect, onNotify }) {
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

  if (!shouldRender) return null

  return createPortal(
    <>
      {anchorRect && (
        <div
          className="size-dropdown-enter mobile:hidden fixed z-50 flex flex-col items-center bg-background-base shadow-[0px_4px_8px_0px_rgba(0,0,0,0.02),0px_10px_16px_0px_rgba(0,0,0,0.02),0px_2px_4px_0px_rgba(0,0,0,0.02),0px_1px_2px_0px_rgba(0,0,0,0.03)]"
          style={{ top: anchorRect.bottom, left: anchorRect.left, width: anchorRect.width }}
        >
          <div className="flex w-full flex-col items-center gap-[20px] border-b border-control-border p-[20px]">
            <SizeList onSelect={onSelect} onNotify={onNotify} />
          </div>
          <div className="flex w-full items-center p-[8px]">
            <button
              type="button"
              className="flex flex-1 items-center px-[12px] py-[8px] text-center text-xs uppercase text-text-primary transition-colors hover:bg-background-secondary"
            >
              Таблица размеров
            </button>
          </div>
        </div>
      )}

      <div className="hidden mobile:block fixed inset-0 z-[60]">
        <div
          className={`absolute inset-0 bg-black/10 transition-opacity duration-300 ease-out ${
            animateIn ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={onClose}
        />
        <div
          className={`size-dropdown-enter absolute inset-x-0 bottom-0 flex flex-col items-stretch bg-background-base shadow-[0px_-4px_8px_0px_rgba(0,0,0,0.02),0px_-10px_16px_0px_rgba(0,0,0,0.02),0px_-2px_4px_0px_rgba(0,0,0,0.02),0px_-1px_2px_0px_rgba(0,0,0,0.03)] transition-transform duration-300 ease-out ${
            animateIn ? 'translate-y-0' : 'translate-y-full'
          }`}
        >
          <div className="flex w-full flex-col items-center gap-[24px] border-b border-control-border px-[40px] py-[24px]">
            <p className="w-full text-sm font-medium uppercase text-text-secondary">Выберите размер</p>
            <SizeList variant="mobile" onSelect={onSelect} onNotify={onNotify} />
          </div>
          <div className="flex w-full items-center px-[40px] py-[24px]">
            <button
              type="button"
              className="text-sm uppercase text-text-primary transition-colors hover:text-text-primary-hover"
            >
              Таблица размеров
            </button>
          </div>
        </div>
      </div>
    </>,
    document.body,
  )
}
