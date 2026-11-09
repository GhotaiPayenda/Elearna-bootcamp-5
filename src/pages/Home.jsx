import Hero from '../components/Hero'
import HeroFooter from '../components/HeroFooter'
import Navbar from '../components/Navbar'
import TopCategories from '../components/TopCategories'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HeroFooter />
        <TopCategories />
      </main>
    </>
  )
}
