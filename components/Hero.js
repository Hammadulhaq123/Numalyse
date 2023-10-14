import Button from "./Button"
import Navbar from "./Navbar"

import { Source_Sans_3 } from 'next/font/google'

const supreme = Source_Sans_3({
    weight: '400',
    subsets: ['latin']
})



const Hero = () => {
    return (
        <div className="w-full h-[25rem]]  shadow-inner bg-white lg:w-[60%] lg:h-full rounded-[20px] flex flex-col justify-start items-center p-4">
            <Navbar />

            <div className="flex flex-col gap-6 justify-center items-center mt-auto w-[99%] h-[24rem]">

                <h1 className={` w-[80%] text-[#04aa6d] text-center text-5xl font-extrabold `}>
                    Numalyse your Data!
                </h1>
                <p className="w-8/12 text-center text-lg font-normal">
                    This website is going to solve the do the numerical analysis problems for you...
                </p>

                <Button />
            </div>
        </div>
    )
}

export default Hero
