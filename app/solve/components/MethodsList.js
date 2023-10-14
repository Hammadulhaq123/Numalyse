"use client"

import { useState, useDeferredValue, useEffect } from 'react'
import { methodsList } from '../../../data/list'
import { Inconsolata } from "next/font/google"
import { FiSearch } from "react-icons/fi"
import Navbar from '../../../components/Navbar'
import GreenBox from './GreenBox'
import GreenBorder from './GreenBorder'
import GrayBox from './GrayBox'
import GrayBorder from './GrayBorder'
import Loader from '../../../components/Loader'



const supreme = Inconsolata({
    weight: '800',
    subsets: ['latin']
})

const MethodsList = () => {
    const [methods, setMethods] = useState(methodsList);
    const [filtered, setFiltered] = useState(methods);
    const [loading, setLoading] = useState(false);
    const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

    const handleClick = (id) => {
        const elem = document.getElementById(id);
        elem && elem.scrollIntoView({
            behavior: "smooth"
        })
    }

    const [value, setValue] = useState("");
    const searchValue = useDeferredValue(value);

    const handleChange = (e) => {
        setValue(e.target.value);
        setLoading(true);
        if (searchValue == "") {
            // setLoading(false)
            setFiltered(methods)
        }
        setTimeout(() => {
            setFiltered(methods.filter((method) => {
                if (method.methodCategory.toLowerCase().includes(searchValue.toLowerCase())) {
                    setLoading(false);
                    return (method.methodCategory.toLowerCase().includes(searchValue.toLowerCase()))
                }
                else {
                    setLoading(false);
                    return (null)
                }
            }))
        }, 500)
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchValue == "") { setFiltered(methods) };
        setFiltered(methods.filter((method) => {
            if (method.methodCategory.toLowerCase().includes(searchValue.toLowerCase())) {
                setLoading(false);
                return (method.methodCategory.toLowerCase().includes(searchValue.toLowerCase()))
            }
            else {
                setLoading(false);
                return (null)
            }
        }))

    }


    return (
        <div className='p-4 h-screen overflow-x-hidden overflow-y-auto bg-white'>
            <Navbar />
            <form onSubmit={(e) => handleSubmit(e)} className='w-full h-auto flex gap-2'>

                <input type='text' placeholder='Search Category' className='bg-white outline-none border-4 border-[#04aa6c] px-4 text-[#04aa6c] font-semibold text-lg w-11/12 h-12 rounded-full' value={searchValue} onChange={(e) => handleChange(e)} name='search' autoComplete='off' />
                <button type='submit' className='w-1/12 h-12 rounded-full bg-[#04aa6c] text-white  flex justify-center items-center'>
                    <FiSearch className='font-bold text-xl' />
                </button>
            </form>

            <div id='list' className='w-full h-auto flex gap-1'>
                <div className='w-[96%] h-auto'>
                    {
                        loading ? <Loader /> :
                            filtered
                                ?.sort(function (a, b) {
                                    var catA = a.methodCategory.toUpperCase(); // ignore upper and lowercase
                                    var catB = b.methodCategory.toUpperCase(); // ignore upper and lowercase
                                    if (catA < catB) {
                                        return -1;
                                    }
                                    if (catA > catB) {
                                        return 1;
                                    }
                                    // cateogry must be equal
                                    return 0;
                                })
                                ?.map((method, key) => {
                                    return (
                                        <div key={key}>

                                            <div id={method.id} className='w-full h-auto flex p-4 items-center justify-start'>

                                                <h1 className={` ${supreme.className} text-3xl font-bold text-[#04aa6c]`}>
                                                    {method?.methodCategory}
                                                </h1>
                                            </div>
                                            {
                                                <div className='flex w-full h-auto rounded-[20px] bg-gray-100 justify-start flex-wrap gap-1 p-2'>
                                                    {
                                                        method
                                                            ?.methodList
                                                            ?.sort(function (a, b) {
                                                                var nameA = a.methodName.toUpperCase(); // ignore upper and lowercase
                                                                var nameB = b.methodName.toUpperCase(); // ignore upper and lowercase
                                                                if (nameA < nameB) {
                                                                    return -1;
                                                                }
                                                                if (nameA > nameB) {
                                                                    return 1;
                                                                }
                                                                // names must be equal
                                                                return 0;
                                                            })
                                                            // ?.filter((item) => {
                                                            //     return (
                                                            //         searchValue == "" ? item : item.methodName.toLowerCase().includes(searchValue.toLowerCase())
                                                            //     )
                                                            // })
                                                            ?.map((item, key) => (
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
                                            }

                                        </div>
                                    )

                                })

                    }
                    {
                        (filtered.length == 0) && <h1 className='text-5xl my-2 text-[#2e2e2e] mx-4 font-bold'>Oops! Nothing here..</h1>
                    }
                </div>
                <div className='flex flex-col items-center  justify-start w-[4%] h-auto text-sm font-bold  text-[#2e2e2e] gap-[8px] py-12'>
                    {
                        alphabets.map((item, key) => (
                            <button key={key} className='outline-none border-none' onClick={() => handleClick(item)}>
                                {item}
                            </button>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default MethodsList
