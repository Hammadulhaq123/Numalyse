"use client"
import { useState } from "react"
import DirectInterpData from "../AnalysisDisplays/DirectInterpData";
import { evaluate, derivative } from "mathjs";
import functionPlot from "function-plot";

const NewtonInputs = () => {

    const [x, setX] = useState("");
    const [x1, setX1] = useState("");
    const [y1, setY1] = useState("");
    const [x2, setX2] = useState("");
    const [y2, setY2] = useState("");
    const [root, setRoot] = useState(null);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState(false);



    function linearInterpolate(x, x0, x1, y0, y1) {
        return y0 + (y1 - y0) * ((x - x0) / (x1 - x0));
    }





    // Newton methodology:

    const calculateDIM = (x1, y1, x2, y2, x) => {
        try {
            const parsex = parseFloat(x);
            const parsex1 = parseFloat(x1);
            const parsey1 = parseFloat(y1);
            const parsex2 = parseFloat(x2);
            const parsey2 = parseFloat(y2);
            setRoot(linearInterpolate(parsex, parsex1, parsex2, parsey1, parsey2));
            setLoad(false);
        }
        catch {
            setLoad(false);
            setError(true);
        }
    }

    // Newton methodolgy ends here



    const calcDIM = () => {
        setLoad(true);
        document.getElementById("directinterpdata").classList.remove("hidden");
        error && document.getElementById("toast-danger").classList.remove("hidden");
        calculateDIM(x1, y1, x2, y2, x);
        document.getElementById("scrollToDirectInterp").scrollIntoView({
            behavior: 'smooth'
        });

    }

    const handleXChange = (e) => {
        setX(e.target.value);
    }

    const handleX1Change = (e) => {
        setX1(e.target.value);
    }


    const handleY1Change = (e) => {
        setY1(e.target.value)
    }

    const handleX2Change = (e) => {
        setX2(e.target.value)
    }

    const handleY2Change = (e) => {
        setY2(e.target.value)
    }


    return (
        <>
            <div className="w-full h-auto rounded-[16px] p-8 flex gap-4 flex-col items-start justify-start bg-gray-200">
                <span className="text-3xl font-bold text-[#04aa6d]">
                    Input the Values!
                </span>

                <div className="flex w-full h-auto gap-2 flex-wrap lg:flex-nowrap">
                    <div className="function w-full lg:w-[50%]">
                        <label style={{ padding: "0 10px" }} className="w-48 font-bold text-[#04aa6d] ">X1</label>
                        <input type="text" style={{ outline: "none" }} required placeholder="Value of x1" className="w-full h-12 rounded-full   border-4 border-[#04aa6d] border-dashed px-4 text-[#04aa6d]  focus:border-solid" value={x1} onChange={handleX1Change} />
                    </div>
                    <div className="w-full lg:w-[50%]">
                        <label style={{ padding: "0 10px" }} className="w-48 font-bold text-[#04aa6d] ">Y1</label>
                        <input type="text" style={{ outline: "none" }} required placeholder="Value of y1" className="w-full h-12 rounded-full   border-4 border-[#04aa6d] border-dashed px-4 text-[#04aa6d]  focus:border-solid" value={y1} onChange={handleY1Change} />
                    </div>
                </div>
                <div className="flex w-full h-auto gap-2 flex-wrap lg:flex-nowrap">

                    <div className="w-full lg:w-[50%]">
                        <label style={{ padding: "0 10px" }} className="w-48 font-bold text-[#04aa6d] ">X2</label>
                        <input type="text" style={{ outline: "none" }} placeholder="Value of X2" className="w-full lg:w-[33%] h-12 rounded-full   border-4 border-[#04aa6d] border-dashed px-4 text-[#04aa6d]  focus:border-solid" value={x2} onChange={handleX2Change} />
                    </div>

                    <div className="w-full lg:w-[50%]">
                        <label style={{ padding: "0 10px" }} className="w-48 font-bold text-[#04aa6d] ">Y2</label>
                        <input type="text" style={{ outline: "none" }} placeholder="Value of Y2" className="w-full lg:w-[33%] h-12 rounded-full   border-4 border-[#04aa6d] border-dashed px-4 text-[#04aa6d]  focus:border-solid" value={y2} onChange={handleY2Change} />
                    </div>
                </div>
                <div className="w-full lg:w-[50%]">
                    <label style={{ padding: "0 10px" }} className="w-48 font-bold text-[#04aa6d] ">X-Point</label>
                    <input type="text" style={{ outline: "none" }} placeholder="X Point" className="w-full lg:w-[33%] h-12 rounded-full   border-4 border-[#04aa6d] border-dashed px-4 text-[#04aa6d]  focus:border-solid" value={x} onChange={handleXChange} />
                </div>
                <button onClick={calcDIM} className="w-full lg:w-[50%] outline-none focus:outline-white focus:opacity-90 text-sm text-white font-bold h-12 flex justify-center items-center bg-[#04aa6d] rounded-full">
                    Calculate
                </button>


            </div>

            <div className="mt-4 w-full">
                {

                    <DirectInterpData x={x} root={root} load={load} error={error} />
                }
            </div>
        </>
    )
}

export default NewtonInputs
