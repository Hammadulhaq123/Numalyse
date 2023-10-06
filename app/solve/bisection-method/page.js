import React from 'react'
import Describer from '../../../components/Describer'
import Navbar from '../../../components/Navbar'
import { BsFacebook, BsInstagram } from "react-icons/bs"
import { AiOutlineLinkedin } from "react-icons/ai"
import BisectionInputs from '../../../RequiredInputs/BisectionInputs'
const page = () => {
    return (
        <div className='flex flex-row gap-4 h-auto w-full p-4'>
            {/* Main Functionalities */}
            <div className='w-full lg:w-[70%] bg-gray-100 p-4 gap-2 rounded-[20px] flex flex-col items-center justify-start'>
                <Navbar />
                <Describer title={"Bisection method"} description={"The bisection method in mathematics is a root-finding method that repeatedly bisects an interval and then selects a subinterval in which a root must lie for further processing. The method is also called the interval halving method. \n This is a calculator that finds a function root using the bisection method, or interval halving method. A brief method description can be found below the calculator."} />
                <BisectionInputs />
            </div>

            {/* SideBar that is going to contain the ads and extras */}
            <div className='w-[30%] h-auto hidden lg:flex flex-col bg-[#04aa6d] items-center justify-start p-4 text-white rounded-[20px]'>
                <div className='flex gap-2 items-center justify-center flex-col text-3xl font-bold text-[#fff]'>
                    Share Analysis!
                    <div className='flex gap-2 text-xl'>
                        <button className='w-8 h-8 bg-white text-[#04aa6d] rounded-full flex items-center justify-center'>
                            <BsFacebook />
                        </button>
                        <button className='w-8 h-8 bg-white text-[#04aa6d] rounded-full flex items-center justify-center'>
                            <BsInstagram />
                        </button>
                        <button className='w-8 h-8 bg-white text-[#04aa6d] rounded-full flex items-center justify-center'>
                            <AiOutlineLinkedin />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
