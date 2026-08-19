import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import closeIcon from '../assets/icons/close.svg'
import nameIcon from '../assets/icons/user.svg'
import locationIcon from '../assets/icons/pin.svg'
import phoneIcon from '../assets/icons/phone.svg'
import emailIcon from '../assets/icons/mail.svg'
import Input from './Input'

export default function NotifyModal({ open, onClose, size }) {
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
        className={`absolute right-0 top-0 flex h-full w-[480px] flex-col items-center gap-[16px] overflow-y-auto bg-background-base p-[40px] transition-transform duration-300 ease-out mobile:inset-x-0 mobile:bottom-0 mobile:top-[194px] mobile:right-auto mobile:h-auto mobile:w-full mobile:gap-[16px] mobile:p-[20px] ${
          animateIn ? 'translate-x-0 mobile:translate-y-0' : 'translate-x-full mobile:translate-y-full'
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Закрыть"
          className="absolute right-[16px] top-[16px] size-[24px] mobile:right-[20px] mobile:top-[20px]"
        >
          <img src={closeIcon} alt="" className="size-full" />
        </button>

        <div className="flex w-full items-center">
          <p className="flex-1 text-md font-semibold uppercase text-text-primary">Сообщить о поступлении</p>
        </div>

        <form
          className="flex w-full flex-col items-start gap-[24px] py-[8px]"
          onSubmit={(event) => event.preventDefault()}
        >
          <div className="flex w-full flex-col items-start gap-[8px]">
            <p className="w-full text-sm text-text-primary">
              Мы уведомим вас, когда размер {size} появится в Москве
            </p>
            <Input icon={nameIcon} type="text" placeholder="Ваше имя" />
            <Input icon={locationIcon} type="text" defaultValue="Москва и область" />
            <Input icon={phoneIcon} type="tel" placeholder="Номер телефона" />
            <Input icon={emailIcon} type="email" placeholder="Email" />
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-[8px] bg-control-primary px-[24px] py-[12px] text-center text-sm font-medium uppercase text-white transition-colors hover:bg-control-primary-hover"
          >
            Подписаться
          </button>

          <p className="w-full text-center text-xs text-text-secondary">
            Нажимая кнопку, Вы соглашаетесь c{' '}
            <a href="#" className="underline transition-colors hover:text-text-primary">
              условиями оферты
            </a>{' '}
            и{' '}
            <a href="#" className="underline transition-colors hover:text-text-primary">
              политикой конфиденциальности
            </a>
          </p>
        </form>
      </div>
    </div>,
    document.body,
  )
}
