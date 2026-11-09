import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import achievements from '../assets/achievements.webp'
import blueCircle from '../assets/blue-circle.svg'
import halfMoon from '../assets/half-moon.svg'
import heroBg from '../assets/hero-bg.avif'
import heroGirl from '../assets/hero-girl.webp'
import trustedBy from '../assets/trusted-by.avif'
import yellowDot from '../assets/yellow-dot.svg'

const MotionLink = motion.create(Link)

const outQuart = [0.165, 0.84, 0.44, 1]

const viewport = { once: true, amount: 0.1 }

const slideInBottom = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: outQuart, delay: 0.1 },
  },
}

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: outQuart, delay: 0.1 },
  },
}

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: outQuart, delay: 0.1 },
  },
}

const growIn = (delay) => ({
  hidden: { opacity: 0, scale: 0.75 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: outQuart, delay },
  },
})

export default function Hero() {
  return (
    <section
      className="bg-ink bg-cover bg-center bg-no-repeat pt-[115px] pb-[90px] max-[991px]:pb-[60px] min-[1440px]:pb-[120px]"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="mx-auto w-full max-w-[1320px] px-[15px]">
        <div className="flex items-center justify-between gap-[60px] [perspective:2000px] max-[991px]:flex-col-reverse max-[991px]:items-stretch max-[767px]:gap-[50px]">
          <div className="relative max-w-[677.24px] flex-1 max-[991px]:max-w-none">
            <motion.img
              src={heroGirl}
              width={677.5}
              height={746}
              alt="Hero Girl Image"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={slideInBottom}
              className="block h-auto w-full"
            />

            <motion.img
              src={achievements}
              width={275}
              height={93}
              alt="Achievements"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={slideInRight}
              className="absolute bottom-[25%] left-0 z-[2] h-auto w-[40%]"
            />

            <motion.img
              src={trustedBy}
              width={268}
              height={179}
              alt="Trusted Image"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={slideInLeft}
              className="absolute right-[27px] bottom-[13px] h-auto w-[40%]"
            />

            <motion.img
              src={halfMoon}
              alt="Half Moon"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={growIn(0.25)}
              className="absolute bottom-[28%] left-0 h-auto w-[41%] min-[1440px]:left-[-8%]"
            />

            <motion.img
              src={yellowDot}
              width={17}
              height={17}
              alt="Yellow Dot"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={growIn(0.25)}
              className="absolute right-[-1%] bottom-[37%] h-[17px] w-[17px]"
            />

            <motion.img
              src={yellowDot}
              width={11}
              height={11}
              alt="Yellow Dot"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={growIn(0.3)}
              className="absolute bottom-[64%] left-[10%] h-[11px] w-[11px]"
            />

            <motion.img
              src={blueCircle}
              alt="Blue Dot"
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={growIn(0.3)}
              className="absolute top-[17%] left-[5%] w-[42px] max-[479px]:w-[20px]"
            />
          </div>

          <div className="flex max-w-[529px] flex-1 flex-col max-[991px]:max-w-none max-[991px]:items-center max-[991px]:justify-center max-[991px]:text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={slideInBottom}
              className="text-[15px] leading-[29px] font-medium tracking-[0.5px] text-light-blue uppercase max-[767px]:text-[12px] max-[767px]:leading-[23px]"
            >
              Online learning
            </motion.div>

            <motion.h1
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={slideInBottom}
              className="mt-[15px] mb-[20px] text-[60px] leading-[60px] tracking-[-2.3px] text-white max-[991px]:text-[45px] max-[991px]:leading-[45px] max-[991px]:tracking-[-1.5px] max-[767px]:mt-[10px] max-[767px]:mb-[15px] max-[767px]:text-[35px] max-[767px]:leading-[35px] max-[767px]:tracking-[-1.3px]"
            >
              More then <span className="text-brand">25000+</span> education
              courses online
            </motion.h1>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={slideInBottom}
              className="mb-[30px] text-white opacity-70 max-[767px]:mb-[20px]"
            >
              Lorem ipsum dolor sit amet consectetur. Gravida enim risus
              sollicitudin mauris tincidunt commodo ornare.
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={slideInBottom}
              className="w-fit"
            >
              <MotionLink
                to="/contact-one"
                whileHover={{ scale: 0.95 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="flex min-h-[50px] items-center justify-center rounded-[4px] border border-white/20 bg-ink px-[45px] py-[10px] text-[17px] leading-[20px] tracking-[-0.5px] text-white capitalize max-[767px]:px-[20px] max-[767px]:text-[14px]"
              >
                Get Started
              </MotionLink>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
