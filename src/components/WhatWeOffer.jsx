import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import offerFreeCourse from '../assets/offer-free-course.avif'
import offerMan from '../assets/offer-man.webp'
import offerWoman from '../assets/offer-woman.webp'

const MotionLink = motion.create(Link)

const outQuart = [0.165, 0.84, 0.44, 1]
const viewport = { once: true, amount: 0.1 }

const slideInBottom = (delay = 0.1) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: outQuart, delay },
  },
})

const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: outQuart, delay: 0.1 },
  },
}

const buttonHover = {
  whileHover: { scale: 0.95 },
  whileTap: { scale: 0.95 },
  transition: { duration: 0.3, ease: 'easeInOut' },
}

const benefits = [
  'Skill-based instruction',
  'Analytics and insights',
  'Global certification',
  'Customizable courses',
]

export default function WhatWeOffer() {
  return (
    <section
      aria-label="What we offer"
      className="pt-20 pb-[90px] max-[991px]:py-[60px] min-[1440px]:py-[120px]"
    >
      <div className="mx-auto w-full max-w-[1320px] px-[15px]">
        <div className="flex flex-row items-center justify-between gap-[40px] max-[991px]:flex-col max-[991px]:items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={slideInLeft}
            className="flex w-full max-w-[630px] flex-1 flex-row items-start max-[991px]:max-w-none"
          >
            <div className="flex w-1/2 max-w-[374px] flex-1 flex-col items-end gap-[45px] pt-[50px] max-[991px]:max-w-none">
              <div className="w-[272px] shrink-0 -mr-[10px] shadow-[0_13px_24px_#24394030] max-[991px]:-mr-0 max-[991px]:w-[calc(100%+10px)] max-[991px]:self-start">
                <img
                  src={offerFreeCourse}
                  width="272"
                  height="94"
                  alt="Course count"
                  loading="lazy"
                  className="h-auto w-full rounded-[4px]"
                />
              </div>

              <div className="w-full max-w-[362px] shrink-0 shadow-[0_40px_60px_#00000040]">
                <img
                  src={offerMan}
                  width="362"
                  height="454"
                  alt="Man holding a graph"
                  loading="lazy"
                  className="h-auto w-full rounded-[4px]"
                />
              </div>
            </div>

            <div className="flex w-1/2 flex-1 flex-col items-start justify-center -ml-[33px] shadow-[0_40px_60px_#00000040]">
              <img
                src={offerWoman}
                width="332"
                height="434"
                alt="Woman holding a tablet"
                loading="lazy"
                className="h-auto w-full rounded-[4px]"
              />
            </div>
          </motion.div>

          <div className="flex w-full max-w-[550px] flex-1 flex-col items-start max-[991px]:max-w-none">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={slideInBottom(0.1)}
              className="text-[15px] leading-[29px] font-medium tracking-[0.5px] text-ink uppercase max-[767px]:text-[12px] max-[767px]:leading-[23px]"
            >
              What we offer
            </motion.div>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={slideInBottom(0.2)}
              className="mt-[15px] mb-[12px] font-heading text-[48px] leading-[52px] font-semibold tracking-[-1.5px] text-ink max-[991px]:text-[35px] max-[991px]:leading-[44px] max-[767px]:mt-[10px] max-[767px]:mb-[7px] max-[767px]:text-[30px] max-[767px]:leading-[40px] max-[767px]:tracking-[-1.3px]"
            >
              Personalized learning for your ambitions
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={slideInBottom(0.3)}
              className="mb-[20px] text-[17px] leading-[29px] text-body max-[767px]:text-[14px] max-[767px]:leading-[23px]"
            >
              Lorem ipsum dolor sit amet consectetur. Pellentesque id quam
              mauris mus. Vitae diam dolor lacus amet integer ut.
            </motion.p>

            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={slideInBottom(0.4)}
              className="mb-[45px] flex w-full max-w-[513px] list-disc flex-wrap items-center justify-between gap-x-[40px] gap-y-[13px] pl-[20px] max-[767px]:mb-[30px] max-[479px]:w-auto max-[479px]:flex-col max-[479px]:items-start"
            >
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="font-heading text-[18px] leading-[22px] font-semibold tracking-[-0.5px] text-ink max-[767px]:text-[15px] max-[767px]:leading-[20px]"
                >
                  {benefit}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={slideInBottom(0.5)}
              className="flex w-full flex-wrap items-center justify-between gap-[25px] rounded-[4px] bg-light-blue px-[40px] py-[30px] max-[479px]:flex-col max-[479px]:items-start max-[479px]:px-[20px]"
            >
              <div className="flex max-w-[299px] flex-1 flex-col items-start gap-[19px] max-[991px]:max-w-none">
                <div className="font-heading text-[20px] leading-[25px] font-semibold tracking-[-0.5px] text-ink max-[767px]:text-[17px] max-[767px]:leading-[23px]">
                  Still have questions?
                </div>
                <p className="text-[17px] leading-[29px] text-body max-[767px]:text-[14px] max-[767px]:leading-[23px]">
                  Lorem ipsum dolor sit amet conse ipsum blandit etiam aliquam.
                </p>
              </div>

              <div className="shrink-0">
                <MotionLink
                  to="/contact-two"
                  {...buttonHover}
                  className="flex min-h-[50px] items-center justify-center rounded-[4px] bg-ink px-[45px] py-[10px] text-[17px] leading-[20px] font-normal tracking-[-0.5px] text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand max-[767px]:px-[20px] max-[767px]:text-[14px]"
                >
                  Get Started
                </MotionLink>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
