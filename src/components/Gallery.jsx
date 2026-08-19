import arIcon from '../assets/icons/tryon.svg'

export default function Gallery({ images, onImageClick, onLookClick }) {
  return (
    <>
      <div className="mobile:hidden grid min-w-0 flex-1 grid-cols-2 gap-[20px]">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => onImageClick?.(index)}
            className={`relative aspect-[1900/2500] cursor-zoom-in ${index === 0 ? 'col-span-2' : ''}`}
          >
            <img
              src={image}
              alt={`Фото товара ${index + 1}`}
              className="absolute inset-0 size-full object-cover"
            />
          </button>
        ))}
      </div>

      <div className="hidden mobile:flex no-scrollbar w-full snap-x snap-mandatory overflow-x-auto">
        {images.map((image, index) => (
          <div
            key={image}
            className="relative w-full shrink-0 snap-start"
            style={{ height: 'calc(100dvh - var(--mobile-cta-h, 124px))' }}
          >
            <button
              type="button"
              onClick={() => onImageClick?.(index)}
              className="absolute inset-0 size-full cursor-zoom-in"
            >
              <img
                src={image}
                alt={`Фото товара ${index + 1}`}
                className="absolute inset-0 size-full object-cover"
              />
            </button>

            {index === 0 && (
              <>
                <div className="pointer-events-none absolute bottom-[15px] left-[20px] size-[24px]">
                  <img src={arIcon} alt="" className="size-full" />
                </div>
                <button
                  type="button"
                  onClick={onLookClick}
                  className="absolute bottom-[16px] right-[20px] border-b border-control-primary py-[4px] text-center text-xs font-medium uppercase text-text-primary"
                >
                  Весь образ
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  )
}
