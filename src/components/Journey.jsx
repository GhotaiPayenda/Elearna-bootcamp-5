import { motion } from 'framer-motion'

import iconBooksLarge from '../assets/icon-books-large.svg'
import iconCourse from '../assets/icon-course.svg'
import iconMoneyBag from '../assets/icon-money-bag.svg'
import iconVerified from '../assets/icon-verified.svg'

const outQuart = [0.165, 0.84, 0.44, 1]
const viewport = { once: true, amount: 0.12 }

const slideInBottom = (delay = 0.1) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: outQuart, delay },
  },
})

const journeyCards = [
  {
    icon: iconBooksLarge,
    width: 43,
    height: 42,
    title: 'Learn anything',
  },
  {
    icon: iconMoneyBag,
    width: 34,
    height: 42,
    title: 'Save money',
  },
  {
    icon: iconCourse,
    width: 38,
    height: 42,
    title: 'Flexible courses',
  },
  {
    icon: iconVerified,
    width: 42,
    height: 42,
    title: 'Unlimited certificate',
  },
]

export default function Journey() {
  return (
    <section
      aria-label="Why we are"
      className="pb-20 max-[991px]:pb-[50px] min-[1440px]:pb-[110px]"
    >
      <div className="mx-auto w-full max-w-[1320px] px-[15px]">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={slideInBottom(0.1)}
            className="text-[15px] leading-[29px] font-medium tracking-[0.5px] text-ink uppercase max-[767px]:text-[12px] max-[767px]:leading-[23px]"
          >
            Why we are
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={slideInBottom(0.2)}
            className="mt-[13px] mb-[10px] font-heading text-[35px] leading-[42px] font-semibold tracking-[-1px] text-ink max-[991px]:text-[30px] max-[991px]:leading-[37px] max-[767px]:text-[25px] max-[767px]:leading-[35px] max-[767px]:tracking-[-0.5px]"
          >
            Elevate your professional journey
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={slideInBottom(0.3)}
            className="mb-[40px] max-w-[574px] text-[17px] leading-[29px] tracking-[0.5px] text-body max-[767px]:mb-[20px] max-[767px]:text-[14px] max-[767px]:leading-[23px]"
          >
            Lorem ipsum dolor sit amet consectetur. Pellentesque id quam mauris
            mus. Vitae diam dolor lacus amet integer ut.
          </motion.p>

          <div className="grid w-full grid-cols-4 gap-[30px] max-[991px]:grid-cols-2 max-[991px]:gap-y-[50px] max-[479px]:grid-cols-1 max-[479px]:gap-y-[40px]">
            {journeyCards.map((card, index) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{
                  duration: 0.7,
                  ease: outQuart,
                  delay: 0.15 + index * 0.08,
                }}
                className="flex flex-col items-center gap-[25px] text-center max-[479px]:gap-[18px]"
              >
                <img
                  src={card.icon}
                  width={card.width}
                  height={card.height}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="h-[42px] w-auto shrink-0"
                />

                <h3 className="font-heading text-[20px] leading-[25px] font-semibold tracking-[-0.5px] text-ink max-[767px]:text-[17px] max-[767px]:leading-[23px]">
                  {card.title}
                </h3>

                <p className="text-[17px] leading-[29px] tracking-[0.5px] text-body max-[767px]:text-[14px] max-[767px]:leading-[23px]">
                  Lorem ipsum dolor sit amet conse non quis id viverra id proin.
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
