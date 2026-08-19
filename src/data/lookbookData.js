import g1s1 from '../assets/lookbook/img-1.png'
import g1s2Left from '../assets/lookbook/g1-s2-left.png'
import g1s2Right from '../assets/lookbook/g1-s2-right.png'
import g1s3 from '../assets/lookbook/g1-s3.png'
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

export const lookPairs = {
  pair1Left,
  pair1Right,
  pair2Left,
}

export const lookLandscape = landscape

export const gallery1 = {
  aspect: '1440 / 840',
  slides: [
    {
      bg: '#c4c3c1',
      images: [
        {
          src: g1s1,
          alt: 'Сила формы',
          style: { inset: 0, width: '100%', height: '100%', objectPosition: 'top center' },
        },
      ],
      caption: true,
    },
    {
      bg: '#ffffff',
      images: [
        {
          src: g1s2Left,
          alt: 'Образ коллекции',
          style: { left: 0, top: '-37.02%', width: '50%', height: '137.02%' },
        },
        {
          src: g1s2Right,
          alt: 'Образ коллекции',
          style: { left: '50%', top: 0, width: '50%', height: '136.9%' },
        },
      ],
    },
    {
      bg: '#c4c3c1',
      images: [
        {
          src: g1s3,
          alt: 'Образ коллекции',
          style: { inset: 0, width: '100%', height: '100%', objectPosition: 'top center' },
        },
      ],
    },
  ],
}

export const gallery2 = {
  aspect: '1440 / 800',
  slides: [
    {
      bg: '#c4c3c1',
      images: [
        {
          src: g2s1,
          alt: 'Образ коллекции',
          style: { left: '-12.11%', top: '-8.72%', width: '112.11%', height: '134.62%' },
        },
      ],
    },
    {
      bg: '#ffffff',
      images: [
        {
          src: g2s2Left,
          alt: 'Образ коллекции',
          style: { left: 0, top: 0, width: '50%', height: '100%', objectPosition: 'top center' },
        },
        {
          src: g2s2Right,
          alt: 'Образ коллекции',
          style: { left: '50%', top: '-13.12%', width: '50%', height: '135.02%', objectPosition: 'top center' },
        },
      ],
    },
    {
      bg: '#ffffff',
      images: [
        {
          src: g2s3Left,
          alt: 'Образ коллекции',
          style: { left: 0, top: 0, width: '50%', height: '100%', objectPosition: 'bottom center' },
        },
        {
          src: g2s3Right,
          alt: 'Образ коллекции',
          style: { left: '50%', top: 0, width: '50%', height: '100%', objectPosition: 'bottom center' },
        },
      ],
    },
    {
      bg: '#c4c3c1',
      images: [
        {
          src: g2s4,
          alt: 'Образ коллекции',
          style: { inset: 0, width: '100%', height: '100%', objectPosition: 'top center' },
        },
      ],
    },
  ],
}
