import Link from "next/link"
import { BsArrowUpRight } from "react-icons/bs"
import { Cedarville_Cursive } from "next/font/google"
const supreme = Cedarville_Cursive({
    weight: '400',
    subsets: ['latin']
})
const Newton = () => {
    return (
        <div className="w-full h-[25rem]] bg-[#2e2e2d] lg:w-[40.5%] lg:h-full rounded-[20px] flex flex-col justify-center gap-4 items-center">
            <h1 className={` w-[90%] text-[#04aa6d] text-center text-5xl font-extrabold `}>
                Newton Method
            </h1>
            <p className="w-8/12 text-center text-gray-300 text-lg font-normal">
                Solve Newton Method, quickest way to find root of a function is to use <span className={`${supreme.className} text-[#04aa6d]`}>Numalyse.</span>
            </p>
            <Link href="/solve/bisection-method" className="w-auto bg-[#04aa6d] text-[#fff] text-sm font-bold rounded-full h-12 py-2 px-4 flex items-center gap-2 justify-between">
                Try it out!
                <span className='w-8 h-8 bg-[#fff] rounded-full flex justify-center items-center'>
                    <BsArrowUpRight className='text-[#04aa6d]' />
                </span>
            </Link>
        </div>
    )
}

export default Newton
