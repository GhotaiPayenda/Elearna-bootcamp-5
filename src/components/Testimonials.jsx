import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

import sliderArrow from '../assets/slider-arrow.svg'
import testimonialBackground from '../assets/testimonial-background.avif'
import testimonialAuthorOne from '../assets/testimonial-author-1.avif'
import testimonialAuthorTwo from '../assets/testimonial-author-2.avif'

const outQuart = [0.165, 0.84, 0.44, 1]
const viewport = { once: true, amount: 0.15 }

const slideInBottom = (delay = 0.1) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: outQuart, delay },
  },
})

const testimonials = [
  {
    quote:
      '"Lorem ipsum dolor sit amet consectetur. Adipiscing eget risus tempus facilisis scelerisque vitae consectetur vitae. Amet faucibus venenatis donec mattis. Morbi placerat eleifend malesuada sed semper quis."',
    name: 'Linda Grady',
    role: 'Co-assistant manager',
    image: testimonialAuthorOne,
  },
  {
    quote:
      '"Lorem ipsum dolor sit amet consectetur. Molestie faucibus nibh felis tempor vel aliquet cursus placerat duis. Est felis pulvinar tortor ut nibh montes ante gravida velit. Facilisi posuere in sed mattis blandit duis aliquet."',
    name: 'Jim Adams',
    role: 'Designer',
    image: testimonialAuthorTwo,
  },
]

const counters = [
  {
    value: 15,
    suffix: 'M',
    description: 'Successful students',
  },
  {
    value: 12,
    suffix: 'K',
    description: 'Global job placements',
  },
]

const digitClass =
  'block h-[52px] font-heading text-[48px] leading-[52px] font-semibold text-white max-[991px]:h-[44px] max-[991px]:text-[35px] max-[991px]:leading-[44px] max-[767px]:h-[40px] max-[767px]:text-[30px] max-[767px]:leading-[40px]'

const suffixClass =
  'font-heading text-[48px] leading-[52px] font-semibold text-white max-[991px]:text-[35px] max-[991px]:leading-[44px] max-[767px]:text-[30px] max-[767px]:leading-[40px]'

function RollingDigit({ digit }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="h-[52px] w-[30px] shrink-0 overflow-hidden max-[991px]:h-[44px] max-[991px]:w-[21px] max-[767px]:h-[40px] max-[767px]:w-[18px]"
    >
      <div
        className="counter-train flex flex-col gap-[5px] pb-[5px]"
        style={{ '--counter-digit': inView ? digit : 0 }}
      >
        {Array.from({ length: 10 }, (_, number) => (
          <span key={number} className={digitClass}>
            {number}
          </span>
        ))}
      </div>
    </div>
  )
}

