import { useEffect, useRef, useState } from 'react'
import closeIcon from '../assets/icons/close.svg'

const MOBILE_QUERY = '(max-width: 767px)'

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => window.matchMedia(MOBILE_QUERY).matches)

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY)
    const handleChange = () => setIsMobile(mq.matches)
    mq.addEventListener('change', handleChange)
    return () => mq.removeEventListener('change', handleChange)
  }, [])

  return isMobile
}

function useActiveIndexObserver(scrollRootRef, imageRefs, images, enabled, initialIndex = 0) {
  const [activeIndex, setActiveIndex] = useState(initialIndex)

  useEffect(() => {
    if (!enabled) return

    const root = scrollRootRef.current
    if (!root) return

    const ratios = new Map()
    const threshold = Array.from({ length: 21 }, (_, i) => i / 20)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(entry.target.dataset.index, entry.intersectionRatio)
        })

        let bestIndex = null
        let bestRatio = -1
        ratios.forEach((ratio, index) => {
          if (ratio > bestRatio) {
            bestRatio = ratio
            bestIndex = index
          }
        })

        if (bestIndex !== null) {
          setActiveIndex(Number(bestIndex))
        }
      },
      { root, threshold },
    )

    imageRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [scrollRootRef, imageRefs, images, enabled])

  return [activeIndex, setActiveIndex]
}

export default function FullscreenGallery({ images, startIndex = 0, onClose }) {
  const isMobile = useIsMobile()
  const desktopScrollRef = useRef(null)
  const mobileScrollRef = useRef(null)
  const desktopImageRefs = useRef([])
  const mobileImageRefs = useRef([])

  const [desktopActiveIndex, setDesktopActiveIndex] = useActiveIndexObserver(
    desktopScrollRef,
    desktopImageRefs,
    images,
    !isMobile,
    startIndex,
  )
  const [mobileActiveIndex, setMobileActiveIndex] = useActiveIndexObserver(
    mobileScrollRef,
    mobileImageRefs,
    images,
    isMobile,
    startIndex,
  )

  const activeIndex = isMobile ? mobileActiveIndex : desktopActiveIndex

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    setDesktopActiveIndex(startIndex)
    setMobileActiveIndex(startIndex)
  }, [startIndex, setDesktopActiveIndex, setMobileActiveIndex])

  useEffect(() => {
    if (isMobile) {
      mobileImageRefs.current[startIndex]?.scrollIntoView({ inline: 'start', block: 'nearest' })
      return
    }

    desktopImageRefs.current[startIndex]?.scrollIntoView({ block: 'start' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const scrollToImage = (index) => {
    if (isMobile) {
      mobileImageRefs.current[index]?.scrollIntoView({ inline: 'start', block: 'nearest', behavior: 'smooth' })
      return
    }

    desktopImageRefs.current[index]?.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }

  return (
    <div className="fixed inset-0 z-50 bg-background-base">
      <button
        type="button"
        onClick={onClose}
        className="fixed right-[20px] top-[20px] z-10 size-[24px] mobile:top-[15px]"
        aria-label="Закрыть"
      >
        <img src={closeIcon} alt="" className="size-full" />
      </button>

      {/* Desktop: vertical scroll + left thumbnails */}
      <div ref={desktopScrollRef} className="mobile:hidden size-full overflow-y-auto">
        <div className="flex gap-[40px] border-b border-control-border pb-[80px] pl-[40px] pr-[64px]">
          <div className="sticky top-0 grid w-[80px] shrink-0 grid-cols-1 gap-[20px] self-start py-[40px]">
            {images.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => scrollToImage(index)}
                className={`h-[110px] w-full shrink-0 ${index === activeIndex ? 'opacity-100' : 'opacity-20'}`}
                aria-label={`Показать фото ${index + 1}`}
              >
                <img src={image} alt="" className="pointer-events-none size-full object-cover" />
              </button>
            ))}
          </div>

          <div className="grid min-w-0 flex-1 grid-cols-1 gap-[20px] py-[40px]">
            {images.map((image, index) => (
              <div
                key={image}
                data-index={index}
                ref={(el) => (desktopImageRefs.current[index] = el)}
                className="aspect-[1900/2500] w-full"
              >
                <img src={image} alt={`Фото товара ${index + 1}`} className="size-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: horizontal scroll + bottom thumbnails */}
      <div className="hidden mobile:flex size-full flex-col">
        <div
          ref={mobileScrollRef}
          className="no-scrollbar flex size-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden"
        >
          {images.map((image, index) => (
            <div
              key={image}
              data-index={index}
              ref={(el) => (mobileImageRefs.current[index] = el)}
              className="h-full w-full shrink-0 snap-start"
            >
              <img src={image} alt={`Фото товара ${index + 1}`} className="size-full object-cover" />
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-[30px] z-10 flex justify-center">
          <div className="pointer-events-auto flex items-center gap-[2px]">
            {images.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => scrollToImage(index)}
                className={`relative h-[40px] w-[30px] shrink-0 ${
                  index === activeIndex ? 'border border-control-primary' : 'opacity-20'
                }`}
                aria-label={`Показать фото ${index + 1}`}
                aria-current={index === activeIndex ? 'true' : undefined}
              >
                <img src={image} alt="" className="pointer-events-none size-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
