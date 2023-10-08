"use client"

import { AiOutlineArrowUp } from "react-icons/ai";
import { BiLogoGmail } from "react-icons/bi";

const closeLogin = () => {
    const login = document.getElementById("login-container");
    login.classList.toggle("-translate-y-[13vh]")
    login.classList.toggle("-translate-y-0")

}

const Login = () => {
    return (
        <div id='login-container' className='fixed transition-all rounded-b-[30px] duration-200 -translate-y-[13vh] top-0 left-0 h-[12vh] w-screen bg-gray-200'>
            <div className="w-full h-full flex items-center gap-2 justify-start px-4">
                <input className="w-[30%] h-14 rounded-full  border-4 outline-none focus:outline-none border-[#04aa6d] bg-white border-dashed text-[#04aa6d] px-4 text-xl" placeholder="Email" />
                <input className="w-[30%] h-14 rounded-full border-4 outline-none focus:outline-none  border-[#04aa6d] bg-white border-dashed text-[#04aa6d] px-4 text-xl" placeholder="Password" />
                <button className="w-[10%] h-14 rounded-full outline-none focus:outline-none  bg-[#04aa6d] text-white px-4 text-xl hover:opacity-90">Login</button>
                <span className="w-1 h-14 bg-[#04aa6d] rounded-full" />
                <button
                    className="px-4 py-2 w-[24%] h-14 flex gap-2 bg-white rounded-full text-xl items-center justify-center hover:opacity-90 text-slate-800">
                    <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo" />
                    <span>Login with Google</span>
                </button>
            </div>
            <button onClick={closeLogin} className="w-10 border-4 border-[#04aa6d] border-dashed h-16 absolute bottom-2 right-4 bg-white text-[#04aa6d] tex-3xl font-bold flex items-center justify-center rounded-[20px]">
                <AiOutlineArrowUp />
            </button>
        </div>
    )
}

export default Login
