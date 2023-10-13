"use client"
import Link from "next/link"
import { Cedarville_Cursive } from "next/font/google"
import { IoClose } from "react-icons/io5";
import SidebarLinks from "./SidebarLinks";
const supreme = Cedarville_Cursive({
    weight: '400',
    subsets: ['latin']
})

const sidebarClose = () => {
    const sidebar = document.getElementById("sidebar-main");
    sidebar.classList.toggle("-translate-x-60");
    sidebar.classList.toggle("translate-x-0");
}

const links = [
    {
        link: "/solve/method/bisection-method",
        text: "Bisection Method",
    },
    {
        link: "/solve/method/newton-method",
        text: "Newton Method",
    },
]
const Sidebar = () => {
    return (
        <div id="sidebar-main" className='fixed top-0 overflow-y-auto transition-all duration-200 -translate-x-60 left-0 w-60 p-4 h-screen flex flex-col justify-start items-center gap-2 shadow-sm shadow-[#2e2e2e] bg-white rounded-r-xl z-50'>
            <button onClick={sidebarClose} className="absolute top-2 right-2 flex items-center justify-center text-white w-8 h-8 bg-[#04aa6d] rounded-lg">
                <IoClose />
            </button>
            <Link href="/" className={`${supreme.className} text-[#04aa6d] text-xl font-bold`}>
                Numalyse
            </Link>
            {
                links.map((link, key) => (
                    <SidebarLinks key={key} link={link.link} text={link.text} />

                ))
            }
        </div>
    )
}

export default Sidebar
