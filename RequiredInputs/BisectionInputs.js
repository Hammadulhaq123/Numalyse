"use client"
import { useState } from "react"
import calculateBisectionMethod from "../VanillaFunctions/BisectionFunction"

const BisectionInputs = () => {

    const [func, setFunc] = useState("");
    const [lower, setLower] = useState("");
    const [upper, setUpper] = useState("");
    const [tolerance, setTolerance] = useState("");


    const handleFuncChange = (e) => {
        setFunc(e.target.value);
    }

    const handleLowerChange = (e) => {
        setLower(e.target.value)
    }

    const handleUpperChange = (e) => {
        setUpper(e.target.value)
    }

    const handleToleranceChange = (e) => {
        setTolerance(e.target.value)
    }


    return (
        <div className="w-full h-auto rounded-[16px] p-8 flex gap-4 flex-col items-start justify-start bg-gray-200">
            <span className="text-3xl font-bold text-[#04aa6d]">
                Input the Values!
            </span>
            <span style={{ color: "red" }} className="text-[#ff3838] text-sm">
                <strong>Note:</strong> Use ** for exponential (i.e. 2**3 for 2 raise to power 3)!!!
            </span>
            <div className="function w-full h-auto">
                <input type="text" style={{ outline: "none" }} placeholder="Algebric Function (One variable))" className="w-full h-12 rounded-full   border-4 border-[#04aa6d] border-dashed px-4 text-[#04aa6d]  focus:border-solid" value={func} onChange={handleFuncChange} />
            </div>
            <div className="flex w-full h-auto gap-2 flex-wrap lg:flex-nowrap">
                <input type="text" style={{ outline: "none" }} placeholder="Lower Value (x0)" className="w-full lg:w-[33%] h-12 rounded-full   border-4 border-[#04aa6d] border-dashed px-4 text-[#04aa6d]  focus:border-solid" value={lower} onChange={handleLowerChange} />
                <input type="text" style={{ outline: "none" }} placeholder="Upper Value (x1)" className="w-full lg:w-[33%] h-12 rounded-full   border-4 border-[#04aa6d] border-dashed px-4 text-[#04aa6d]  focus:border-solid" value={upper} onChange={handleUpperChange} />
                <input type="text" style={{ outline: "none" }} placeholder="Tolerance" className="w-full lg:w-[33%] h-12 rounded-full   border-4 border-[#04aa6d] border-dashed px-4 text-[#04aa6d]  focus:border-solid" value={tolerance} onChange={handleToleranceChange} />
            </div>
            <button onClick={() => calculateBisectionMethod(func, lower, upper, tolerance)} className="w-auto h-12 text-sm text-white font-bold p-4 flex justify-center items-center bg-[#04aa6d] rounded-full">
                Calculate
            </button>
        </div>
    )
}

export default BisectionInputs
