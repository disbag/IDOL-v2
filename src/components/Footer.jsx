import { useState } from 'react'
import footerDecor from '../assets/icons/footer-decor.svg'
import plusIcon from '../assets/icons/plus.svg'
import minusIcon from '../assets/icons/minus.svg'

export default function Footer({ columns, social }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <footer className="flex h-[340px] w-full items-end justify-between bg-background-base px-[40px] pb-[64px] mobile:h-auto mobile:flex-col mobile:items-stretch mobile:justify-start mobile:gap-[40px] mobile:px-[40px] mobile:pt-[40px] mobile:pb-[calc(40px+var(--mobile-cta-h,124px))]">
      <div className="mobile:hidden flex shrink-0 flex-col items-start gap-[76px]">
        <div className="flex flex-col items-start gap-[8px] text-text-primary">
          <p className="text-sm">
            Подпишитесь на наши новости
            <br />
            и получите скидку 10% на первый заказ
          </p>
          <a
            href="#"
            className="text-[10px] leading-[16px] underline transition-colors hover:text-text-primary-hover"
          >
            Подписаться →
          </a>
        </div>
        <img src={footerDecor} alt="IDOL" className="size-[40px]" />
      </div>

      <div className="mobile:hidden flex w-[calc(50%-10px)] flex-col items-start gap-[48px]">
        <div className="flex w-full items-start gap-[8px]">
          {columns.map((column) => (
            <div key={column.title} className="flex flex-1 flex-col items-start gap-[8px]">
              <p className="text-xs font-medium uppercase leading-[12px] text-text-primary">{column.title}</p>
              <div className="flex flex-col items-start gap-[4px]">
                {column.items.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="w-full text-xs font-normal uppercase leading-[12px] text-text-primary transition-colors hover:text-text-primary-hover"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-start gap-[24px] whitespace-nowrap text-xs font-normal uppercase leading-[12px] text-text-secondary">
          <p>© IDOL, 2026</p>
          {social.map((item) => (
            <a key={item} href="#" className="transition-colors hover:text-text-primary">
              {item}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile layout */}
      <div className="hidden w-full flex-col items-start gap-[8px] text-text-primary mobile:flex">
        <p className="text-sm">
          Подпишитесь на наши новости
          <br />
          и получите скидку 10% на первый заказ
        </p>
        <a href="#" className="text-[10px] leading-[16px] underline transition-colors hover:text-text-primary-hover">
          Подписаться →
        </a>
      </div>

      <div className="hidden w-full flex-col items-start gap-[12px] mobile:flex">
        {columns.map((column, index) => {
          const isOpen = openIndex === index
          return (
            <div key={column.title} className="flex w-full flex-col items-start gap-[12px]">
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                className="group flex w-full items-center justify-between gap-[8px] text-left text-xs font-medium uppercase leading-[12px] text-text-primary"
              >
                <span className="transition-colors group-hover:text-text-primary-hover">{column.title}</span>
                <img src={isOpen ? minusIcon : plusIcon} alt="" className="size-[16px]" />
              </button>
              {isOpen && (
                <div className="footer-accordion-enter flex w-full flex-col items-start gap-[8px]">
                  {column.items.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="w-full text-xs font-normal uppercase leading-[12px] text-text-secondary transition-colors hover:text-text-primary"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="hidden w-full items-start justify-between whitespace-nowrap text-xs font-normal uppercase leading-[12px] text-text-secondary mobile:flex">
        <p>© IDOL, 2026</p>
        <div className="flex items-center gap-[24px]">
          {social.map((item) => (
            <a key={item} href="#" className="transition-colors hover:text-text-primary">
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
