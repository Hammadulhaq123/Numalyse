"use client"

import { RiArrowUpSLine } from "react-icons/ri";


const closeLogin = () => {
    const login = document.getElementById("login-container");
    login.classList.toggle("xl:-translate-y-[13vh]");
    login.classList.toggle("-translate-y-[40vh]");
    login.classList.toggle("-translate-y-0")

}

const Login = () => {
    return (
        <div id='login-container' className='fixed transition-all rounded-b-[30px] duration-200 -translate-y-[40vh] xl:-translate-y-[13vh] top-0 left-0 h-[37vh] xl:h-[12vh] w-screen bg-gray-50 shadow-sm shadow-[#2e2e2e]'>
            <div className="w-full h-full flex flex-col xl:flex-row items-center gap-4 xl:gap-2 justify-start p-4">
                <input className="w-full xl:w-[30%] h-14 rounded-full  border-4 outline-none focus:outline-none border-[#04aa6d] bg-white border-dashed text-[#04aa6d] px-4 py-2 text-xl" placeholder="Email" />
                <input className="w-full xl:w-[30%] h-14 rounded-full border-4 outline-none focus:outline-none  border-[#04aa6d] bg-white border-dashed text-[#04aa6d] px-4 py-2 text-xl" placeholder="Password" />
                <button className="w-full xl:w-[10%] h-14 rounded-full outline-none focus:outline-none  bg-[#04aa6d] text-white px-4 py-2 text-xl hover:opacity-90">Login</button>
                <span className="w-1 h-14 bg-[#04aa6d] hidden xl:block rounded-full" />
                <button
                    className="px-4 py-2 w-full xl:w-[24%] h-14 flex gap-2 bg-white rounded-full text-xl items-center justify-center hover:opacity-90 text-slate-800">
                    <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                    <span>Login with Google</span>
                </button>
                <button onClick={closeLogin} className="w-full xl:w-10 bg-[#2e2e2e] h-16 xl:absolute bottom-2 right-4  text-[#fff] tex-3xl font-extrabold flex gap-[2px] items-center justify-center rounded-full">
                    <span className="xl:hidden text-xl block">
                        close
                    </span>
                    <RiArrowUpSLine className="text-3xl xl:text-xl" />
                </button>
            </div>
        </div>
    )
}

export default Login
