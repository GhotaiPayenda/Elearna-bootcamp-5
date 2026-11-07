import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import arrowBlack from '../assets/arrow-black.png'
import cartIcon from '../assets/cart.svg'
import coinsIcon from '../assets/coins.svg'
import logo from '../assets/elearna-logo.svg'
import { courseMega, desktopNav, mobileCourses } from '../data/navigation'

const dropdownTransition = { duration: 0.3, ease: 'ease' }

function CartLink() {
  return (
    <div className="relative inline-block">
      <Link
        to="/cart"
        aria-label="Open cart"
        className="relative block cursor-pointer"
      >
        <img
          src={cartIcon}
          width={18}
          height={23}
          alt=""
          className="relative z-[1] h-auto w-[18px] max-[767px]:w-[16px]"
        />
        <span className="absolute top-0 right-[-13.86px] z-[5] h-[21px] w-[20px] rounded-full bg-brand text-center text-[12px] leading-[22px] font-normal text-ink max-[767px]:right-[-58%] max-[767px]:flex max-[767px]:h-[14px] max-[767px]:w-[14px] max-[767px]:items-center max-[767px]:justify-center max-[767px]:text-[8px] max-[767px]:leading-[14px]">
          0
        </span>
      </Link>
    </div>
  )
}

function AccountLinks({ compact = false }) {
  return (
    <div className="flex items-center justify-between gap-[10px]">
      <Link
        to="/login"
        className={`text-white ${
          compact
            ? 'text-[16px] max-[767px]:text-[14px]'
            : 'text-[16px]'
        }`}
      >
        Login
      </Link>
      <span className="h-[20px] w-px shrink-0 bg-white" aria-hidden="true" />
      <Link
        to="/sign-up"
        className={`text-white ${
          compact
            ? 'text-[16px] max-[767px]:text-[14px]'
            : 'text-[16px]'
        }`}
      >
        Register
      </Link>
    </div>
  )
}

function SimpleDropdown({ item, variant, onNavigate }) {
  const [open, setOpen] = useState(false)
  const isBar = variant === 'bar'

  return (
    <div
      className={isBar ? 'relative' : 'relative block w-full'}
      onMouseEnter={isBar ? () => setOpen(true) : undefined}
      onMouseLeave={isBar ? () => setOpen(false) : undefined}
    >
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="true"
        aria-expanded={open}
        className={
          isBar
            ? 'flex h-[68px] cursor-pointer items-center justify-center gap-[5px] px-[20px] pt-[18px] pb-[21px] text-[16px] leading-[29px] text-white'
            : 'flex h-[53px] w-full cursor-pointer items-center justify-between px-[15px] text-left text-[16px] leading-[23px] text-ink'
        }
      >
        <span>{item.label}</span>
        <ChevronDown
          size={14}
          strokeWidth={2.6}
          aria-hidden="true"
          className="mt-[2px] shrink-0"
        />
      </button>

      {open && (
        <motion.nav
          initial={{ y: 7 }}
          animate={{ y: 0 }}
          transition={dropdownTransition}
          className={
            isBar
              ? 'absolute top-full left-0 z-[1000] w-max rounded-[4px] border border-light-gray border-b-[4px] border-b-brand bg-white py-[5px]'
              : 'static w-full border border-light-gray border-b-brand bg-white py-[5px]'
          }
        >
          {item.links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={onNavigate}
              className="block px-[40px] py-[6px] text-[14px] leading-[22px] whitespace-nowrap text-ink [transition:transform_0.35s,color_0.2s] hover:translate-x-[4px] hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </motion.nav>
      )}
    </div>
  )
}

function MegaCourseColumns({ columns }) {
  return (
    <div className="mb-[70px] grid grid-cols-2 gap-x-[30px] gap-y-[45px]">
      {columns.map((column) => (
        <div
          key={column.heading}
          className="flex max-w-[208px] flex-col gap-[12px]"
        >
          <div className="text-[13px] leading-[12px] font-medium tracking-[0.5px] text-ink uppercase">
            {column.heading}
          </div>
          {column.links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-[13px] leading-[20px] text-body transition-colors duration-200 hover:text-brand"
            >
              {link.label}
            </Link>
          ))}
        </div>
      ))}
    </div>
  )
}

