import { motion } from 'framer-motion'

import { coursesBySlug, trendingCourseSlugs } from '../data/courses'
import TrendingCourseCard from './TrendingCourseCard'

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

const trendingCourses = trendingCourseSlugs
  .map((slug) => coursesBySlug[slug])
  .filter(Boolean)

export default function TrendingCourses() {
  return (
    <section
      aria-label="Trending courses"
      className="pt-20 pb-20 max-[991px]:pt-[50px] max-[991px]:pb-[50px] min-[1440px]:pt-[115px] min-[1440px]:pb-[110px]"
    >
      <div className="mx-auto w-full max-w-[1320px] px-[15px]">
        <div className="mb-[30px] flex flex-col items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={slideInBottom(0.1)}
            className="text-[15px] leading-[29px] font-medium tracking-[0.5px] text-ink uppercase max-[767px]:text-[12px] max-[767px]:leading-[23px]"
          >
            Trending courses
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={slideInBottom(0.2)}
            className="mt-[13px] font-heading text-[35px] leading-[42px] font-semibold tracking-[-1px] text-ink max-[991px]:text-[30px] max-[991px]:leading-[37px] max-[767px]:text-[25px] max-[767px]:leading-[35px] max-[767px]:tracking-[-0.5px]"
          >
            Explore our top programs
          </motion.h2>
        </div>

        <div className="grid grid-cols-4 gap-[30px] max-[991px]:grid-cols-2 max-[479px]:grid-cols-1">
          {trendingCourses.map((course, index) => (
            <TrendingCourseCard
              key={course.slug}
              course={course}
              index={index}
              isLast={index === trendingCourses.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
