import Link from "next/link"
import { BsArrowUpRight } from "react-icons/bs"
import { Cedarville_Cursive } from "next/font/google"
const supreme = Cedarville_Cursive({
    weight: '400',
    subsets: ['latin']
})
const Secant = () => {
    return (
        <div className="w-full h-[19rem] bg-[#04aa6d] lg:w-[29%] lg:h-full rounded-[20px] flex flex-col justify-center gap-2 items-center p-4">
            <h1 className={` w-[90%] text-[#fff] text-center text-5xl font-extrabold `}>
                Secant Method
            </h1>
            <p className="w-8/12 text-center text-gray-200 text-lg font-normal">
                Solve the Secant Method efficiently using <span className={`${supreme.className} text-[#2e2e2d]`}>Numalyse.</span>
            </p>
            <Link href="/solve/method/secant-method" className="w-auto bg-gray-100 text-[#04aa6d] text-sm font-bold rounded-full h-12 py-2 px-4 flex items-center gap-2 justify-between">
                Calculate
                <span className='w-8 h-8 bg-[#04aa6d] rounded-full flex justify-center items-center'>
                    <BsArrowUpRight className='text-white' />
                </span>


            </Link>
        </div>
    )
}

export default Secant
