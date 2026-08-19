import LookbookCarousel from './LookbookCarousel'
import LookbookGrid from './LookbookGrid'
import { gallery1, gallery2, lookGrid, lookLandscape, lookPairs } from '../data/lookbookData'

function PlacedPhoto({ src, alt, style }) {
  return <img src={src} alt={alt} draggable={false} className="absolute max-w-none object-cover" style={style} />
}

export default function LookbookPage({ heroRef }) {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      <LookbookCarousel ref={heroRef} fillViewport slides={gallery1.slides}>
        <div className="absolute bottom-[120px] left-[120px] w-[199px] uppercase text-text-primary">
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
      </LookbookCarousel>

      <div className="flex w-full flex-col items-center gap-[8.333vw] py-[8.333vw]">
        <LookbookGrid photos={lookGrid} />

        <div className="flex w-full flex-col">
          <div className="relative w-full overflow-hidden" style={{ aspectRatio: '1440 / 840' }}>
            <PlacedPhoto
              src={lookPairs.pair1Left}
              alt="Образ коллекции"
              style={{ left: '8.333%', top: 0, width: '41.667%', height: '114.29%' }}
            />
            <PlacedPhoto
              src={lookPairs.pair1Right}
              alt="Образ коллекции"
              style={{ left: '50%', top: 0, width: '41.667%', height: '117.14%' }}
            />
          </div>

          <div className="relative w-full overflow-hidden bg-white" style={{ aspectRatio: '1440 / 840' }}>
            <PlacedPhoto
              src={lookPairs.pair2Left}
              alt="Образ коллекции"
              style={{ left: '8.333%', top: 0, width: '41.667%', height: '118.21%' }}
            />
            <div className="absolute top-0 right-[8.333%] bottom-0 left-1/2 bg-background-secondary" />
            <p className="absolute bottom-[14.286%] left-[58.333%] w-[24.514%] font-extrabold text-[max(16px,1.667vw)] leading-none text-text-primary">
              новая коллекция IDOL посвящена современному тейлорингу, в котором структурность и мягкость создают
              ощущение силы.
              <br />
              среди знаковых моделей — бомбер и брюки карго в утилитарном стиле.
            </p>
          </div>
        </div>

        <div className="relative w-[83.333%] overflow-hidden" style={{ aspectRatio: '1200 / 720' }}>
          <img
            src={lookLandscape}
            alt="Студийный кадр коллекции"
            draggable={false}
            className="absolute max-w-none object-cover"
            style={{ left: '-0.01%', top: 0, width: '100.03%', height: '111.23%' }}
          />
        </div>
      </div>

      <LookbookCarousel aspect={gallery2.aspect} slides={gallery2.slides} />
    </main>
  )
}
