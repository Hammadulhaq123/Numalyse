import Hero from "@/components/Hero";
import Bisection from "@/components/Bisection";
import Newton from "../components/Newton";
import { Cedarville_Cursive } from "next/font/google"
import Link from "next/link"
import { BsArrowUpRight } from "react-icons/bs"
const supreme = Cedarville_Cursive({
  weight: '400',
  subsets: ['latin']
})
export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen gap-4 p-4 items-start justify-start">
      <div className="flex gap-4 w-full h-auto lg:h-[59%] flex-wrap lg:flex-nowrap">
        <Hero />
        <Bisection />
      </div>

      <div className="flex gap-4 w-full h-auto lg:h-[39%] flex-wrap lg:flex-nowrap">
        <div className="w-full h-[19rem] bg-[#04aa6d] lg:w-[29%] lg:h-full rounded-[20px] flex flex-col justify-center gap-2 items-center p-4">
          <h1 className={` w-[90%] text-[#fff] text-center text-5xl font-extrabold `}>
            Secant Method
          </h1>
          <p className="w-8/12 text-center text-gray-200 text-lg font-normal">
            Solve the Secant Method efficiently using <span className={`${supreme.className} text-[#2e2e2d]`}>Numalyse.</span>
          </p>
          <Link href="/solve/secant-method" className="w-auto bg-gray-100 text-[#04aa6d] text-sm font-bold rounded-full h-12 py-2 px-4 flex items-center gap-2 justify-between">
            Calculate
            <span className='w-8 h-8 bg-[#04aa6d] rounded-full flex justify-center items-center'>
              <BsArrowUpRight className='text-white' />
            </span>


          </Link>
        </div>
        <div className="w-full h-[19rem] bg-gray-100 border-4 border-[#04aa6d] border-dashed lg:w-[30.5%] lg:h-full rounded-[20px] flex flex-col justify-center gap-4 items-center p-4">
          <h1 className={` w-[90%] text-[#1c1c1c] text-center text-5xl font-extrabold `}>
            Another Method
          </h1>
          <p className="w-8/12 text-center text-lg font-normal">
            Solve the Bisction Method efficiently using <span className={supreme.className}>Numalyse.</span>
          </p>
          <Link href="/solve/bisection-method" className="w-auto bg-[#2e2d2d] text-[#04aa6d] text-sm font-bold rounded-full h-12 py-2 px-4 flex items-center gap-2 justify-between">
            Calculate
            <span className='w-8 h-8 bg-[#04aa6d] rounded-full flex justify-center items-center'>
              <BsArrowUpRight className='text-white' />
            </span>


          </Link>
        </div>
        <Newton />
      </div>

    </div>
  )
}