import React from 'react'
import { methods } from '../../data/list'
import { Inconsolata } from "next/font/google"
import Navbar from '../../components/Navbar'
import GreenBox from './components/GreenBox'
import GreenBorder from './components/GreenBorder'
import GrayBox from './components/GrayBox'
import GrayBorder from './components/GrayBorder'


const supreme = Inconsolata({
    weight: '800',
    subsets: ['latin']
})

const page = () => {
    return (
        <div className='p-4 h-screen overflow-x-hidden overflow-y-auto bg-white'>
            <Navbar />

            {
                methods?.map((method, key) => {
                    return (
                        <>
                            <div className='w-full h-auto flex p-4 items-center justify-start'>

                                <h1 key={key} className={` ${supreme.className} text-3xl font-bold text-[#04aa6c]`}>
                                    {method?.methodCategory}
                                </h1>
                            </div>

                            <div className='flex w-full h-auto rounded-[20px] bg-gray-100 justify-start flex-wrap gap-1 p-2'>
                                {

                                    method?.methodList?.map((item, key) => (
                                        // Checking Items style and rendering the component of the given style
                                        (item?.style == "greenBorderBox") ?

                                            <GreenBorder key={key} className='text-green-500' name={item?.methodName} link={item?.methodLink} />

                                            : (item?.style == "greenBackgroundBox") ?
                                                <GreenBox key={key} name={item?.methodName} link={item?.methodLink} />

                                                : (item?.style == "grayBackgroundBox") ?
                                                    <GrayBox key={key} name={item?.methodName} link={item?.methodLink} />

                                                    : (item?.style == "grayBorderBox") &&
                                                    <GrayBorder key={key} name={item?.methodName} link={item?.methodLink} />



                                    ))
                                }
                            </div>
                        </>

                    )

                })
            }
        </div>
    )
}

export default page
