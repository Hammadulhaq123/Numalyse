"use client"

import { useState } from "react"
import QuadraticAnalysisData from "../AnalysisDisplays/QuadraticAnalysisData";
import { derivative } from "mathjs";
import functionPlot from "function-plot"

const QuadraticInputs = () => {
    const [a, setA] = useState("+");
    const [b, setB] = useState("+");
    const [c, setC] = useState("+");
    const [result, setResult] = useState([]);

    const [load, setLoad] = useState(false);
    const [error, setError] = useState(false);
    // Data:
    let func = `${a}x^2  ${b}*x  ${c}`;

    // Graph functionality:
    function draw() {
        try {
            document.getElementById("plot").classList.remove("hidden");
            document.getElementById("plot").classList.add("flex");
            functionPlot({
                target: '#plot',
                grid: true,
                width: 400,
                height: 300,
                data: [{
                    fn: func.replace(/X/g, 'x'),
                    derivative: {
                        fn: `${derivative(func.replace(/X/g, 'x'), 'x')}`,
                        updateOnMouseMove: false,
                    },
                    sampler: 'builtIn', //Use the evaluator of math.js
                    graphType: 'polyline'
                }]
            });
        } catch (err) {
            console.log(err);
            alert(err);
        }
    }


    const calcQuadratic = () => {
        document.getElementById("quadData").classList.remove("hidden")
        document.getElementById("scrollToQuadratic").scrollIntoView({
            behavior: 'smooth'
        });
        setLoad(true);
        try {
            draw()
            const discriminant = b * b - 4 * a * c;
            if (discriminant > 0) {
                const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
                const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
                setResult(['Roots are real and distinct:', root1.toFixed(3), root2.toFixed(3), discriminant.toFixed(1)]);
                setLoad(false);
            } else if (discriminant === 0) {
                const root = -b / (2 * a);
                setResult(['Roots are real and equal:', root.toFixed(3), discriminant.toFixed(1)]);
                setLoad(false);
            } else {
                const realPart = (-b / (2 * a)).toFixed(2);
                const imaginaryPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
                setResult(['Roots are complex and imaginary:', `${realPart} + ${imaginaryPart}i`, `${realPart} - ${imaginaryPart}i`, discriminant.toFixed(1)]);
                setLoad(false);

            }
        } catch (error) {
            setError(true)
        }

    }
    return (
        <>
            <div className="w-full h-auto rounded-[16px] p-8 flex gap-4 flex-col items-start justify-start bg-gray-200">
                <span className="text-3xl font-bold text-[#04aa6d]">
                    Input the Values!
                </span>
                <span style={{ color: "red" }} className="text-[#ff3838] text-sm">
                    <strong>Note:</strong>
                    <ol style={{ margin: "0 17px" }}>

                        <li style={{ listStyle: "disc" }}>
                            Must write operator (i.e. +2, -3)
                        </li>
                    </ol>
                </span>
                <div className="flex w-full h-auto gap-2 flex-wrap lg:flex-nowrap">
                    <div className="w-full lg:w-[33%]">
                        <label style={{ padding: "0 10px" }} className="w-48 font-bold text-[#04aa6d] ">a</label>
                        <input type="text" style={{ outline: "none" }} placeholder="Coefficient of x²" required className="w-full lg:w-[33%] h-12 rounded-full   border-4 border-[#04aa6d] border-dashed px-4 text-[#04aa6d]  focus:border-solid" value={a} onChange={(e) => setA(e.target.value)} />
                    </div>

                    <div className="w-full lg:w-[33%]">
                        <label style={{ padding: "0 10px" }} className="w-48 font-bold text-[#04aa6d] ">b</label>
                        <input type="text" style={{ outline: "none" }} required placeholder="Coefficient of x" className="w-full lg:w-[33%] h-12 rounded-full   border-4 border-[#04aa6d] border-dashed px-4 text-[#04aa6d]  focus:border-solid" value={b} onChange={(e) => setB(e.target.value)} />
                    </div>

                    <div className="w-full lg:w-[33%]">
                        <label style={{ padding: "0 10px" }} className="w-48 font-bold text-[#04aa6d] ">c</label>
                        <input type="text" style={{ outline: "none" }} placeholder="Constant" className="w-full lg:w-[33%] h-12 rounded-full   border-4 border-[#04aa6d] border-dashed px-4 text-[#04aa6d]  focus:border-solid" value={c} onChange={(e) => setC(e.target.value)} />
                    </div>
                </div>
                <button onClick={calcQuadratic} className="w-auto h-12 outline-none focus:outline-white focus:opacity-90 text-sm text-white font-bold p-4 flex justify-center items-center bg-[#04aa6d] rounded-full">
                    Calculate
                </button>
            </div>

            <div className="mt-4 w-full">
                {

                    <QuadraticAnalysisData load={load} result={result} error={error} func={func} />
                }
            </div>
        </>
    )
}

export default QuadraticInputs
