export const deliveryRows = [
  { icon: 'payment', text: 'Рассрочка на ', link: '4 платежа по 4 248 ₽', align: 'center' },
  { icon: 'card-bonus', text: 'Начислим ', bold: '590 бонусов', link: 'Подробнее', align: 'center' },
]

export const pickupRows = [
  { icon: 'pin', text: 'Город доставки — ', link: 'Москва и область', align: 'center' },
  { icon: 'delivery-courier', text: 'Курьером с примеркой, завтра — от 990 ₽', align: 'start' },
  { icon: 'delivery-express', text: 'Экспресс-доставка, сегодня — от 1 990 ₽', align: 'start' },
  { icon: 'delivery-point', text: 'Пункты выдачи, 26 сентября — бесплатно', align: 'start' },
  {
    icon: 'idol-square',
    text: 'Самовывоз из ',
    link: '10 магазинов',
    textAfter: ', сегодня — бесплатно',
    align: 'center',
  },
]

export const sizeTabs = ['XS', 'S', 'M', 'L', 'XL', 'XXL']

export const sizeOptions = [
  { label: 'XS', available: true },
  { label: 'S', available: true },
  { label: 'M', available: true },
  { label: 'L', available: false },
  { label: 'XL', available: true, lastOne: true },
  { label: 'XXL', available: false },
]
export const selectedSizeTab = 'M'

export const productMeasurements = [
  { label: 'Длина изделия', value: '57 см' },
  { label: 'Длина изделия по спинке', value: '57 см' },
  { label: 'Длина рукава', value: '70 см' },
  { label: 'Обхват изделия по низу', value: '224 см' },
]

export const sizeTableColumns = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']
export const sizeTable = [
  { label: 'RU', values: ['44', '44', '44', '46', '48', '50', '50'] },
  { label: 'Обхват груди', values: ['88', '88', '88', '92', '96', '100', '100'] },
  { label: 'Обхват талии', values: ['96', '96', '96', '100', '104', '108', '108'] },
  { label: 'Обхват бедер', values: ['68', '68', '68', '72', '76', '104', '104'] },
]

export const howToMeasure = [
  { title: 'Обхват груди', text: 'Измерьте окружность груди по самой широкой части, под подмышками' },
  { title: 'Обхват талии', text: 'Измерьте окружность талии в её самой узкой части' },
  { title: 'Обхват бёдер', text: 'Измерьте окружность бёдер по самой широкой части вокруг ягодиц' },
]

export const composition = '95% вискоза, 5% эластан'

export const careInstructions = [
  { icon: 'washing-30', text: 'Стирать при температура 30°' },
  { icon: 'washing-bleach-no', text: 'Не отбеливать' },
  { icon: 'washing-iron-110', text: 'Гладить до 110°' },
  { icon: 'washing-dryclean-no', text: 'Не подвергать хичистке' },
  { icon: 'washing-tumbledry-no', text: 'Не сушить в машинке' },
]

export const reviews = [
  {
    name: 'Александра',
    rating: 4,
    meta: 'цвет: бежевый, Размер: М (Большемерит)',
    text: 'Брюки отличные, цвет красивый, рекомендую к покупке. Заказывала через курьера, привезли быстро и бесплатно.',
    reply: 'Спасибо за отзыв, приходите ещё!',
  },
  {
    name: 'Наталья',
    rating: 5,
    meta: 'цвет: бежевый, Размер: S (Большемерит)',
    text: 'Все понравилось, буду заказывать ещё. 😍',
  },
  {
    name: 'Ольга',
    rating: 5,
    meta: 'цвет: чёрный, Размер: M (Соответствует размеру)',
    text: 'Купила черные, но потом передумала и заказала бежевые. Они понравились больше, да и скидку сделали. Однако, можно сказать ... ',
    truncated: true,
  },
]
