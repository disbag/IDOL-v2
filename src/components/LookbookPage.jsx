import { useLayoutEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import LookbookGrid from './LookbookGrid'
import ProductCard from './ProductCard'
import { homeSlides, lookGrid, lookLandscape } from '../data/lookbookData'
import { footerColumns, footerSocial } from '../data/productData'
import chevronLeft from '../assets/icons/chevron-left.svg'
import chevronRight from '../assets/icons/chevron-right.svg'

const SLIDE_MS = 1000
const EASE = 'cubic-bezier(0.45, 0, 0.15, 1)'
const PARALLAX = 8
const PEEK_SCALE = 0.86

function prefersReducedMotion() {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
}

function PlacedPhoto({ src, alt, style, className = '' }) {
  return (
    <img
      src={src}
      alt={alt}
      draggable={false}
      className={`absolute max-w-none object-cover ${className}`}
      style={style}
    />
  )
}

function PhotoBand({ bg = '#ffffff', images, mobileImages, className = '', children }) {
  return (
    <div
      className={`relative w-full overflow-hidden aspect-[1440/840] ${className}`}
      style={{ backgroundColor: bg }}
    >
      {images.map((image) => (
        <PlacedPhoto
          key={image.src}
          src={image.src}
          alt={image.alt}
          style={image.style}
          className={mobileImages ? 'mobile:hidden' : ''}
        />
      ))}
      {mobileImages?.map((image) => (
        <PlacedPhoto
          key={`m-${image.src}`}
          src={image.src}
          alt={image.alt}
          style={image.style}
          className="hidden mobile:block"
        />
      ))}
      {children}
    </div>
  )
}

function CollectionButton({ className = '' }) {
  return (
    <Link
      to="/catalog"
      className={`flex items-center justify-center gap-[8px] bg-control-thirty px-[24px] py-[12px] text-center text-sm font-medium uppercase text-text-primary transition-colors hover:bg-control-thirty-hover ${className}`}
    >
      Смотреть коллекцию
    </Link>
  )
}

function AllLooksButton({ className = '' }) {
  return (
    <Link
      to="/catalog"
      className={`flex items-center justify-center gap-[8px] bg-control-thirty px-[24px] py-[12px] text-center text-sm font-medium uppercase text-text-primary transition-colors hover:bg-control-thirty-hover ${className}`}
    >
      Все образы
    </Link>
  )
}

function PhotoGrid2x2({ items }) {
  return (
    <div className="grid w-full grid-cols-2 gap-[40px] p-[40px] mobile:gap-[12px] mobile:p-[12px]">
      {items.map((item) => (
        <div key={item.src} className="relative aspect-[660/840] overflow-hidden">
          <img
            src={item.src}
            alt={item.alt}
            draggable={false}
            className="absolute inset-0 size-full object-cover"
            style={item.style}
          />
        </div>
      ))}
    </div>
  )
}

function HeroHeading({ lines }) {
  return (
    <div className="absolute bottom-[162px] right-[520px] z-[1] translate-x-full text-left text-white mobile:bottom-[26%] mobile:right-[40px] mobile:left-[40px] mobile:translate-x-0">
      {lines.map((line) => (
        <p
          key={line}
          className="whitespace-nowrap text-[44px] font-extrabold leading-[40px] mobile:whitespace-normal mobile:text-[28px] mobile:leading-[32px]"
        >
          {line}
        </p>
      ))}
    </div>
  )
}

function CategoryGrid({ items }) {
  return (
    <section className="grid w-full grid-cols-4 gap-[20px] px-[120px] pb-[120px] pt-[120px] mobile:grid-cols-2 mobile:gap-[12px] mobile:p-[40px]">
      {items.map((item) => (
        <Link key={item.name} to="/catalog" className="relative aspect-[540/720] overflow-hidden">
          <img src={item.image} alt={item.name} draggable={false} className="absolute inset-0 size-full object-cover" />
        </Link>
      ))}
    </section>
  )
}

const editorialCopy = (
  <>
    новая коллекция IDOL посвящена современному тейлорингу, в котором структурность и мягкость создают ощущение
    силы.
    <br />
    среди знаковых моделей — бомбер и брюки карго в утилитарном стиле.
  </>
)

function EditorialBody({ pair, active }) {
  return (
    <div className="flex w-full flex-col bg-white">
      <div className="relative w-full overflow-hidden bg-white aspect-[1440/840] mobile:hidden">
        {pair.images.map((image) => (
          <PlacedPhoto key={image.src} src={image.src} alt={image.alt} style={image.style} />
        ))}
        <div className="absolute inset-y-0 left-1/2 right-0 bg-background-secondary" />
        <p className="absolute bottom-[14.286%] left-[58.333%] w-[24.514%] font-extrabold text-[max(16px,1.667vw)] leading-none text-text-primary">
          {editorialCopy}
        </p>
      </div>

      <div className="relative hidden w-full overflow-hidden bg-white aspect-[390/340] mobile:block">
        {(pair.mobileImages ?? pair.images).map((image) => (
          <PlacedPhoto key={image.src} src={image.src} alt={image.alt} style={image.style} />
        ))}
      </div>

      <div className="hidden h-[350px] flex-col items-start justify-center bg-background-secondary px-[40px] py-[87px] mobile:flex">
        <p className="w-full font-extrabold text-[20px] leading-[22px] text-text-primary">{editorialCopy}</p>
      </div>

      <div className="flex flex-col items-center pt-[120px] pb-[100px] mobile:pt-[40px] mobile:pb-[40px]">
        <LookbookGrid photos={lookGrid} active={active} />
        <div className="mt-[20px] flex w-full items-center justify-center px-[120px] mobile:px-[40px]">
          <AllLooksButton className="mobile:w-full" />
        </div>
      </div>

      <div className="relative mx-[120px] overflow-hidden aspect-[1200/720] mobile:mx-0 mobile:aspect-[390/520]">
        <img
          src={lookLandscape}
          alt="Студийный кадр коллекции"
          draggable={false}
          className="absolute inset-0 size-full object-cover object-top"
        />
      </div>
    </div>
  )
}

function CollectionProducts({ products }) {
  return (
    <section className="flex w-full flex-col items-start justify-center gap-[20px] px-[120px] pb-[40px] pt-[120px] mobile:gap-[16px] mobile:px-[20px] mobile:pb-0 mobile:pt-[40px]">
      <p className="w-full text-md font-semibold uppercase leading-[18px] text-text-primary">Новая коллекция</p>
      <div className="grid w-full grid-cols-4 gap-x-[20px] mobile:grid-cols-2">
        {products.map((item) => (
          <ProductCard key={item.name} {...item} />
        ))}
      </div>
      <div className="flex w-full items-center justify-center mobile:px-0 mobile:pt-0 mobile:pb-[40px]">
        <CollectionButton className="mobile:w-full" />
      </div>
    </section>
  )
}

function SlideBody({ slide, active }) {
  if (slide.kind === 'editorial') {
    return <EditorialBody pair={slide.pair} active={active} />
  }

  return (
    <div className="flex w-full flex-col">
      {slide.grid && <PhotoGrid2x2 items={slide.grid} />}
      {slide.bands.map((band, i) => (
        <PhotoBand
          key={band.images[0].src}
          bg={band.bg}
          images={band.images}
          mobileImages={band.mobileImages}
          className={band.mobileClassName}
        >
          {slide.cta && i === slide.bands.length - 1 && (
            <div className="absolute right-[180px] bottom-[100px] z-[1] flex flex-col items-start gap-[20px] mobile:right-[40px] mobile:bottom-[40px] mobile:left-[40px]">
              <p className="w-[372px] text-lg text-white mobile:w-full">
                Новая коллекция IDOL посвящена современному тейлорингу, в котором структурность и мягкость создают
                ощущение силы
              </p>
              <CollectionButton className="mobile:w-full" />
            </div>
          )}
          {slide.ctaBox && i === slide.bands.length - 1 && (
            <div className="absolute bottom-[90px] left-[90px] z-[1] flex w-[372px] flex-col items-start gap-[20px] bg-[#181818] p-[40px] mobile:bottom-[20px] mobile:left-[20px] mobile:right-[20px] mobile:w-auto mobile:p-[24px]">
              <p className="text-[14px] uppercase leading-[20px] text-white">{slide.ctaBox.text}</p>
              <CollectionButton className="mobile:w-full" />
            </div>
          )}
        </PhotoBand>
      ))}
      {slide.products && <CollectionProducts products={slide.products} />}
      {slide.categories && <CategoryGrid items={slide.categories} />}
    </div>
  )
}

function SlideNav({ prevTitle, nextTitle, busy, invert, onPrev, onNext }) {
  const labelClass = invert
    ? 'text-text-primary mobile:text-white'
    : 'text-text-primary'
  const iconClass = invert ? 'size-[24px] shrink-0 mobile:brightness-0 mobile:invert' : 'size-[24px] shrink-0'
  const btnClass =
    'absolute top-1/2 z-10 flex -translate-y-[12px] flex-col items-center gap-[20px] disabled:pointer-events-none mobile:gap-[24px]'

  return (
    <>
      <button
        type="button"
        aria-label={`Предыдущий слайд: ${prevTitle}`}
        disabled={busy}
        onClick={onPrev}
        className={`${btnClass} left-0 px-[40px] mobile:px-[10px]`}
      >
        <img src={chevronLeft} alt="" className={iconClass} />
        <span
          className={`rotate-180 whitespace-nowrap text-sm font-normal uppercase leading-[18px] [writing-mode:vertical-rl] ${labelClass}`}
        >
          {prevTitle}
        </span>
      </button>
      <button
        type="button"
        aria-label={`Следующий слайд: ${nextTitle}`}
        disabled={busy}
        onClick={onNext}
        className={`${btnClass} right-0 px-[40px] mobile:px-[10px]`}
      >
        <img src={chevronRight} alt="" className={iconClass} />
        <span
          className={`rotate-180 whitespace-nowrap text-sm font-normal uppercase leading-[18px] [writing-mode:vertical-rl] ${labelClass}`}
        >
          {nextTitle}
        </span>
      </button>
    </>
  )
}

function Hero({ slide, caption, shift, animate, children }) {
  const transition = animate ? `transform ${SLIDE_MS}ms ${EASE}` : 'none'

  return (
    <section
      data-hero
      className="relative h-dvh w-full overflow-hidden"
      style={{ backgroundColor: slide.bg }}
    >
      <div
        className={`absolute inset-0 will-change-transform mobile:origin-top ${slide.originTop ? 'origin-top' : ''}`}
        style={{
          transform: `translate3d(${shift}%, 0, 0) scale(1.18)`,
          transition,
        }}
      >
        {slide.images.map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            draggable={false}
            className={`absolute max-w-none object-cover ${slide.mobileImages ? 'mobile:hidden' : ''}`}
            style={image.style}
          />
        ))}
        {slide.mobileImages?.map((image) => (
          <img
            key={`m-${image.src}`}
            src={image.src}
            alt={image.alt}
            draggable={false}
            className="absolute hidden max-w-none object-cover mobile:block"
            style={image.style}
          />
        ))}
        {slide.gradient && (
          <div className="pointer-events-none absolute inset-0" style={{ backgroundImage: slide.gradient }} />
        )}
      </div>
      {slide.caption && caption}
      {slide.heading && <HeroHeading lines={slide.heading.lines} />}
      {children}
    </section>
  )
}