function MegaDropdown({ item }) {
  const [open, setOpen] = useState(false)
  const [tab, setTab] = useState('free')

  return (
    <div
      className="static"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="true"
        aria-expanded={open}
        className="flex h-[68px] cursor-pointer items-center justify-center gap-[5px] px-[20px] pt-[18px] pb-[21px] text-[16px] leading-[29px] text-white"
      >
        <span>{item.label}</span>
        <ChevronDown
          size={14}
          strokeWidth={2.6}
          aria-hidden="true"
          className="mt-[2px] shrink-0"
        />
      </button>

      {open && (
        <motion.nav
          initial={{ y: 7 }}
          animate={{ y: 0 }}
          transition={dropdownTransition}
          className="absolute inset-x-0 top-[65px] z-[1000] px-[15px]"
        >
          <div className="mx-auto flex max-w-[850px] items-stretch rounded-[4px] border border-light-gray border-b-[4px] border-b-brand bg-white">
            <div className="w-[220px] max-w-[220px] shrink-0 bg-light-blue px-[15px] py-[14px]">
              {['free', 'paid'].map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setTab(key)}
                  className={`flex w-full cursor-pointer flex-col items-start gap-[7px] rounded-[4px] px-[15px] pt-[15px] pb-[18px] text-left transition-colors duration-500 ${
                    tab === key ? 'bg-white' : 'bg-transparent'
                  }`}
                >
                  <span className="text-[14px] leading-[20px] text-ink">
                    {key === 'free' ? 'Free courses' : 'Paid courses'}
                  </span>
                  <span className="text-[13px] leading-[20px] text-body">
                    {key === 'free'
                      ? 'Free learning resources for skill development.'
                      : 'Courses are available upon purchase.(Requires login)'}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex-1 px-[50px] py-[30px]">
              <MegaCourseColumns columns={courseMega[tab]} />

              <div className="flex items-center gap-[30px] rounded-[4px] bg-light-blue px-[25px] py-[16px]">
                <img
                  src={coinsIcon}
                  width={47}
                  height={47}
                  alt=""
                  className="h-[47px] w-[47px] shrink-0"
                />
                <div className="flex max-w-[289px] flex-1 flex-col gap-[8px]">
                  <div className="text-[14px] leading-[20px] text-ink">
                    Increase your potential earnings
                  </div>
                  <p className="text-[13px] leading-[20px] text-body">
                    Lorem ipsum dolor sit amet scelerisque integer adipiscing
                    velit sem sed.
                  </p>
                </div>
                <Link
                  to="/career"
                  aria-label="Explore career courses"
                  className="ml-auto flex h-[30px] w-[36px] shrink-0 items-center justify-center rounded-[4px] bg-brand"
                >
                  <img
                    src={arrowBlack}
                    alt=""
                    className="h-auto w-[13px]"
                  />
                </Link>
              </div>
            </div>
          </div>
        </motion.nav>
      )}
    </div>
  )
}

function BarNav() {
  return (
    <nav
      aria-label="Primary"
      className="flex h-[68px] items-center justify-center"
    >
      {desktopNav.map((item) =>
        item.mega ? (
          <MegaDropdown key={item.label} item={item} />
        ) : (
          <SimpleDropdown key={item.label} item={item} variant="bar" />
        ),
      )}
    </nav>
  )
}

