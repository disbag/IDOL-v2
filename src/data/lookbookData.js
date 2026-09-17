import g1s1 from '../assets/lookbook/img-1.png'
import g1s2Left from '../assets/lookbook/g1-s2-left.png'
import g1s2Right from '../assets/lookbook/g1-s2-right.png'
import g1s3 from '../assets/lookbook/g1-s3.png'
import g1s1Mobile from '../assets/lookbook/mobile/s1-img-1.png'
import g1s3Mobile from '../assets/lookbook/mobile/s1-img-3.png'
import g2s1Mobile from '../assets/lookbook/mobile/s3-img-1.png'
import g2s4Mobile from '../assets/lookbook/mobile/s3-img-4.png'
import g2s1 from '../assets/lookbook/g2-s1.png'
import g2s2Left from '../assets/lookbook/g2-s2-left.png'
import g2s2Right from '../assets/lookbook/g2-s2-right.png'
import g2s3Left from '../assets/lookbook/g2-s3-left.png'
import g2s3Right from '../assets/lookbook/g2-s3-right.png'
import g2s4 from '../assets/lookbook/g2-s4.png'
import grid01 from '../assets/lookbook/grid-01.png'
import grid02 from '../assets/lookbook/grid-02.png'
import grid03 from '../assets/lookbook/grid-03.png'
import grid04 from '../assets/lookbook/grid-04.png'
import grid05 from '../assets/lookbook/grid-05.png'
import grid06 from '../assets/lookbook/grid-06.png'
import grid07 from '../assets/lookbook/grid-07.png'
import grid08 from '../assets/lookbook/grid-08.png'
import grid09 from '../assets/lookbook/grid-09.png'
import grid10 from '../assets/lookbook/grid-10.png'
import grid11 from '../assets/lookbook/grid-11.png'
import grid12 from '../assets/lookbook/grid-12.png'
import grid13 from '../assets/lookbook/grid-13.png'
import grid14 from '../assets/lookbook/grid-14.png'
import grid15 from '../assets/lookbook/grid-15.png'
import grid16 from '../assets/lookbook/grid-16.png'
import pair1Left from '../assets/lookbook/pair1-left.png'
import pair1Right from '../assets/lookbook/pair1-right.png'
import pair2Left from '../assets/lookbook/pair2-left.png'
import landscape from '../assets/lookbook/landscape.png'
import cat01 from '../assets/lookbook/categories/01.png'
import cat02 from '../assets/lookbook/categories/02.png'
import cat03 from '../assets/lookbook/categories/03.png'
import cat04 from '../assets/lookbook/categories/04.png'
import cat05 from '../assets/lookbook/categories/05.png'
import cat06 from '../assets/lookbook/categories/06.png'
import cat07 from '../assets/lookbook/categories/07.png'
import cat08 from '../assets/lookbook/categories/08.png'
import col01 from '../assets/lookbook/products/01.png'
import col02 from '../assets/lookbook/products/02.png'
import col03 from '../assets/lookbook/products/03.png'
import col04 from '../assets/lookbook/products/04.png'
import col05 from '../assets/lookbook/products/05.png'
import col06 from '../assets/lookbook/products/06.png'
import col07 from '../assets/lookbook/products/07.png'
import col08 from '../assets/lookbook/products/08.png'
import col09 from '../assets/lookbook/products/09.png'
import col10 from '../assets/lookbook/products/10.png'
import col11 from '../assets/lookbook/products/11.png'
import col12 from '../assets/lookbook/products/12.png'
import mensHero from '../assets/lookbook/mens/hero.png'
import mensGrid1Left from '../assets/lookbook/mens/grid1-left.png'
import mensGrid1Right from '../assets/lookbook/mens/grid1-right.png'
import mensGrid2Left from '../assets/lookbook/mens/grid2-left.png'
import mensGrid2Right from '../assets/lookbook/mens/grid2-right.png'
import mensFinalBand from '../assets/lookbook/mens/final-band.png'

const photo = (src, style, alt = 'Образ коллекции') => ({ src, alt, style })

