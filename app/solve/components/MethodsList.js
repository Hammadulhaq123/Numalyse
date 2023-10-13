"use client"

import { useState } from 'react'
import { methodsList } from '../../data/list'
import { Inconsolata } from "next/font/google"
import { FiSearch } from "react-icons/fi"
import Navbar from '../../components/Navbar'
import GreenBox from './components/GreenBox'
import GreenBorder from './components/GreenBorder'
import GrayBox from './components/GrayBox'
import GrayBorder from './components/GrayBorder'



const supreme = Inconsolata({
    weight: '800',
    subsets: ['latin']
})

const MethodsList = () => {
    const [methods, setMethods] = useState(methodsList)
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setMethods(methods.filter((value) => {
            return (value)
        }))
        console.log(methods);
    }
    return (
        <div className='p-4 h-screen overflow-x-hidden overflow-y-auto bg-white'>
            <Navbar />
            <form onSubmit={(e) => handleSubmit(e)} className='w-full h-auto flex gap-2'>

                <input type='text' placeholder='Search Category or Method' className='bg-white outline-none border-4 border-[#04aa6c] px-4 text-[#04aa6c] font-semibold text-lg w-11/12 h-12 rounded-full' value={value} onChange={(e) => setValue(e.target.value)} name='search' />
                <button type='submit' className='w-1/12 h-12 rounded-full bg-[#04aa6c] text-white  flex justify-center items-center'>
                    <FiSearch className='font-bold text-xl' />
                </button>
            </form>

            {
                methods?.map((method, key) => {
                    return (
                        <div key={key}>
                            <div className='w-full h-auto flex p-4 items-center justify-start'>

                                <h1 className={` ${supreme.className} text-3xl font-bold text-[#04aa6c]`}>
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
                        </div>

                    )

                })
            }
        </div>
    )
}

export default MethodsList
