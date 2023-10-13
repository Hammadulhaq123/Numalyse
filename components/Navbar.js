"use client"
import Link from "next/link"
import { Cedarville_Cursive } from 'next/font/google'
import { HiMenuAlt1 } from 'react-icons/hi'


const supreme = Cedarville_Cursive({
    weight: '400',
    subsets: ['latin']
})

const handleSidebar = () => {
    const sidebar = document.getElementById("sidebar-main");
    sidebar.classList.toggle("-translate-x-60");
    sidebar.classList.toggle("translate-x-0");
}

const openLogin = () => {
    const login = document.getElementById("login-container");
    login.classList.toggle("xl:-translate-y-[13vh]");
    login.classList.toggle("-translate-y-[25vh]");
    login.classList.toggle("-translate-y-0")

}

const Navbar = () => {
    return (
        <div className="w-[99%] text-[#04aa6d] h-16 p-4 rounded-[30px] flex justify-between items-center">
            <button className="cursor-pointer" onClick={handleSidebar}>
                <HiMenuAlt1 className="text-xl " />
            </button>


            <Link href="/" className={`${supreme.className} text-xl font-bold`}>
                Numalyse
            </Link>

            <button onClick={openLogin} className="text-md">
                Login
            </button>
        </div>
    )
}

export default Navbar