export const homeCollectionProducts = [
  { image: col01, name: 'БЛУЗА ИЗ ВИСКОЗЫ В ПОЛОСКУ', price: '16 990 ₽', colors: '4 цвета' },
  { image: col02, name: 'ФУТБОЛКА ИЗ ТЕНСЕЛА И ШЕРСТИ', price: '3 990 ₽', oldPrice: '4 990 ₽', badge: '-20%' },
  { image: col03, name: 'ЮБКА МИДИ СО ШЛИЦЕЙ', price: '26 990 ₽', colors: '2 цвета', badge: 'Новинка' },
  { image: col04, name: 'ЮБКА-КАРАНДАШ ИЗ ВИСКОЗЫ', price: '26 990 ₽' },
  { image: col05, name: 'ЮБКА МИДИ ИЗ ХЛОПКА С ПЕРФОРАЦИЕЙ', price: '16 990 ₽' },
  { image: col06, name: 'ЮБКА МИДИ С ИМИТАЦИЕЙ ЗАПАХА И ЗОЛОТОЙ ПРЯЖКОЙ', price: '16 990 ₽' },
  { image: col07, name: 'БЛУЗА ИЗ 100% ВИСКОЗЫ', price: '25 990 ₽' },
  { image: col08, name: 'БЛУЗА ИЗ ТЕНСЕЛА', price: '25 990 ₽' },
  { image: col09, name: 'ПАЛЬТО ДВУБОРТНОЕ ИЗ СМЕСОВОЙ ШЕРСТИ', price: '26 990 ₽' },
  { image: col10, name: 'БЛУЗА С РАСКЛЕШЁННЫМ РУКАВОМ', price: '25 990 ₽' },
  { image: col11, name: 'ПАНАМА ИЗ ЦЕЛЛЮЛОЗНОГО ВОЛОКНА', price: '4 990 ₽' },
  { image: col12, name: 'БЛУЗА С АБСТРАКТНЫМ ПРИНТОМ', price: '25 990 ₽' },
]

export const lookGrid = [
  { src: grid01, alt: 'Образ 1' },
  { src: grid02, alt: 'Образ 2' },
  { src: grid03, alt: 'Образ 3' },
  { src: grid04, alt: 'Образ 4' },
  { src: grid05, alt: 'Образ 5' },
  { src: grid06, alt: 'Образ 6' },
  { src: grid07, alt: 'Образ 7' },
  { src: grid08, alt: 'Образ 8' },
  { src: grid09, alt: 'Образ 9' },
  { src: grid10, alt: 'Образ 10' },
  { src: grid11, alt: 'Образ 11' },
  { src: grid12, alt: 'Образ 12' },
  { src: grid13, alt: 'Образ 13' },
  { src: grid14, alt: 'Образ 14' },
  { src: grid15, alt: 'Образ 15' },
  { src: grid16, alt: 'Образ 16' },
]

export const lookLandscape = landscape

export const lookCategories = [
  { image: cat01, name: 'Обувь' },
  { image: cat02, name: 'Верхняя одежда' },
  { image: cat03, name: 'Брюки' },
  { image: cat04, name: 'Сумки' },
  { image: cat05, name: 'Трикотаж' },
  { image: cat06, name: 'Юбки' },
  { image: cat07, name: 'Аксессуары' },
  { image: cat08, name: 'Жакеты' },
]

