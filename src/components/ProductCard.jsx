import addButtonIcon from '../assets/icons/plus.svg'
import arrowRightIcon from '../assets/icons/arrow-right.svg'

export function LookProductCard({ image, className = '' }) {
  return (
    <div className={`flex flex-col items-start gap-[8px] bg-brand-white ${className}`}>
      <div className="relative flex w-full items-center overflow-hidden bg-background-secondary">
        <div className="aspect-[165/248] flex-1">
          <img src={image} alt="" className="pointer-events-none absolute inset-0 size-full object-cover" />
        </div>
        <div className="absolute bottom-0 right-0 flex items-end p-[4px]">
          <button type="button" aria-label="Добавить в корзину" className="transition-opacity hover:opacity-60">
            <img src={addButtonIcon} alt="" className="size-[16px]" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function ProductCard({ image, name, price, oldPrice, colors, badge, width, className = '' }) {
  return (
    <div
      className={`flex flex-col items-start gap-[8px] bg-brand-white pb-[16px] ${className}`}
      style={width ? { width } : undefined}
    >
      <div className="relative w-full overflow-hidden bg-background-secondary">
        <div className="aspect-[165/248]">
          <img src={image} alt={name} className="pointer-events-none absolute inset-0 size-full object-cover" />
        </div>
        {badge && (
          <div className="absolute left-[12px] top-[12px] text-[8px] font-medium uppercase leading-[10px] text-text-primary">
            {badge}
          </div>
        )}
      </div>
      <div className="flex w-full items-start gap-[2px]">
        <div className="flex flex-1 flex-col items-start gap-[2px]">
          <p className="line-clamp-2 w-full text-[8px] uppercase leading-[10px] text-text-primary">{name}</p>
          <div className="flex h-[10px] items-start gap-[4px]">
            <p className="whitespace-nowrap text-[8px] uppercase leading-[10px] text-text-primary">{price}</p>
            {oldPrice && (
              <p className="whitespace-nowrap text-[8px] leading-[10px] text-text-secondary line-through">{oldPrice}</p>
            )}
          </div>
          {colors && (
            <p className="w-full overflow-hidden text-ellipsis text-[8px] leading-[10px] text-text-secondary">
              {colors}
            </p>
          )}
        </div>
        <button
          type="button"
          aria-label={`Перейти к товару ${name}`}
          className="flex max-h-[20px] shrink-0 items-center self-stretch px-[2px] transition-opacity hover:opacity-60"
        >
          <img src={arrowRightIcon} alt="" className="size-[16px]" />
        </button>
      </div>
    </div>
  )
}