function MobileMenu({ onNavigate }) {
  const [openItem, setOpenItem] = useState(null)
  const [openSub, setOpenSub] = useState(null)

  return (
    <div className="w-full">
      {desktopNav.map((item) => {
        if (!item.mega) {
          return (
            <SimpleDropdown
              key={item.label}
              item={item}
              variant="mobile"
              onNavigate={onNavigate}
            />
          )
        }

        const isOpen = openItem === item.label

        return (
          <div key={item.label} className="block w-full">
            <button
              type="button"
              onClick={() => {
                setOpenItem(isOpen ? null : item.label)
                setOpenSub(null)
              }}
              aria-expanded={isOpen}
              aria-haspopup="true"
              className="flex h-[53px] w-full cursor-pointer items-center justify-between px-[15px] text-left text-[16px] leading-[23px] text-ink"
            >
              <span>{item.label}</span>
              <ChevronDown
                size={14}
                strokeWidth={2.6}
                aria-hidden="true"
                className="mt-[2px] shrink-0"
              />
            </button>

            {isOpen && (
              <motion.nav
                initial={{ y: 7 }}
                animate={{ y: 0 }}
                transition={dropdownTransition}
                className="static w-full border border-light-gray border-b-brand bg-white py-[5px]"
              >
                {mobileCourses.map((group) => {
                  const subOpen = openSub === group.label

                  return (
                    <div key={group.label} className="relative block">
                      <button
                        type="button"
                        onClick={() => setOpenSub(subOpen ? null : group.label)}
                        aria-expanded={subOpen}
                        aria-haspopup="true"
                        className="flex w-full cursor-pointer items-center justify-between gap-[40px] px-[10px] py-[6px] pl-[30px] text-left text-[14px] leading-[24px] text-ink max-[767px]:pl-[30px]"
                      >
                        <span>{group.label}</span>
                        <ChevronDown
                          size={12}
                          strokeWidth={2.6}
                          aria-hidden="true"
                          className="ml-auto shrink-0 -rotate-90"
                        />
                      </button>

                      {subOpen && (
                        <motion.nav
                          initial={{ y: 7 }}
                          animate={{ y: 0 }}
                          transition={dropdownTransition}
                          className="static w-full border border-light-blue bg-white py-[5px]"
                        >
                          {group.links.map((link) => (
                            <Link
                              key={link.to}
                              to={link.to}
                              onClick={onNavigate}
                              className="block px-[40px] py-[6px] text-[14px] leading-[22px] whitespace-nowrap text-ink [transition:transform_0.35s,color_0.2s] hover:translate-x-[4px] hover:text-brand"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </motion.nav>
                      )}
                    </div>
                  )
                })}
              </motion.nav>
            )}
          </div>
        )
      })}
    </div>
  )
}

function CompactNavbar({ scrolled }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 992) setMobileOpen(false)
    }

    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.165, 0.84, 0.44, 1], delay: 0.1 }}
        style={{ backgroundColor: scrolled ? '#0f252a' : 'transparent' }}
        className="fixed inset-x-0 top-0 z-[999] transition-colors duration-500 min-[1280px]:hidden"
      >
        <div className="mx-auto max-w-[1750px] px-[15px]">
          <div className="flex items-center gap-[30px] max-[991px]:py-[10px] max-[479px]:gap-[15px] min-[992px]:grid min-[992px]:grid-cols-[185px_1fr_185px] min-[992px]:gap-0">
            <Link to="/" className="block w-fit shrink-0" aria-label="Elearna">
              <img
                src={logo}
                width={105}
                height={26}
                alt="Elearna"
                className="block h-auto w-[105px] max-[479px]:w-[90px]"
              />
            </Link>

            <div className="hidden min-[992px]:flex">
              <BarNav />
            </div>

            <div className="ml-auto flex items-center justify-between gap-[25px] max-[767px]:gap-[15px] min-[992px]:ml-0">
              <CartLink />
              <div className="max-[479px]:hidden">
                <AccountLinks compact />
              </div>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen((value) => !value)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              className="min-[992px]:hidden flex h-[49px] cursor-pointer flex-col items-end justify-center py-[20px] pl-0 max-[479px]:pl-[15px]"
            >
              <span className="flex flex-col items-end gap-[7px]">
                <motion.span
                  animate={
                    mobileOpen
                      ? { y: 4, rotate: -45 }
                      : { y: 0, rotate: 0 }
                  }
                  transition={{ duration: 0.5, ease: 'ease' }}
                  className="block h-px w-[25px] bg-light-blue"
                />
                <motion.span
                  animate={
                    mobileOpen
                      ? { y: -4, rotate: 45 }
                      : { y: 0, rotate: 0 }
                  }
                  transition={{ duration: 0.5, ease: 'ease' }}
                  className="block h-px w-[25px] bg-light-blue"
                />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-x-0 top-[69px] bottom-0 z-[998] overflow-hidden min-[992px]:hidden"
          >
            <motion.div
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ duration: 0.4, ease: 'ease' }}
              className="h-full w-full overflow-y-auto overscroll-contain bg-white"
            >
              <MobileMenu onNavigate={() => setMobileOpen(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function DesktopNavbar({ scrolled }) {
  return (
    <header
      style={{ backgroundColor: scrolled ? '#0f252a' : 'transparent' }}
      className="fixed inset-x-0 top-0 z-[9999] hidden transition-colors duration-500 min-[1280px]:block"
    >
      <div className="mx-auto max-w-[1750px] px-[15px]">
        <div className="grid h-[68px] grid-cols-[200px_1fr_200px] items-center">
          <Link to="/" className="block w-fit" aria-label="Elearna">
            <img
              src={logo}
              width={105}
              height={26}
              alt="Elearna"
              className="block h-[26px] w-[105px]"
            />
          </Link>

          <BarNav />

          <div className="flex items-center justify-between">
            <CartLink />
            <AccountLinks />
          </div>
        </div>
      </div>
    </header>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0
      setScrolled(progress >= 0.05)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <>
      <DesktopNavbar key={`desktop-${pathname}`} scrolled={scrolled} />
      <CompactNavbar key={`compact-${pathname}`} scrolled={scrolled} />
    </>
  )
}
