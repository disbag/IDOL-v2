import { useState } from 'react'
import paymentIcon from '../assets/icons/payment.svg'
import cardBonusIcon from '../assets/icons/card-bonus.svg'
import pinIcon from '../assets/icons/pin.svg'
import deliveryCourierIcon from '../assets/icons/delivery-courier.svg'
import deliveryExpressIcon from '../assets/icons/delivery-express.svg'
import deliveryPointIcon from '../assets/icons/delivery-point.svg'
import idolSquareIcon from '../assets/icons/idol-square.svg'
import washing30Icon from '../assets/icons/washing-30.svg'
import washingBleachNoIcon from '../assets/icons/washing-bleach-no.svg'
import washingIron110Icon from '../assets/icons/washing-iron-110.svg'
import washingDryCleanNoIcon from '../assets/icons/washing-dryclean-no.svg'
import washingTumbleDryNoIcon from '../assets/icons/washing-tumbledry-no.svg'
import starIcon from '../assets/icons/star.svg'
import measurementDiagram from '../assets/diagrams/measurement.svg'
import {
  deliveryRows,
  pickupRows,
  sizeTabs,
  selectedSizeTab,
  productMeasurements,
  sizeTableColumns,
  sizeTable,
  howToMeasure,
  composition,
  careInstructions,
  reviews,
} from '../data/accordionData'

const ICONS = {
  payment: paymentIcon,
  'card-bonus': cardBonusIcon,
  pin: pinIcon,
  'delivery-courier': deliveryCourierIcon,
  'delivery-express': deliveryExpressIcon,
  'delivery-point': deliveryPointIcon,
  'idol-square': idolSquareIcon,
  'washing-30': washing30Icon,
  'washing-bleach-no': washingBleachNoIcon,
  'washing-iron-110': washingIron110Icon,
  'washing-dryclean-no': washingDryCleanNoIcon,
  'washing-tumbledry-no': washingTumbleDryNoIcon,
}

function IconRow({ row }) {
  return (
    <div className={`flex w-full gap-[16px] ${row.align === 'center' ? 'items-center' : 'items-start'}`}>
      <img src={ICONS[row.icon]} alt="" className="size-[16px] shrink-0" />
      <p className="flex-1 text-sm text-text-primary">
        {row.text}
        {row.bold && <span className="font-medium">{row.bold}</span>}
        {row.bold && ' '}
        {row.link && (
          <a href="#" className="underline transition-colors hover:text-text-primary-hover">
            {row.link}
          </a>
        )}
        {row.textAfter}
      </p>
    </div>
  )
}

export function PaymentDeliveryContent() {
  return (
    <div className="flex w-full flex-col items-start gap-[16px] pb-[12px]">
      <div className="flex w-full flex-col items-start gap-[8px]">
        {deliveryRows.map((row) => (
          <IconRow key={row.icon} row={row} />
        ))}
      </div>
      <div className="flex w-full flex-col items-start gap-[8px]">
        {pickupRows.map((row) => (
          <IconRow key={row.icon} row={row} />
        ))}
      </div>
    </div>
  )
}