function slideStyle(i, index, prevIndex, direction, phase) {
  const isActive = i === index
  const isPrev = i === prevIndex
  const animate = phase === 'run'
  const transition = animate ? `transform ${SLIDE_MS}ms ${EASE}` : 'none'
  // Incoming panel enters from the side it's approaching from, so it should
  // shrink toward that same edge; the outgoing panel shrinks toward the
  // opposite edge as it leaves — mirrors a coverflow-style carousel.
  const incomingOrigin = direction === 1 ? 'right center' : 'left center'
  const outgoingOrigin = direction === 1 ? 'left center' : 'right center'

  if (isActive && phase === 'start') {
    return {
      zIndex: 2,
      visibility: 'visible',
      pointerEvents: 'none',
      transformOrigin: incomingOrigin,
      transform: `translate3d(${direction * 100}%, 0, 0) scale(${PEEK_SCALE})`,
      transition: 'none',
    }
  }

  if (isActive && phase === 'run') {
    return {
      zIndex: 2,
      visibility: 'visible',
      pointerEvents: 'none',
      transformOrigin: incomingOrigin,
      transform: 'translate3d(0, 0, 0) scale(1)',
      transition,
    }
  }

  if (isActive) {
    return {
      zIndex: 1,
      visibility: 'visible',
      pointerEvents: 'auto',
      transform: 'translate3d(0, 0, 0) scale(1)',
      transition: 'none',
    }
  }

  if (isPrev && phase === 'start') {
    return {
      zIndex: 1,
      visibility: 'visible',
      pointerEvents: 'none',
      transformOrigin: outgoingOrigin,
      transform: 'translate3d(0, 0, 0) scale(1)',
      transition: 'none',
    }
  }

  if (isPrev && phase === 'run') {
    return {
      zIndex: 1,
      visibility: 'visible',
      pointerEvents: 'none',
      transformOrigin: outgoingOrigin,
      transform: `translate3d(${-direction * 100}%, 0, 0) scale(${PEEK_SCALE})`,
      transition,
    }
  }

  if (isPrev) {
    return {
      zIndex: 1,
      visibility: 'visible',
      pointerEvents: 'none',
      transform: 'translate3d(0, 0, 0) scale(1)',
      transition: 'none',
    }
  }

  return {
    zIndex: 0,
    visibility: 'hidden',
    pointerEvents: 'none',
    transform: 'translate3d(0, 0, 0) scale(1)',
    transition: 'none',
  }
}

