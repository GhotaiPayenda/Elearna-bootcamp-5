import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const MotionLink = motion.create(Link)

const outQuart = [0.165, 0.84, 0.44, 1]

export default function CategoryCard({ category, index }) {
  return (
    <MotionLink
      to={category.to}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: outQuart, delay: index * 0.06 }}
      className="group flex flex-col items-center justify-center rounded-[4px] border border-[#6f819733] bg-white px-5 pt-5 pb-[30px] text-center transition-[border-color,box-shadow,transform] duration-[350ms] hover:-translate-y-[3px] hover:border-transparent hover:shadow-[0_2px_60px_#4f9bac47] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand motion-reduce:transition-none motion-reduce:hover:translate-y-0 max-[991px]:hover:translate-y-0 max-[991px]:hover:border-[#6f819733] max-[991px]:hover:shadow-none"
    >
      <span className="mb-[15px] flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full bg-light-blue transition-transform duration-[350ms] group-hover:scale-105 motion-reduce:transition-none max-[991px]:group-hover:scale-100">
        <img
          src={category.icon}
          alt=""
          aria-hidden="true"
          className="h-auto w-auto max-w-[41px]"
        />
      </span>

      <h3 className="mb-[5px] max-w-[116px] font-heading text-[18px] leading-[22px] font-semibold tracking-[-0.5px] text-ink max-[991px]:max-w-none max-[767px]:text-[15px] max-[767px]:leading-[20px]">
        {category.title}
      </h3>

      <p className="text-[17px] leading-[29px] font-normal tracking-[0.5px] text-body max-[767px]:text-[14px] max-[767px]:leading-[23px]">
        {category.courses} Courses
      </p>
    </MotionLink>
  )
}