export function SizesContent() {
  const [activeSize, setActiveSize] = useState(selectedSizeTab)

  return (
    <div className="flex w-full flex-col items-start gap-[16px] pb-[12px]">
      <div className="flex w-full flex-col items-start gap-[8px]">
        <div className="flex w-full items-center">
          {sizeTabs.map((size, index) => (
            <button
              key={size}
              type="button"
              onClick={() => setActiveSize(size)}
              className={`flex h-[24px] flex-1 items-center justify-center border px-[12px] py-[4px] text-sm uppercase transition-colors ${
                index < sizeTabs.length - 1 ? '-mr-px' : ''
              } ${
                size === activeSize
                  ? 'border-control-primary bg-control-primary text-white'
                  : 'border-control-border bg-background-base text-text-primary hover:bg-background-secondary'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="flex w-full flex-col items-center gap-[8px]">
        <p className="w-full text-sm uppercase text-text-primary">Обмеры изделия:</p>
        <ol className="flex w-full list-decimal flex-col gap-[4px] text-[10px] text-text-primary">
          {productMeasurements.map((item, index) => (
            <li key={item.label} className="ms-[15px]">
              <div className="flex w-full items-center gap-[2px]">
                <span className="leading-[12px]">{item.label}</span>
                <span className="min-w-0 flex-1 overflow-hidden text-ellipsis leading-[12px] tracking-[0.2px] text-text-disabled">
                  {'.'.repeat(150)}
                </span>
                <span className="shrink-0 text-center leading-[16px] text-text-primary">{item.value}</span>
              </div>
            </li>
          ))}
        </ol>
        <img src={measurementDiagram} alt="Схема замеров" className="h-[186px] w-[310px]" />
      </div>

      <div className="flex w-full flex-col items-start gap-[8px]">
        <div className="flex w-full flex-col items-start">
          <p className="text-sm uppercase text-text-primary">Таблица размеров:</p>
          <p className="text-sm text-text-secondary">Все размеры указаны в см., рост 170 см.</p>
        </div>
        <div className="grid w-full grid-cols-1 gap-[2px]">
          <div className="flex w-full items-center bg-background-secondary py-[8px] pl-[8px] pr-[4px] text-xs uppercase text-text-secondary">
            <div className="w-[70px] text-left">INT</div>
            {sizeTableColumns.map((col) => (
              <div key={col} className="flex-1 text-center">
                {col}
              </div>
            ))}
          </div>
          {sizeTable.map((row) => (
            <div key={row.label}>
              <div className="flex w-full items-center border-t border-control-border py-[8px] pl-[8px] pr-[4px] uppercase">
                <div className="w-[70px] text-left text-xs text-text-secondary">{row.label}</div>
                {row.values.map((value, index) => (
                  <div key={index} className="flex-1 text-center text-sm text-text-primary">
                    {value}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full flex-col items-start gap-[8px]">
        <a
          href="#"
          className="w-full text-left text-xs uppercase text-text-primary underline transition-colors hover:text-text-primary-hover"
        >
          Как себя измерить?
        </a>
        <div className="flex w-full flex-col items-start gap-[8px]">
          {howToMeasure.map((item) => (
            <div key={item.title} className="flex w-full flex-col items-start gap-[2px]">
              <p className="text-sm font-medium text-text-primary">{item.title}</p>
              <p className="w-full text-sm text-text-primary">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function CareContent() {
  return (
    <div className="flex w-full flex-col items-start gap-[12px] pb-[12px]">
      <p className="whitespace-nowrap text-sm text-text-primary">{composition}</p>
      <div className="flex w-full flex-col items-start gap-[8px]">
        {careInstructions.map((row) => (
          <div key={row.icon} className="flex w-full items-start gap-[16px]">
            <img src={ICONS[row.icon]} alt="" className="size-[16px] shrink-0" />
            <p className="flex-1 text-sm text-text-primary">{row.text}</p>
          </div>
        ))}
      </div>
      <p className="text-sm text-text-primary">
        Подробнее информацию об уходе можно почитать{' '}
        <a href="#" className="underline transition-colors hover:text-text-primary-hover">
          здесь
        </a>
      </p>
    </div>
  )
}

export function ReviewsContent() {
  const [expanded, setExpanded] = useState({})

  return (
    <div className="flex w-full flex-col items-start gap-[16px]">
      {reviews.map((review) => (
        <div key={review.name} className="flex w-full flex-col items-start gap-[4px]">
          <p className="whitespace-nowrap text-md font-medium text-text-primary">{review.name}</p>
          <div className="flex w-full items-center gap-[8px]">
            <div className="flex items-center gap-[2px]">
              <img src={starIcon} alt="" className="size-[12px]" />
              <p className="whitespace-nowrap text-[8px] uppercase leading-[12px] text-text-secondary">
                {review.rating}
              </p>
            </div>
            <p className="flex-1 text-[8px] uppercase leading-[12px] text-text-secondary">{review.meta}</p>
          </div>
          <p className="w-full text-md text-text-primary">
            {review.truncated && !expanded[review.name] ? review.text : review.text.replace(/\s*\.\.\.\s*$/, ' ')}
            {review.truncated && !expanded[review.name] && (
              <button
                type="button"
                onClick={() => setExpanded((prev) => ({ ...prev, [review.name]: true }))}
                className="text-text-secondary underline transition-colors hover:text-text-primary-hover"
              >
                Показать
              </button>
            )}
          </p>
          {review.reply && (
            <div className="flex w-full flex-col items-start pl-[16px]">
              <p className="text-sm font-medium text-text-primary">Ответ магазина IDOL</p>
              <p className="text-sm text-text-primary">{review.reply}</p>
            </div>
          )}
        </div>
      ))}

      <div className="flex w-full flex-col items-center gap-[8px]">
        <button
          type="button"
          className="w-full border-[0.5px] border-control-primary px-[16px] py-[8px] text-center text-xs font-medium uppercase text-text-primary transition-colors hover:border-control-primary-hover hover:text-text-primary-hover"
        >
          Оставить отзыв
        </button>
        <button
          type="button"
          className="px-[16px] py-[8px] text-center text-xs font-medium uppercase text-text-primary transition-colors hover:text-text-primary-hover"
        >
          Читать все
        </button>
      </div>
    </div>
  )
}
