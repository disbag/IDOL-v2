import { useRef } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import LookbookPage from './components/LookbookPage'
import { footerColumns, footerSocial } from './data/productData'

function App() {
  const heroRef = useRef(null)

  return (
    <div className="flex min-h-screen w-full flex-col items-start overflow-x-hidden bg-white">
      <Header opaqueAfterRef={heroRef} />
      <LookbookPage heroRef={heroRef} />
      <Footer columns={footerColumns} social={footerSocial} />
    </div>
  )
}

export default App
