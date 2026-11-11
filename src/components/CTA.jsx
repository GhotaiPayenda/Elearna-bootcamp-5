import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const MotionLink = motion.create(Link)

const outQuart = [0.165, 0.84, 0.44, 1]
const viewport = { once: true, amount: 0.2 }

const slideInBottom = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: outQuart, delay: 0.1 },
  },
}

const buttonHover = {
  whileHover: { scale: 0.95 },
  whileTap: { scale: 0.95 },
  transition: { duration: 0.3, ease: 'easeInOut' },
}

const buttonClass =
  'flex min-h-[50px] items-center justify-center rounded-[4px] px-[45px] py-[10px] text-[17px] leading-[29px] font-normal tracking-[-0.5px] capitalize transition-transform duration-300 hover:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand max-[479px]:px-[20px] max-[767px]:text-[14px] max-[767px]:leading-[20px]'

export default function CTA() {
  return (
    <section aria-label="Start your journey" className="relative z-[2] mb-[-100px]">
      <div className="mx-auto w-full max-w-[1320px] px-[15px]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={slideInBottom}
          className="flex flex-row items-center justify-between gap-[20px] rounded-[4px] bg-brand px-[30px] py-[60px] max-[991px]:flex-col max-[991px]:gap-[30px] max-[991px]:px-[40px] max-[991px]:py-[40px] max-[991px]:text-center max-[767px]:gap-[20px] max-[479px]:px-[20px] max-[479px]:py-[20px] min-[1280px]:px-[100px]"
        >
          <div className="max-w-[420px] font-heading text-[35px] leading-[42px] font-semibold tracking-[-1px] text-ink max-[991px]:max-w-none max-[991px]:text-[30px] max-[991px]:leading-[37px] max-[767px]:text-[25px] max-[767px]:leading-[35px] max-[767px]:tracking-[-0.5px]">
            Are you ready to start your journey?
          </div>

          <div className="flex flex-row items-center gap-[20px] max-[479px]:flex-col max-[479px]:items-stretch min-[1280px]:gap-[30px]">
            <MotionLink
              to="/course-one"
              {...buttonHover}
              className={`${buttonClass} bg-ink text-white`}
            >
              Browse courses
            </MotionLink>

            <MotionLink
              to="/career"
              {...buttonHover}
              className={`${buttonClass} border border-ink bg-transparent text-ink`}
            >
              Became a teacher
            </MotionLink>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
