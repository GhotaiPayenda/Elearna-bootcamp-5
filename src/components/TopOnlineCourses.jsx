import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { courseTabs, coursesBySlug } from '../data/courses'
import CourseCard from './CourseCard'

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

export default function TopOnlineCourses() {
  const [activeTab, setActiveTab] = useState(courseTabs[0].id)
  const activeCourses =
    courseTabs.find((tab) => tab.id === activeTab)?.courses ?? []

  return (
    <section
      aria-label="Top online courses"
      className="bg-light-blue pt-20 pb-[90px] max-[991px]:pt-[50px] max-[991px]:pb-[60px] min-[1440px]:pt-[115px] min-[1440px]:pb-[120px]"
    >
      <div className="mx-auto w-full max-w-[1320px] px-[15px]">
        <div className="mb-[50px] flex flex-col items-start max-[991px]:mb-[21px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={slideInBottom()}
            className="text-[15px] leading-[29px] font-medium tracking-[0.5px] text-ink uppercase max-[767px]:text-[12px] max-[767px]:leading-[23px]"
          >
            Online learning
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={slideInBottom(0.2)}
            className="mt-[12px] font-heading text-[48px] leading-[52px] font-semibold tracking-[-1.5px] text-ink max-[991px]:text-[35px] max-[991px]:leading-[44px] max-[767px]:text-[30px] max-[767px]:leading-[40px] max-[767px]:tracking-[-1.3px]"
          >
            Top online courses
          </motion.h2>
        </div>

        <div className="flex flex-col items-end max-[991px]:items-start">
          <div
            role="tablist"
            aria-label="Course categories"
            className="-mt-[80px] mb-[50px] flex flex-wrap items-center max-[991px]:mt-0 max-[991px]:mb-[33px] max-[479px]:gap-y-[2px]"
          >
            {courseTabs.map((tab) => {
              const selected = activeTab === tab.id

              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveTab(tab.id)}
                  className={`cursor-pointer px-[10px] text-[16px] leading-[29px] font-normal tracking-[0.5px] transition-opacity duration-200 max-[479px]:leading-[23px] min-[1440px]:px-[15px] ${
                    selected
                      ? 'text-[#222] opacity-100'
                      : 'text-[#222] opacity-50 hover:opacity-100'
                  }`}
                >
                  {tab.label}
                </button>
              )
            })}
          </div>

          <div className="w-full">
            <div
              key={activeTab}
              className="grid grid-cols-2 gap-[30px] max-[767px]:grid-cols-1 min-[1280px]:grid-cols-3"
            >
              {activeCourses.map((slug, index) => (
                <CourseCard
                  key={slug}
                  course={coursesBySlug[slug]}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={slideInBottom(0.1)}
          className="mx-auto mt-[80px] flex w-full max-w-[724px] items-center justify-center rounded-[85px] bg-ink px-[60px] py-[20px] text-center text-[16px] leading-[21px] text-white max-[991px]:mt-[40px] max-[767px]:px-[20px] max-[479px]:rounded-[10px]"
        >
          <div>
            We assist you in finding the ideal tutor at no cost.{' '}
            <Link
              to="/course-one"
              className="font-normal text-white capitalize underline underline-offset-2"
            >
              Browse all available courses
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