export const homeSlides = [
  {
    title: 'Новая коллекция',
    products: homeCollectionProducts,
    hero: {
      bg: '#c4c3c1',
      caption: true,
      originTop: true,
      images: [
        photo(g1s1, { inset: 0, width: '100%', height: '100%', objectPosition: 'top center' }, 'Сила формы'),
      ],
      mobileImages: [
        photo(g1s1Mobile, { inset: 0, width: '100%', height: '100%', objectPosition: 'top center' }, 'Сила формы'),
      ],
    },
    bands: [
      {
        bg: '#ffffff',
        mobileClassName: 'mobile:aspect-[390/340]',
        images: [
          photo(g1s2Left, { left: 0, top: '-37.02%', width: '50%', height: '137.02%' }),
          photo(g1s2Right, { left: '50%', top: 0, width: '50%', height: '136.9%' }),
        ],
      },
      {
        bg: '#c4c3c1',
        mobileClassName: 'mobile:aspect-[390/520]',
        images: [photo(g1s3, { inset: 0, width: '100%', height: '100%', objectPosition: 'top center' })],
        mobileImages: [photo(g1s3Mobile, { inset: 0, width: '100%', height: '100%', objectPosition: 'top center' })],
      },
    ],
  },
  {
    title: 'Мужская коллекция',
    ctaBox: {
      text: 'Прямые и свободные силуэты, структурированные пиджаки, объёмные брюки и фактурные материалы — шерсть, кашемир, кожа и деним — формируют гардероб, который легко адаптируется к разным сценариям современной жизни',
    },
    hero: {
      bg: '#d9d7d3',
      navInvert: true,
      gradient: 'linear-gradient(to top left, rgba(0,0,0,0.45), rgba(0,0,0,0) 45%)',
      heading: {
        lines: ['Мужская', 'коллекция', 'осень-зима', '2026'],
      },
      images: [
        photo(
          mensHero,
          { inset: 0, width: '100%', height: '100%', objectPosition: 'center center' },
          'Мужская коллекция осень-зима 2026',
        ),
      ],
    },
    grid: [
      photo(mensGrid1Left, { width: '100%', height: '100%', objectPosition: 'center center' }, 'Образ 1'),
      photo(mensGrid1Right, { width: '100%', height: '100%', objectPosition: 'center center' }, 'Образ 2'),
      photo(mensGrid2Left, { width: '100%', height: '100%', objectPosition: 'center center' }, 'Образ 3'),
      photo(mensGrid2Right, { width: '100%', height: '100%', objectPosition: 'center center' }, 'Образ 4'),
    ],
    bands: [
      {
        bg: '#3a332c',
        mobileClassName: 'mobile:aspect-[390/520]',
        images: [
          photo(mensFinalBand, { inset: 0, width: '100%', height: '100%', objectPosition: 'center center' }),
        ],
      },
    ],
  },
  {
    title: 'IDOL Lab',
    kind: 'editorial',
    hero: {
      bg: '#ffffff',
      navInvert: true,
      headerInvert: true,
      images: [
        photo(pair1Left, { left: 0, top: 0, width: '50%', height: '114.29%' }),
        photo(pair1Right, { left: '50%', top: 0, width: '50%', height: '108.57%' }),
      ],
      mobileImages: [
        photo(pair1Left, { inset: 0, width: '100%', height: '100%', objectPosition: 'center center' }),
      ],
    },
    pair: {
      images: [photo(pair2Left, { left: 0, top: 0, width: '50%', height: '118.21%' })],
      mobileImages: [
        photo(pair2Left, { left: 0, top: 0, width: '50%', height: '100%', objectPosition: 'top center' }),
        photo(pair1Right, { left: '50%', top: 0, width: '50%', height: '100%', objectPosition: 'center center' }),
      ],
    },
  },
  {
    title: 'Сила формы',
    cta: true,
    categories: lookCategories,
    hero: {
      bg: '#c4c3c1',
      navInvert: true,
      images: [photo(g2s1, { left: '-12.11%', top: '-8.3%', width: '112.11%', height: '128.21%' })],
      mobileImages: [
        photo(g2s1Mobile, { inset: 0, width: '100%', height: '100%', objectPosition: 'center center' }),
      ],
    },
    bands: [
      {
        bg: '#ffffff',
        mobileClassName: 'mobile:aspect-[390/340]',
        images: [
          photo(g2s2Left, { left: 0, top: 0, width: '50%', height: '100%', objectPosition: 'top center' }),
          photo(g2s2Right, {
            left: '50%',
            top: '-10.11%',
            width: '50%',
            height: '128.59%',
            objectPosition: 'top center',
          }),
        ],
      },
      {
        bg: '#ffffff',
        mobileClassName: 'mobile:aspect-[390/340]',
        images: [
          photo(g2s3Left, { left: 0, top: 0, width: '50%', height: '100%', objectPosition: 'bottom center' }),
          photo(g2s3Right, { left: '50%', top: 0, width: '50%', height: '100%', objectPosition: 'bottom center' }),
        ],
      },
      {
        bg: '#c4c3c1',
        mobileClassName: 'mobile:aspect-[390/520]',
        images: [photo(g2s4, { inset: 0, width: '100%', height: '100%', objectPosition: 'top center' })],
        mobileImages: [photo(g2s4Mobile, { inset: 0, width: '100%', height: '100%', objectPosition: 'center center' })],
      },
    ],
  },
]
