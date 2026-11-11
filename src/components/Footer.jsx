import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import elearnaLogo from '../assets/elearna-logo.svg'
import footerBackground from '../assets/footer-background.avif'

const outQuart = [0.165, 0.84, 0.44, 1]
const viewport = { once: true, amount: 0.05 }

const slideInBottom = (delay = 0.1) => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: outQuart, delay },
  },
})

const footerColumns = [
  {
    title: 'Quick links',
    links: [
      { label: 'Home', to: '/' },
      { label: 'Events', to: '/events' },
      { label: 'Career', to: '/career' },
      { label: 'Instructor', to: '/team' },
    ],
  },
  {
    title: 'Popular courses',
    links: [
      { label: 'Finance', to: '/category/finance' },
      { label: 'Management', to: '/category/management' },
      { label: 'Design', to: '/category/design' },
      { label: 'Web development', to: '/category/development' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about-one' },
      { label: 'Courses', to: '/course-two' },
      { label: 'Blog', to: '/blog-one' },
      { label: 'Contact', to: '/contact-one' },
      { label: 'License', to: '/information/license' },
      { label: 'Pricing', to: '/pricing-one' },
      { label: '404', to: '/404' },
    ],
  },
  {
    title: 'CMS',
    links: [
      {
        label: 'Course details',
        to: '/courses/grow-your-brand-and-reach-your-audience',
      },
      { label: 'Instructor details', to: '/team-members/lee-schmitt' },
      {
        label: 'Blog details',
        to: '/blog-posts/the-evolution-of-teaching-tools-in-the-21st-century',
      },
    ],
  },
]

const footerLinkClass =
  'text-[17px] leading-[29px] tracking-[0.5px] text-body transition-colors duration-300 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand max-[767px]:text-[14px] max-[767px]:leading-[23px]'

export default function Footer() {
  return (
    <footer
      aria-label="Footer"
      className="overflow-hidden bg-ink bg-cover bg-center bg-no-repeat pt-[180px] max-[991px]:pt-[150px] min-[1440px]:pt-[210px]"
      style={{ backgroundImage: `url(${footerBackground})` }}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={slideInBottom(0.1)}
        className="mx-auto w-full max-w-[1320px] px-[15px]"
      >
        <div className="flex flex-row items-start justify-between gap-[30px] pb-[40px] max-[991px]:grid max-[991px]:grid-cols-2 max-[991px]:gap-x-[30px] max-[991px]:gap-y-[50px] max-[767px]:grid-cols-3 max-[767px]:gap-x-[20px] max-[479px]:grid-cols-2">
          <div className="flex max-w-[262.59px] flex-1 flex-col gap-[23px] max-[767px]:col-span-2 max-[767px]:max-w-none">
            <Link to="/" aria-label="Elearna home" className="w-fit">
              <img
                src={elearnaLogo}
                width="105"
                height="26"
                alt="Elearna"
                className="inline-block h-[26px] w-[105px] max-[479px]:h-[22px] max-[479px]:w-[90px]"
              />
            </Link>

            <p className="text-[17px] leading-[29px] tracking-[0.5px] text-body max-[767px]:text-[14px] max-[767px]:leading-[23px]">
              Lorem ipsum dolor sit amet consectetur. Posuere vitae lacus quis
              eget amet ut tristique cras.
            </p>
          </div>

          {footerColumns.map((column) => (
            <div
              key={column.title}
              className="flex flex-col gap-[27px]"
            >
              <div className="font-heading text-[20px] leading-[25px] font-semibold tracking-[-0.5px] text-white max-[767px]:text-[17px] max-[767px]:leading-[23px]">
                {column.title}
              </div>

              <div className="flex flex-col gap-[12px]">
                {column.links.map((link) => (
                  <Link
                    key={`${column.title}-${link.label}`}
                    to={link.to}
                    className={footerLinkClass}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={slideInBottom(0.2)}
        className="mx-auto w-full max-w-[1750px] px-[15px]"
      >
        <div className="h-px w-full bg-body" />

        <div className="mx-auto flex max-w-[1290px] flex-row items-center justify-between py-[16px] max-[479px]:flex-col max-[479px]:items-center max-[479px]:gap-[5px]">
          <div className="text-[15px] leading-[29px] tracking-[0.5px] text-body uppercase max-[767px]:text-[12px] max-[767px]:leading-[23px]">
            Design by{' '}
            <a
              href="http://radianttemplates.com/"
              target="_blank"
              rel="noreferrer"
              className="text-white transition-colors duration-300 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              Radiant Templates
            </a>
          </div>

          <div className="text-[15px] leading-[29px] tracking-[0.5px] text-body uppercase max-[767px]:text-[12px] max-[767px]:leading-[23px]">
            Powered by{' '}
            <a
              href="https://webflow.com/?r=0"
              target="_blank"
              rel="noreferrer"
              className="text-white transition-colors duration-300 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
            >
              Webflow
            </a>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}
