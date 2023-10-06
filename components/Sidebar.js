"use client"
import Link from "next/link"
import { Cedarville_Cursive } from "next/font/google"
import { IoClose } from "react-icons/io5";
import { BiMath } from "react-icons/bi"
const supreme = Cedarville_Cursive({
    weight: '400',
    subsets: ['latin']
})

const sidebarClose = () => {
    const sidebar = document.getElementById("sidebar-main");
    sidebar.classList.toggle("-translate-x-60");
    sidebar.classList.toggle("translate-x-0");
}
const Sidebar = () => {
    return (
        <div id="sidebar-main" className='fixed top-0 transition-all duration-200 -translate-x-60 left-0 w-60 p-4 h-screen flex flex-col justify-start items-center gap-2 border-r-4 border-[#04aa6d] bg-gray-100 rounded-r-xl z-50'>
            <button onClick={sidebarClose} className="absolute top-2 right-2 flex items-center justify-center text-white w-8 h-8 bg-[#04aa6d] rounded-lg">
                <IoClose />
            </button>
            <Link href="/" className={`${supreme.className} text-[#04aa6d] text-xl font-bold`}>
                Numalyse
            </Link>
            <Link href="/solve/bisection-method" className="group w-full px-2 rounded-lg h-10 lg:h-12 flex justify-start gap-2 transition-all duration-150 items-center bg-gray-200 hover:bg-[#04aa6d] text-[#04aa6d] hover:text-gray-100 text-md font-semibold hover:opacity-90">
                <span className="w-8 h-8 rounded-md  bg-[#04aa6d] group-hover:bg-gray-100 flex items-center justify-center text-white group-hover:text-[#04aa6d] text-lg">
                    <BiMath />
                </span>
                Bisection Method</Link>
        </div>
    )
}

export default Sidebar
