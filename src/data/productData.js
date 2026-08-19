import gallery1 from '../assets/gallery/gallery-1.png'
import gallery2 from '../assets/gallery/gallery-2.png'
import gallery3 from '../assets/gallery/gallery-3.png'
import gallery4 from '../assets/gallery/gallery-4.png'
import gallery5 from '../assets/gallery/gallery-5.png'

import look1 from '../assets/products/look-1.png'
import look2 from '../assets/products/look-2.png'
import look3 from '../assets/products/look-3.png'
import look4 from '../assets/products/look-4.png'
import look5 from '../assets/products/look-5.png'

import rec1 from '../assets/products/rec-1.png'
import rec2 from '../assets/products/rec-2.png'
import rec3 from '../assets/products/rec-3.png'
import rec4 from '../assets/products/rec-4.png'

import similar1 from '../assets/products/similar-1.png'
import similar2 from '../assets/products/similar-2.png'
import similar3 from '../assets/products/similar-3.png'
import similar4 from '../assets/products/similar-4.png'
import similar5 from '../assets/products/similar-5.png'

import seen1 from '../assets/products/seen-1.png'
import seen2 from '../assets/products/seen-2.png'
import seen3 from '../assets/products/seen-3.png'
import seen4 from '../assets/products/seen-4.png'
import seen5 from '../assets/products/seen-5.png'

import cart1 from '../assets/products/cart-1.png'
import cart2 from '../assets/products/cart-2.png'
import cart3 from '../assets/products/cart-3.png'
import cart4 from '../assets/products/cart-4.png'
import cart5 from '../assets/products/cart-5.png'
import cart6 from '../assets/products/cart-6.png'
import cart7 from '../assets/products/cart-7.png'
import cart8 from '../assets/products/cart-8.png'
import cart9 from '../assets/products/cart-9.png'
import cart10 from '../assets/products/cart-10.png'
import cart11 from '../assets/products/cart-11.png'
import cart12 from '../assets/products/cart-12.png'
import cart13 from '../assets/products/cart-13.png'

export const galleryImages = [gallery1, gallery2, gallery3, gallery4, gallery5]

export const breadcrumbs = [
  { label: 'Каталог', href: '#' },
  { label: 'ЖЕНЩИНАМ', href: '#' },
  { label: 'ОДЕЖДА', href: '#' },
  { label: 'топы', href: '#' },
  { label: 'В БЕЛЬЕВОМ СТИЛЕ', href: '#' },
]

export const product = {
  badge: 'Хит',
  title: 'ТОП ИЗ ВИСКОЗЫ С КРУЖЕВОМ',
  price: '4 990 ₽',
  oldPrice: '6 990 ₽',
  discount: '-20%',
  colorName: 'Чёрный',
  colors: [
    { hex: '#000000', selected: true },
    { hex: '#f5e9d3', selected: false },
  ],
  description: [
    'Лёгкий топ прямого силуэта для создания женственных образов. Выполнен из мягкой вискозы, которая обеспечивает комфорт и приятные тактильные ощущения. Тонкие бретельки и деликатное кружево добавляют модели романтичности и изысканности. Универсальная модель, которая станет основой для многослойных луков или самостоятельным акцентом в тёплое время года.',
    'Параметры модели: 178 / 76 / 56 / 87, размер S.',
    'Арт. Id6131316511',
  ],
}

export const lookProducts = [
  { image: look1, name: 'ТОП ИЗ ВИСКОЗЫ С КРУЖЕВОМ', price: '4 990 ₽' },
  { image: look2, name: 'БРЮКИ ПРЯМОГО СИЛУЭТА', price: '10 990 ₽' },
  { image: look3, name: 'ПАЛЬТО ДВУБОРТНОЕ ИЗ СМЕСОВОЙ ШЕРСТИ', price: '25 990 ₽' },
  { image: look4, name: 'СУМКА ИЗ НАТУРАЛЬНОЙ КОЖИ', price: '16 990 ₽' },
  { image: look5, name: 'МЮЛИ ИЗ НАТУРАЛЬНОЙ КОЖИ', price: '12 990 ₽' },
]

export const recommendedProducts = [
  { image: rec1, name: 'ТОП ИЗ ВИСКОЗЫ', price: '10 990 ₽' },
  { image: rec2, name: 'БРЮКИ ИЗ 100% ХЛОПКА С БАСКОЙ', price: '16 990 ₽' },
  { image: rec3, name: 'БЛУЗА ОБЪЁМНОГО СИЛУЭТА В ПОЛОСКУ', price: '16 990 ₽' },
  { image: rec4, name: 'ЮБКА МАКСИ ИЗ ЛИОЦЕЛЛА', price: '10 990 ₽' },
]

