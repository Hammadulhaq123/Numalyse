import Link from "next/link"
import { Cedarville_Cursive } from "next/font/google"
const supreme = Cedarville_Cursive({
    weight: '400',
    subsets: ['latin']
})
const Sidebar = () => {
    return (
        <div className='fixed top-0 -translate-x-60 left-0 w-60 p-4 h-screen flex flex-col justify-start items-center gap-2 border-r-4 border-[#04aa6d] border-dashed bg-gray-100 rounded-r-xl z-50'>
            <Link href="/" className={`${supreme.className} text-[#04aa6d] text-xl font-bold`}>
                Numalyse
            </Link>
            <Link href="/solve/bisection-method" className="w-full px-2 rounded-lg h-10 lg:h-12 flex justify-start gap-1 items-center bg-[#04aa6d] text-white text-md font-semibold transition-all duration-150 hover:opacity-90">Bisection Method</Link>
        </div>
    )
}

export default Sidebar
