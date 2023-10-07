
import { Cedarville_Cursive } from "next/font/google"
import Link from "next/link"
import { BsArrowUpRight } from "react-icons/bs"
const supreme = Cedarville_Cursive({
    weight: '400',
    subsets: ['latin']
})
const Bisection = () => {
    return (
        <div className="w-full h-[25rem]] bg-gray-100 border-4 border-[#2e2e2d] border-dashed lg:w-[40%] lg:h-full rounded-[20px] flex flex-col gap-6 justify-center items-center p-4">
            <h1 className={` w-[90%] text-[#04aa6d] text-center text-5xl font-extrabold `}>
                Bisection Method
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
    )
}

export default Bisection
