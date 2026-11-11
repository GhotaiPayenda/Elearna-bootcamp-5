import CTA from '../components/CTA'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import HeroFooter from '../components/HeroFooter'
import Journey from '../components/Journey'
import Navbar from '../components/Navbar'
import OnlineLearning from '../components/OnlineLearning'
import Testimonials from '../components/Testimonials'
import TopCategories from '../components/TopCategories'
import TopOnlineCourses from '../components/TopOnlineCourses'
import TrendingCourses from '../components/TrendingCourses'
import WhatWeOffer from '../components/WhatWeOffer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HeroFooter />
        <TopCategories />
        <OnlineLearning />
        <TopOnlineCourses />
        <WhatWeOffer />
        <Testimonials />
        <div className="home-one-linear-background">
          <TrendingCourses />
          <Journey />
          <CTA />
        </div>
      </main>
      <Footer />
    </>
  )
}
