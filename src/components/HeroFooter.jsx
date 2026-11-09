import { motion } from 'framer-motion'

import { clientLogos } from '../data/clients'

const outQuart = [0.165, 0.84, 0.44, 1]
const viewport = { once: true, amount: 0.2 }

const slideInBottom = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: outQuart, delay: 0.1 },
  },
}

function ClientLogoGroup({ duplicate = false }) {
  return (
    <div
      aria-hidden={duplicate || undefined}
      className="flex shrink-0 items-center gap-[91px] pr-[91px] max-[767px]:gap-[50px] max-[767px]:pr-[50px]"
    >
      {clientLogos.map((logo) => (
        <img
          key={`${duplicate ? 'duplicate-' : ''}${logo.name}`}
          src={logo.src}
          alt={duplicate ? '' : `${logo.name} logo`}
          loading="lazy"
          className="h-[51px] w-auto shrink-0 object-contain max-[991px]:h-[50px] max-[767px]:h-10"
        />
      ))}
    </div>
  )
}

export default function HeroFooter() {
  return (
    <section
      aria-label="Trusted by leading universities and companies"
      className="overflow-hidden bg-light-blue pt-[68px] pb-[65px] max-[991px]:pt-10 max-[991px]:pb-10"
    >
      <div className="mx-auto w-full max-w-[1320px] px-[15px]">
        <div className="flex flex-col items-center text-center">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={slideInBottom}
            className="mb-[25px] text-[17px] leading-[29px] tracking-[0.5px] text-ink max-[767px]:text-[14px] max-[767px]:leading-[23px] max-[479px]:max-w-[290px] max-[479px]:leading-[20px]"
          >
            Learn from 350+ leading universities and companies with us
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={slideInBottom}
            className="relative w-full overflow-hidden"
          >
            <div className="animate-client-marquee flex w-max">
              <ClientLogoGroup />
              <ClientLogoGroup duplicate />
            </div>

            <div className="clients-fade pointer-events-none absolute inset-0 z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
