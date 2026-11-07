import { ArrowLeft } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'

import Navbar from '../components/Navbar'

const pageName = (pathname) => {
  const segment = pathname.split('/').filter(Boolean).pop() ?? 'page'

  return segment
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export default function Placeholder() {
  const { pathname } = useLocation()

  return (
    <>
      <Navbar />
      <main className="flex min-h-screen items-center justify-center bg-ink px-[15px] pt-[100px] pb-[60px]">
        <div className="flex max-w-[620px] flex-col items-center text-center">
          <div className="text-[15px] leading-[29px] font-medium tracking-[0.5px] text-light-blue uppercase max-[767px]:text-[12px]">
            Coming soon
          </div>
          <h1 className="mt-[15px] mb-[20px] text-[60px] leading-[60px] tracking-[-2.3px] text-white max-[991px]:text-[45px] max-[991px]:leading-[45px] max-[991px]:tracking-[-1.5px] max-[767px]:text-[35px] max-[767px]:leading-[35px] max-[767px]:tracking-[-1.3px]">
            {pageName(pathname)}
          </h1>
          <p className="mb-[30px] text-white">
            This page is outside the scope of this build. The navbar and hero
            section are ready to explore.
          </p>
          <Link
            to="/"
            className="flex min-h-[50px] items-center justify-center gap-[8px] rounded-[4px] border border-white/20 bg-ink px-[45px] py-[10px] text-[17px] leading-[20px] tracking-[-0.5px] text-white capitalize max-[767px]:px-[20px] max-[767px]:text-[14px]"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Back to home
          </Link>
        </div>
      </main>
    </>
  )
}
