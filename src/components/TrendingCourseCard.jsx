import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import iconTick from '../assets/icon-tick.svg'
import ratingStars from '../assets/rating.svg'

const outQuart = [0.165, 0.84, 0.44, 1]
const viewport = { once: true, amount: 0.12 }

const checklist = [
  'Lorem ipsum dolor sit amet consectetur',
  'Lorem ipsum dolor',
  'Lorem ipsum dolor sit',
]

const popupButtonClass =
  'flex min-h-[50px] items-center justify-center rounded-[4px] px-[22px] py-[10px] text-[17px] leading-[29px] font-normal tracking-[-0.5px] capitalize transition-transform duration-300 hover:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand'

export default function TrendingCourseCard({ course, index = 0, isLast = false }) {
  const isFree = course.price === 'Free'

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.7, ease: outQuart, delay: index * 0.06 }}
      className="group relative flex h-full min-w-0 items-center"
    >
      <div className="relative flex h-full w-full flex-col items-center overflow-hidden bg-white">
        <img
          src={course.image}
          width="519"
          height="400"
          alt={course.title}
          loading="lazy"
          className="aspect-[300/231] w-full object-cover"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[3] bg-[linear-gradient(#0000,#000c)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
        />

        <div className="relative z-[4] w-full bg-white px-[30px] pt-[23px] pb-[20px]">
          <div className="mb-[10px] text-[13px] leading-[12px] font-medium tracking-[0.5px] text-body uppercase max-[767px]:text-[11px]">
            {course.category}
          </div>

          <h3 className="mb-[20px] font-heading text-[20px] leading-[25px] font-semibold tracking-[-0.5px] text-ink max-[767px]:text-[17px] max-[767px]:leading-[23px]">
            {course.title}
          </h3>

          <div className="flex items-center justify-start gap-[3px]">
            <img
              src={ratingStars}
              width="79"
              height="19"
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="h-[19px] w-[79px]"
            />
            <span className="text-[13px] leading-[12px] font-normal text-body max-[767px]:text-[11px]">
              {course.rating}
            </span>
          </div>
        </div>

        <div className="absolute top-[14px] right-[14px] z-[10] flex h-[74px] w-[74px] items-center justify-center rounded-full bg-blue text-[20px] leading-[29px] text-white max-[479px]:h-[65px] max-[479px]:w-[65px] max-[479px]:text-[17px]">
          {course.price}
        </div>
      </div>

      <div
        className={`pointer-events-none absolute top-1/2 z-[99] w-[350px] max-w-[350px] -translate-y-1/2 rounded-[4px] bg-white pt-[25px] pr-[30px] pb-[30px] pl-[30px] opacity-0 shadow-[0_20px_50px_#00000040] transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100 max-[991px]:hidden ${
          isLast ? 'left-[-44%]' : 'right-[-44%]'
        }`}
      >
        <div className="mb-[20px] font-heading text-[20px] leading-[25px] font-semibold tracking-[-0.5px] text-ink">
          {course.title}
        </div>

        <div className="mb-[30px] flex items-center justify-start gap-[4px]">
          <span className="h-[4px] w-[4px] shrink-0 rounded-full bg-body" />
          <span className="text-[13px] leading-[12px] font-medium tracking-[0.5px] text-body uppercase">
            {course.lessons} Lessons
          </span>
          <span className="h-[4px] w-[4px] shrink-0 rounded-full bg-body" />
          <span className="text-[13px] leading-[12px] font-medium tracking-[0.5px] text-body uppercase">
            {course.enrolled} Enrolled
          </span>
        </div>

        <p className="mb-[10px] text-[14px] leading-[21px] tracking-[0.5px] text-body">
          Lorem ipsum dolor sit amet consectetur. Eget viverra suspendisse
          imperdiet.
        </p>

        <div className="mb-[20px] flex flex-col">
          {checklist.map((item) => (
            <div
              key={item}
              className="mb-[6px] flex items-start gap-[10px]"
            >
              <img
                src={iconTick}
                width="12"
                height="10"
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="mt-[5px] h-[10px] w-[12px] shrink-0"
              />
              <span className="text-[14px] leading-[21px] tracking-[0.5px] text-body">
                {item}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-[10px]">
          <Link
            to={course.detailsTo}
            className={`${popupButtonClass} bg-brand text-ink ${
              isFree ? 'w-full' : 'shrink-0'
            }`}
          >
            Course Details
          </Link>

          {!isFree && (
            <Link
              to={course.enrollTo}
              className={`${popupButtonClass} flex-1 bg-ink text-white`}
            >
              Enroll
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  )
}