function Counter({ value, suffix }) {
  return (
    <div className="flex h-[52px] items-center overflow-hidden max-[991px]:h-[44px] max-[767px]:h-[40px]">
      {String(value)
        .split('')
        .map((digit, index) => (
          <RollingDigit key={index} digit={Number(digit)} />
        ))}
      <span aria-hidden="true" className={suffixClass}>
        {suffix}
      </span>
      <span className="sr-only">
        {value}
        {suffix}
      </span>
    </div>
  )
}

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0)

  const previousSlide = () => {
    setActiveSlide((current) => (current === 0 ? testimonials.length - 1 : current - 1))
  }

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % testimonials.length)
  }

  return (
    <section
      aria-label="Testimonials"
      className="bg-cover bg-center bg-no-repeat pt-20 pb-[90px] max-[991px]:pt-[50px] max-[991px]:pb-[60px] min-[1440px]:pt-[115px] min-[1440px]:pb-[120px]"
      style={{
        backgroundColor: '#0f252a',
        backgroundImage: `url(${testimonialBackground})`,
      }}
    >
      <div className="mx-auto w-full max-w-[1320px] px-[15px]">
        <div className="mb-[30px] flex max-w-[1224px] flex-row items-end justify-between gap-[30px] max-[991px]:flex-col max-[991px]:items-start max-[767px]:gap-[22px]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={slideInBottom(0.1)}
            className="flex max-w-[455px] flex-col items-start max-[991px]:max-w-none max-[479px]:items-center max-[479px]:text-center"
          >
            <div className="text-[15px] leading-[29px] font-medium tracking-[0.5px] text-light-blue uppercase max-[767px]:text-[12px] max-[767px]:leading-[23px]">
              Our testimonials
            </div>
            <h2 className="mt-[15px] font-heading text-[48px] leading-[52px] font-semibold tracking-[-1.5px] text-white max-[991px]:text-[35px] max-[991px]:leading-[44px] max-[767px]:text-[30px] max-[767px]:leading-[40px] max-[767px]:tracking-[-1.3px]">
              Trusted by our successful students
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={slideInBottom(0.2)}
            className="flex max-w-[596px] flex-1 flex-row items-center justify-between gap-[30px] max-[991px]:max-w-none max-[479px]:text-center"
          >
            {counters.map((counter) => (
              <div
                key={counter.suffix}
                className="flex max-w-[266px] flex-1 flex-row items-center justify-between gap-[20px] max-[991px]:max-w-none max-[991px]:flex-none max-[767px]:flex-col max-[767px]:gap-[10px]"
              >
                <Counter value={counter.value} suffix={counter.suffix} />
                <div
                  aria-hidden="true"
                  className="hidden h-[38px] w-px shrink-0 bg-white min-[768px]:max-[991px]:block min-[1280px]:block"
                />
                <p className="max-w-[130px] text-[15px] leading-[29px] text-body uppercase max-[991px]:max-w-none max-[767px]:text-[12px] max-[767px]:leading-[23px]">
                  {counter.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex flex-row items-center justify-between gap-[30px] max-[767px]:flex-col">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={slideInBottom(0.1)}
            className="relative max-w-[520px] flex-1 max-[767px]:w-full max-[767px]:max-w-none"
          >
            <img
              src={testimonials[0].image}
              width="520"
              height="351"
              alt="Linda Grady"
              loading="lazy"
              className={`h-[351px] w-full rounded-[4px] object-fill transition-opacity duration-500 max-[767px]:h-auto ${
                activeSlide === 0 ? 'opacity-100' : 'opacity-0'
              }`}
            />
            <img
              src={testimonials[1].image}
              width="520"
              height="351"
              alt="Jim Adams"
              loading="lazy"
              className={`absolute inset-0 h-full w-full rounded-[4px] object-fill transition-opacity duration-500 ${
                activeSlide === 1 ? 'opacity-100' : 'opacity-0'
              }`}
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={slideInBottom(0.2)}
            className="max-w-[662px] flex-1 max-[767px]:max-w-none"
          >
            <div className="relative pb-[70px] max-[991px]:pb-[60px]">
              <div className="grid">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.name}
                    aria-hidden={activeSlide !== index}
                    className={`col-start-1 row-start-1 transition-opacity duration-500 ${
                      activeSlide === index
                        ? 'opacity-100'
                        : 'pointer-events-none opacity-0'
                    }`}
                  >
                    <p className="mb-[35px] text-[22px] leading-[36px] text-body max-[991px]:mb-[20px] max-[991px]:text-[17px] max-[991px]:leading-[29px] max-[767px]:text-[14px] max-[767px]:leading-[24px]">
                      {testimonial.quote}
                    </p>
                    <div className="flex flex-col items-start">
                      <div className="text-[22px] leading-[36px] text-white max-[991px]:text-[20px] max-[767px]:text-[17px]">
                        {testimonial.name}
                      </div>
                      <div className="text-[15px] leading-[29px] text-body uppercase max-[767px]:text-[12px] max-[767px]:leading-[23px]">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={previousSlide}
                className="absolute bottom-0 left-0 flex h-10 w-10 items-center justify-center rounded-full border border-white opacity-50 transition-opacity duration-300 hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <img
                  src={sliderArrow}
                  width="18"
                  height="14"
                  alt=""
                  loading="lazy"
                  className="h-[14px] w-[18px] rotate-180"
                />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={nextSlide}
                className="absolute bottom-0 left-[50px] flex h-10 w-10 items-center justify-center rounded-full border border-white opacity-50 transition-opacity duration-300 hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <img
                  src={sliderArrow}
                  width="18"
                  height="14"
                  alt=""
                  loading="lazy"
                  className="h-[14px] w-[18px]"
                />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
