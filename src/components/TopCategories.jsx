import { motion } from 'framer-motion'

import { categories } from '../data/categories'
import CategoryCard from './CategoryCard'

const outQuart = [0.165, 0.84, 0.44, 1]
const viewport = { once: true, amount: 0.15 }

const slideInBottom = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: outQuart, delay: 0.1 },
  },
}

export default function TopCategories() {
  return (
    <section className="pt-20 pb-[90px] max-[991px]:pt-[53px] max-[991px]:pb-[60px] min-[1440px]:pt-[113px] min-[1440px]:pb-[120px]">
      <div className="mx-auto w-full max-w-[1320px] px-[15px]">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={slideInBottom}
            className="text-[15px] leading-[29px] font-medium tracking-[0.5px] text-ink uppercase max-[767px]:text-[12px] max-[767px]:leading-[23px]"
          >
            Top Categories
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={slideInBottom}
            className="mt-[13px] mb-10 max-w-[549px] font-heading text-[35px] leading-[42px] font-semibold tracking-[-1px] text-ink max-[991px]:text-[30px] max-[991px]:leading-[37px] max-[767px]:mt-2 max-[767px]:mb-[10px] max-[767px]:text-[25px] max-[767px]:leading-[35px] max-[767px]:tracking-[-0.7px]"
          >
            Discover leading categories to elevate your journey
          </motion.h2>

          <div className="grid w-full grid-cols-6 gap-[30px] max-[991px]:grid-cols-3 max-[767px]:grid-cols-2 max-[479px]:grid-cols-1">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.title}
                category={category}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