function heroShift(i, index, prevIndex, direction, phase) {
  if (phase === 'idle') return 0
  if (i === index) {
    return phase === 'start' ? -direction * PARALLAX : 0
  }
  if (i === prevIndex) {
    return phase === 'run' ? direction * PARALLAX : 0
  }
  return 0
}

export default function LookbookPage() {
  const [index, setIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(null)
  const [direction, setDirection] = useState(1)
  const [phase, setPhase] = useState('idle')
  const heroRef = useRef(null)
  const scrollRootRef = useRef(null)
  const panelRefs = useRef([])
  const count = homeSlides.length
  const busy = phase !== 'idle'

  const caption = (
    <div className="absolute bottom-[120px] left-[120px] z-[1] w-[199px] uppercase text-text-primary mobile:bottom-[26%] mobile:left-[65px]">
      <p className="whitespace-nowrap text-sm font-bold leading-[18px]">Сила формы</p>
      <p className="text-sm font-light leading-[16px]">
        Новая коллекция <span className="font-bold">IDOL</span>
        <br />
        посвящена современному
        <br />
        тейлорингу, в котором
        <br />
        структурность и мягкость
        <br />
        создают ощущение силы
      </p>
    </div>
  )

  const bindRefs = (i) => (el) => {
    panelRefs.current[i] = el
    if (i === index) {
      scrollRootRef.current = el
      heroRef.current = el?.querySelector('[data-hero]') ?? null
    }
  }

  useLayoutEffect(() => {
    const panel = panelRefs.current[index]
    if (panel) panel.scrollTop = 0
    scrollRootRef.current = panel
    heroRef.current = panel?.querySelector('[data-hero]') ?? null
  }, [index])

  useLayoutEffect(() => {
    if (phase !== 'start') return undefined
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => setPhase('run'))
    })
    return () => cancelAnimationFrame(id)
  }, [phase])

  useLayoutEffect(() => {
    if (phase !== 'run') return undefined
    const id = window.setTimeout(() => {
      setPhase('idle')
      setPrevIndex(null)
    }, SLIDE_MS + 80)
    return () => window.clearTimeout(id)
  }, [phase])

  const wrap = (i) => ((i % count) + count) % count

  const goTo = (target, dir) => {
    if (busy || target === index) return

    const incoming = panelRefs.current[target]
    if (incoming) incoming.scrollTop = 0

    setPrevIndex(index)
    setDirection(dir)
    setIndex(target)

    if (prefersReducedMotion()) {
      setPhase('idle')
      setPrevIndex(null)
      return
    }

    setPhase('start')
  }

  const onPanelTransitionEnd = (event, i) => {
    if (i !== index || phase !== 'run') return
    if (event.propertyName !== 'transform') return
    if (event.target !== panelRefs.current[i]) return
    setPhase('idle')
    setPrevIndex(null)
  }

  return (
    <div className="relative h-dvh w-full overflow-hidden bg-white">
      <Header
        alwaysShowLogo
        invert={Boolean(
          phase === 'idle'
            ? homeSlides[index].hero.headerInvert
            : homeSlides[prevIndex]?.hero.headerInvert,
        )}
        opaqueAfterRef={heroRef}
        scrollRootRef={scrollRootRef}
        scrollKey={index}
      />

      {homeSlides.map((slide, i) => {
        const style = slideStyle(i, index, prevIndex, direction, phase)
        const shift = heroShift(i, index, prevIndex, direction, phase)
        const animateHero = phase === 'run' && (i === index || i === prevIndex)

        return (
          <div
            key={i}
            ref={bindRefs(i)}
            className="home-slide no-scrollbar absolute inset-0 overflow-x-hidden overflow-y-auto overscroll-contain will-change-transform"
            style={style}
            onTransitionEnd={(event) => onPanelTransitionEnd(event, i)}
          >
            <Hero slide={slide.hero} caption={caption} shift={shift} animate={animateHero}>
              <SlideNav
                prevTitle={homeSlides[wrap(i - 1)].title}
                nextTitle={homeSlides[wrap(i + 1)].title}
                busy={busy}
                invert={slide.hero.navInvert}
                onPrev={() => goTo(wrap(i - 1), -1)}
                onNext={() => goTo(wrap(i + 1), 1)}
              />
            </Hero>
            <SlideBody slide={slide} active={i === index && phase === 'idle'} />
            <Footer columns={footerColumns} social={footerSocial} ctaInset={false} />
          </div>
        )
      })}
    </div>
  )
}
