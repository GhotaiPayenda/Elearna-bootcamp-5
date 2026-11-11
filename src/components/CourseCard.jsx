import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import iconBooks from '../assets/icon-books.svg'
import iconPerson from '../assets/icon-person.svg'
import ratingStars from '../assets/rating.svg'

const outQuart = [0.165, 0.84, 0.44, 1]

const buttonClass =
  'flex min-h-[50px] w-full items-center justify-center rounded-[4px] px-[24px] py-[10px] text-[17px] leading-[20px] font-normal tracking-[-0.5px] capitalize transition-transform duration-300 hover:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand max-[767px]:text-[14px]'

function CourseInfo({ icon, width, height, children, alignRight = false }) {
  return (
    <div
      className={`flex items-center gap-[12px] px-[20px] max-[991px]:static max-[991px]:justify-center max-[991px]:px-0 max-[479px]:pl-0 ${
        alignRight
          ? 'justify-end max-[991px]:justify-center max-[479px]:pr-[10px]'
          : 'justify-start max-[479px]:pr-[10px]'
      }`}
    >
      <img
        src={icon}
        width={width}
        height={height}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="shrink-0"
      />
      <span className="text-[16px] leading-[29px] text-ink max-[767px]:text-[14px] max-[767px]:leading-[23px]">
        {children}
      </span>
    </div>
  )
}

export default function CourseCard({ course, index = 0 }) {
  const isFree = course.price === 'Free'

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: outQuart, delay: index * 0.06 }}
      className="group flex h-full flex-col bg-white transition-shadow duration-300 hover:shadow-[0_40px_60px_#8c9aacb3] max-[767px]:hover:shadow-none"
    >
      <Link
        to={course.detailsTo}
        aria-label={course.title}
        className="mb-[8px] block w-full overflow-hidden max-[479px]:mb-[7px]"
      >
        <img
          src={course.image}
          width="410"
          height="254"
          alt={course.title}
          loading="lazy"
          className="aspect-[410/256] w-full object-cover"
        />
      </Link>

      <div className="relative flex flex-col items-start px-[30px] pt-[32px] pb-[10px] max-[991px]:px-[10px] max-[767px]:px-[20px] max-[479px]:pb-[30px]">
        <div className="mb-[20px] text-[13px] leading-[12px] font-medium tracking-[0.5px] text-ink uppercase max-[767px]:mb-[10px]">
          {course.category}
        </div>

        <h3 className="mb-[20px] font-heading text-[24px] leading-[32px] font-semibold tracking-[-0.5px] text-ink max-[991px]:text-[20px] max-[767px]:leading-[30px]">
          {course.title}
        </h3>

        <div className="mb-[27px] flex items-center justify-start gap-[3px] max-[991px]:mb-[20px]">
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

        <div className="relative w-full">
          <div className="pointer-events-none absolute inset-0 grid w-full grid-cols-2 border-t border-[#7b7c7d33] max-[991px]:pointer-events-auto max-[991px]:static max-[991px]:border-t-0">
            <div className="border-r border-[#7b7c7d33] pt-[10px] pr-[13px] max-[991px]:flex max-[991px]:flex-col max-[991px]:gap-[10px] max-[991px]:pb-[11px] max-[991px]:pr-[10px] max-[479px]:border-r-0 max-[479px]:pr-0">
              <CourseInfo icon={iconBooks} width="16" height="16">
                {course.lessons} Lessons
              </CourseInfo>
            </div>

            <div className="pt-[10px] pl-[13px] max-[991px]:flex max-[991px]:flex-col max-[991px]:gap-[10px] max-[991px]:pb-[11px] max-[991px]:pl-[10px] max-[479px]:pl-0">
              <CourseInfo
                icon={iconPerson}
                width="12"
                height="14"
                alignRight
              >
                {course.enrolled} Enrolled
              </CourseInfo>
            </div>
          </div>

          <div
            className={`grid w-full translate-y-[8px] border-t border-[#7b7c7d33] opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-y-0 group-hover:opacity-100 max-[991px]:static max-[991px]:translate-y-0 max-[991px]:border-t-0 max-[991px]:opacity-100 ${
              isFree ? 'grid-cols-1' : 'grid-cols-2 max-[479px]:grid-cols-1'
            }`}
          >
            <div
              className={`pt-[10px] pr-[13px] max-[991px]:flex max-[991px]:flex-col max-[991px]:gap-[10px] max-[991px]:pb-[10px] max-[991px]:pr-[10px] max-[479px]:pb-0 max-[479px]:pr-0 ${
                isFree
                  ? 'border-r-0'
                  : 'border-r border-[#7b7c7d33] max-[479px]:border-r-0'
              }`}
            >
              <Link
                to={course.detailsTo}
                className={`${buttonClass} bg-brand text-ink`}
              >
                Course Details
              </Link>
            </div>

            {!isFree && (
              <div className="pt-[10px] pl-[13px] max-[991px]:flex max-[991px]:flex-col max-[991px]:gap-[10px] max-[991px]:pb-[10px] max-[991px]:pl-[10px] max-[479px]:pl-0">
                <Link
                  to={course.enrollTo}
                  className={`${buttonClass} bg-ink text-white`}
                >
                  Enroll
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="absolute top-[-37px] right-[30px] z-10 flex h-[74px] w-[74px] items-center justify-center rounded-full bg-blue text-[20px] leading-[29px] text-white max-[479px]:top-[-32px] max-[479px]:h-[65px] max-[479px]:w-[65px] max-[479px]:text-[17px]">
          {course.price}
        </div>
      </div>
    </motion.article>
  )
}
