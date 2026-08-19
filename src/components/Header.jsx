import { useEffect, useRef, useState } from 'react'
import menuIcon from '../assets/icons/menu.svg'
import logo from '../assets/icons/logo.svg'
import searchIcon from '../assets/icons/search.svg'
import userIcon from '../assets/icons/user.svg'
import heartIcon from '../assets/icons/heart-outline.svg'
import cartIcon from '../assets/icons/cart.svg'

export default function Header({ cartCount = 4, opaqueAfterRef }) {
  const headerRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => {
      const cover = opaqueAfterRef?.current
      const header = headerRef.current
      if (!cover || !header) {
        setScrolled(false)
        return
      }
      setScrolled(cover.getBoundingClientRect().bottom <= header.getBoundingClientRect().bottom)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [opaqueAfterRef])

  return (
    <header
      ref={headerRef}
      className={`fixed inset-x-0 top-0 z-20 flex w-full items-center justify-center px-[40px] py-[10px] mobile:px-[12px] mobile:py-[7px] transition-colors duration-200 ${
        scrolled ? 'bg-background-base' : 'bg-transparent'
      }`}
    >
      <div className="flex flex-1 items-center gap-[24px] mobile:gap-[8px]">
        <button
          type="button"
          className="flex items-center justify-center gap-[8px] p-[8px] transition-colors hover:bg-background-secondary"
          aria-label="Меню"
        >
          <img src={menuIcon} alt="" className="size-[24px]" />
        </button>
        <a
          href="#"
          className="whitespace-nowrap text-center text-sm uppercase text-text-primary transition-colors hover:text-text-primary-hover mobile:hidden"
        >
          женщинам
        </a>
        <a
          href="#"
          className="whitespace-nowrap text-center text-sm uppercase text-text-primary transition-colors hover:text-text-primary-hover mobile:hidden"
        >
          Мужчинам
        </a>
        <button
          type="button"
          className="hidden items-center justify-center p-[8px] transition-colors hover:bg-background-secondary mobile:flex"
          aria-label="Поиск"
        >
          <img src={searchIcon} alt="" className="size-[24px]" />
        </button>
      </div>

      <a
        href="#"
        className={`h-[44px] w-[120px] shrink-0 mobile:h-[24px] mobile:w-[64px] ${scrolled ? '' : 'mobile:hidden'}`}
      >
        <img src={logo} alt="IDOL" className="size-full" />
      </a>

      <div className="flex flex-1 items-center justify-end gap-[8px]">
        <button
          type="button"
          className="flex items-center justify-center p-[8px] transition-colors hover:bg-background-secondary mobile:hidden"
          aria-label="Поиск"
        >
          <img src={searchIcon} alt="" className="size-[24px]" />
        </button>
        <button
          type="button"
          className="flex items-center justify-center p-[8px] transition-colors hover:bg-background-secondary mobile:hidden"
          aria-label="Профиль"
        >
          <img src={userIcon} alt="" className="size-[24px]" />
        </button>
        <button
          type="button"
          className="flex items-center justify-center p-[8px] transition-colors hover:bg-background-secondary"
          aria-label="Избранное"
        >
          <div className="relative size-[24px]">
            <div className="absolute inset-[20.22%_14.58%_16.68%_14.58%]">
              <img src={heartIcon} alt="" className="block size-full" />
            </div>
          </div>
        </button>
        <button
          type="button"
          className="flex items-center justify-center p-[8px] transition-colors hover:bg-background-secondary"
          aria-label="Корзина"
        >
          <div className="relative size-[24px]">
            <div className="absolute inset-[16.69%_16.45%_20.83%_16.45%]">
              <img src={cartIcon} alt="" className="block size-full" />
            </div>
            <span className="absolute inset-x-[20.83%] top-[37.5%] flex flex-col justify-center text-center text-[7px] font-semibold uppercase leading-[8px] text-black">
              {cartCount}
            </span>
          </div>
        </button>
      </div>
    </header>
  )
}