export const similarProducts = [
  { image: similar1, name: 'ТОП ИЗ ХЛОПКА', price: '2 990 ₽', colors: '2 цвета' },
  { image: similar2, name: 'ПЛАТЬЕ МИДИ С ЮБКОЙ-БАЛЛОН', price: '16 990 ₽' },
  { image: similar3, name: 'ЛОНГСЛИВ ИЗ ТЕНСЕЛА И ШЕРСТИ', price: '16 990 ₽' },
  { image: similar4, name: 'ФУТБОЛКА ИЗ ТЕНСЕЛА И ШЕРСТИ', price: '10 990 ₽' },
  { image: similar5, name: 'ФУТБОЛКА ИЗ ВИСКОЗЫ С ДЕКОРАТИВНОЙ ВЫШИВКОЙ', price: '2 990 ₽', colors: '2 цвета' },
]

export const seenProducts = [
  { image: seen1, name: 'ТОП ИЗ ХЛОПКА', price: '2 990 ₽', colors: '2 цвета' },
  { image: seen2, name: 'ПЛАТЬЕ МИДИ С ЮБКОЙ-БАЛЛОН', price: '16 990 ₽' },
  { image: seen3, name: 'ЛОНГСЛИВ ИЗ ТЕНСЕЛА И ШЕРСТИ', price: '16 990 ₽' },
  { image: seen4, name: 'ФУТБОЛКА ИЗ ТЕНСЕЛА И ШЕРСТИ', price: '10 990 ₽' },
  { image: seen5, name: 'ФУТБОЛКА ИЗ ВИСКОЗЫ С ДЕКОРАТИВНОЙ ВЫШИВКОЙ', price: '2 990 ₽', colors: '2 цвета' },
]

export const cartSuggestedProducts = [
  { image: cart1, name: 'МЮЛИ ИЗ НАТУРАЛЬНОЙ КОЖИ', price: '12 990 ₽' },
  { image: cart2, name: 'ЮБКА МИДИ ИЗ ХЛОПКА С ПЕРФОРАЦИЕЙ', price: '16 990 ₽' },
  { image: cart3, name: 'ТОП С ПРЯЖКОЙ НА БРЕТЕЛИ', price: '16 990 ₽' },
  { image: cart4, name: 'БЛУЗА ИЗ ПОЛУПРОЗРАЧНОГО ТЕНСЕЛА', price: '16 990 ₽' },
  { image: cart5, name: 'БЛУЗА С РАСКЛЕШЁННЫМ РУКАВОМ', price: '16 990 ₽' },
  { image: cart6, name: 'БЛУЗА ИЗ 100% ВИСКОЗЫ', price: '16 990 ₽' },
  { image: cart7, name: 'БЛУЗА ИЗ ТЕНСЕЛА', price: '16 990 ₽' },
  { image: cart8, name: 'БЛУЗА С АБСТРАКТНЫМ ПРИНТОМ', price: '16 990 ₽' },
  { image: cart9, name: 'БЛУЗА ИЗ ШЕРСТИ И ВИСКОЗЫ', price: '16 990 ₽' },
  { image: cart10, name: 'ПАЛЬТО ДВУБОРТНОЕ ИЗ СМЕСОВОЙ ШЕРСТИ', price: '25 990 ₽' },
  { image: cart11, name: 'ЮБКА-КАРАНДАШ ИЗ ВИСКОЗЫ', price: '15 990 ₽' },
  { image: cart12, name: 'БЛУЗА ИЗ 100% ВИСКОЗЫ С ПРИНТОМ', price: '25 990 ₽' },
  { image: cart5, name: 'ТОП ИЗ ХЛОПКА', price: '2 990 ₽', colors: '2 цвета' },
  { image: cart6, name: 'ПЛАТЬЕ МИДИ С ЮБКОЙ-БАЛЛОН', price: '16 990 ₽' },
  { image: cart13, name: 'ФУТБОЛКА ИЗ ВИСКОЗЫ С ДЕКОРАТИВНОЙ ВЫШИВКОЙ', price: '2 990 ₽', colors: '2 цвета' },
  { image: cart2, name: 'ЛОНГСЛИВ ИЗ ТЕНСЕЛА И ШЕРСТИ', price: '16 990 ₽' },
  { image: cart7, name: 'БЛУЗА ИЗ ТЕНСЕЛА', price: '16 990 ₽' },
  { image: cart8, name: 'БЛУЗА С АБСТРАКТНЫМ ПРИНТОМ', price: '16 990 ₽' },
]

export const infoAccordion = [
  { label: 'Оплата и доставка' },
  { label: 'Размеры изделия' },
  { label: 'Состав и Уход' },
  { label: 'Отзывы', rating: '4.8' },
]

export const footerColumns = [
  {
    title: 'Каталог',
    items: ['Популярное', 'Новинки', 'Лукбуки', 'Женская одежда', 'Мужская одежда'],
  },
  {
    title: 'Покупателям',
    items: [
      'Уход за изделием',
      'Оплата и доставка',
      'Обмен и возврат',
      'Оферта',
      'Политика конфиденциальности',
      'Программа лояльности',
    ],
  },
  {
    title: 'О бренде',
    items: ['О бренде', 'Сотрудничество', 'Магазины', 'Контакты', 'Скачать приложение Ios и Android'],
  },
]

export const footerSocial = ['Телеграм', 'Вконтакте', 'макс']
