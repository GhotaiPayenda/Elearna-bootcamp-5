import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import quickStartControls from '../assets/quick-start-controls.svg'
import quickStartPoster from '../assets/quick-start-poster.jpg'
import quickStartVideo from '../assets/quick-start-video.mp4'
import quickStartWoman from '../assets/quick-start-woman.webp'

const MotionLink = motion.create(Link)

const outQuart = [0.165, 0.84, 0.44, 1]
const viewport = { once: true, amount: 0.1 }

const slideInBottom = (delay) => ({
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: outQuart, delay },
  },
})

const buttonHover = {
  whileHover: { scale: 0.95 },
  whileTap: { scale: 0.95 },
  transition: { duration: 0.3, ease: 'easeInOut' },
}

// Webflow only runs this entrance interaction on desktop ("main" media query).
function useDesktopEntrance() {
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(min-width: 992px)').matches,
  )

  useEffect(() => {
    const query = window.matchMedia('(min-width: 992px)')
    const update = () => setIsDesktop(query.matches)

    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  return isDesktop
}

function ActionButton({ to, variant, children }) {
  const palette =
    variant === 'yellow'
      ? 'bg-brand text-ink'
      : 'bg-ink text-white'

  return (
    <MotionLink
      to={to}
      {...buttonHover}
      className={`flex min-h-[50px] items-center justify-center rounded-[4px] px-[45px] py-[10px] text-[17px] leading-[20px] font-normal tracking-[-0.5px] capitalize focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${palette} max-[767px]:px-[20px] max-[767px]:text-[14px]`}
    >
      {children}
    </MotionLink>
  )
}

function PopularCoursesCard({ animate }) {
  return (
    <motion.div
      initial={animate ? 'hidden' : false}
      whileInView="visible"
      viewport={viewport}
      variants={slideInBottom(0.1)}
      className="relative flex items-center justify-start overflow-hidden rounded-[4px] bg-light-blue px-[30px] pt-[67px] pb-[75px] max-[991px]:flex-col max-[991px]:items-center max-[991px]:gap-10 max-[991px]:bg-none max-[991px]:py-[33px] min-[1440px]:px-[50px]"
    >
      <img
        src={quickStartWoman}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-y-0 right-0 hidden h-full w-auto object-contain min-[992px]:block"
      />

      <div className="relative z-10 flex max-w-[259px] flex-col gap-[30px] max-[991px]:items-center max-[991px]:justify-center max-[991px]:text-center max-[767px]:max-w-none max-[767px]:gap-[22px]">
        <h3 className="font-heading text-[24px] leading-[32px] font-semibold tracking-[-0.5px] text-ink max-[991px]:text-[20px] max-[767px]:leading-[30px]">
          Quick access to the popular courses
        </h3>

        <ActionButton to="/course-one" variant="yellow">
          View Courses
        </ActionButton>
      </div>

      <img
        src={quickStartWoman}
        alt="Woman learning on a laptop"
        loading="lazy"
        className="aspect-[283/222] w-full rounded-[12px] object-cover min-[992px]:hidden"
      />
    </motion.div>
  )
}

function SkillsOnlineCard({ animate }) {
  return (
    <motion.div
      initial={animate ? 'hidden' : false}
      whileInView="visible"
      viewport={viewport}
      variants={slideInBottom(0.2)}
      className="flex items-center justify-between gap-[30px] rounded-[4px] bg-[#f1f1e9] px-[30px] py-[33px] max-[991px]:flex-col min-[1440px]:px-[50px]"
    >
      <div className="flex max-w-[200px] flex-1 flex-col gap-[30px] max-[991px]:flex-none max-[991px]:items-center max-[991px]:justify-start max-[991px]:text-center max-[767px]:max-w-none max-[767px]:gap-[22px]">
        <h3 className="font-heading text-[24px] leading-[32px] font-semibold tracking-[-0.5px] text-ink max-[991px]:text-[20px] max-[767px]:leading-[30px]">
          Develop your skills online!
        </h3>

        <ActionButton to="/career" variant="dark">
          Apply now
        </ActionButton>
      </div>

      <div className="relative flex aspect-[283/222] max-w-[283px] flex-1 items-end justify-center overflow-hidden rounded-[14px] max-[991px]:w-full max-[991px]:max-w-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={quickStartPoster}
          aria-hidden="true"
          tabIndex={-1}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={quickStartVideo} type="video/mp4" />
        </video>

        <img
          src={quickStartControls}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute bottom-5 left-1/2 z-[5] h-auto w-[150px] -translate-x-1/2"
        />
      </div>
    </motion.div>
  )
}

export default function OnlineLearning() {
  const animate = useDesktopEntrance()

  return (
    <section
      aria-label="Online learning"
      className="pb-[90px] max-[991px]:pb-[60px] min-[1440px]:pb-[120px]"
    >
      <div className="mx-auto w-full max-w-[1320px] px-[15px]">
        <div className="grid grid-cols-2 gap-[35px] max-[767px]:grid-cols-1">
          <PopularCoursesCard animate={animate} />
          <SkillsOnlineCard animate={animate} />
        </div>
      </div>
    </section>
  )
}
