"use client"
import { useState } from "react"
import functionPlot from "function-plot";
import { derivative } from "mathjs";
import SecantAnalysisData from "../AnalysisDisplays/SecantAnalysisData";
import { evaluate } from 'mathjs'

const SecantInput = () => {

    const [func, setFunc] = useState("");
    const [lower, setLower] = useState("");
    const [upper, setUpper] = useState("");
    const [tolerance, setTolerance] = useState("0");
    const [data, setData] = useState([]);
    const [root, setRoot] = useState(null);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState(false)


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
                    fn: func.replace(/[a-zA-Z]/g, 'x').replace(/X/g, 'x'),
                    derivative: {
                        fn: `${derivative(func.replace(/[a-zA-Z]/g, 'x').replace(/X/g, 'x'), 'x')}`,
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
    // Bisection methodology:

    const calculateBisectionMethod = (func, xLow, xUp, tol) => {
        let root = null;
        let data = [];
        const tolerance = parseFloat(tol);
        let x0 = parseInt(xLow);
        let x1 = parseInt(xUp);
        let allXM = [] // All values of xm will store in this variable
        let i = 1;


        const checkError = (xNew, xOld) => {
            let error = Math.abs((xNew - xOld) / xNew)
            return error.toFixed(3);
        }



        const iterativeFunction = (x0, x1) => {
            let error = 100;
            let fx0 = func;
            fx0 = evaluate(fx0, { x: x0 });
            let fx1 = func;
            fx1 = evaluate(fx1, { x: x1 });
            let xm = x1 - fx1 * ((x1 - x0) / (fx1 - fx0));
            let fxm = evaluate(func, { x: xm });
            allXM.unshift(xm);

            error = checkError(allXM[0], x1)
            while (error > tolerance) {


                data.push({ "iterCount": i, "xMean": xm.toFixed(4), "fxMean": fxm.toFixed(4), "error": error });
                i++;
                if (fxm == 0) {
                    break;
                }

                // updating the first value with xm
                fxm = evaluate(func, { x: xm })
                x0 = x1;
                fx0 = fx1;
                x1 = xm;
                fx1 = fxm;

                // updating the mean so that next time fxm is calculated with new mean
                xm = x1 - fx1 * ((x1 - x0) / (fx1 - fx0));


                allXM.unshift(xm);
                error = checkError(allXM[0], allXM[1]);
            }

            root = allXM[0].toFixed(4)
            setRoot(root);
            setData(data);
            setLoad(false);

        }

        const calculateXwithBisection = (x0, x1) => {
            setLoad(true);
            try {
                iterativeFunction(x0, x1);
                setError(false)
            }
            catch (error) {
                setError(true);
            }
        }

        calculateXwithBisection(x0, x1);

    }

    // Bisection methodolgy ends here

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

    const calcBisection = () => {
        document.getElementById("secantData").classList.remove("hidden");
        error && document.getElementById("toast-danger").classList.remove("hidden");
        calculateBisectionMethod(func.replace(/[a-zA-Z]/g, 'x').replace(/X/g, 'x').replace(/\x/g, '(x)'), lower, upper, tolerance);
        draw();
        document.getElementById("scrollToSecant").scrollIntoView({
            behavior: 'smooth'
        });
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
                            Use ^ for exponential (i.e. x^3 for x raise to power 3).
                        </li>
                        <li style={{ listStyle: "disc" }}>
                            Use * for product (i.e. 3*x for 3 multiplied by x).
                        </li>
                    </ol>
                </span>
                <div className="function w-full h-auto">
                    <label style={{ padding: "0 10px" }} className="w-48 font-bold text-[#04aa6d] ">Function(fx)</label>
                    <input type="text" style={{ outline: "none" }} required placeholder="Algebric Function (One variable)" className="w-full h-12 rounded-full   border-4 border-[#04aa6d] border-dashed px-4 text-[#04aa6d]  focus:border-solid" value={func} onChange={handleFuncChange} />
                </div>
                <div className="flex w-full h-auto gap-2 flex-wrap lg:flex-nowrap">
                    <div className="w-full lg:w-[33%]">
                        <label style={{ padding: "0 10px" }} className="w-48 font-bold text-[#04aa6d] ">xLower</label>
                        <input type="text" style={{ outline: "none" }} placeholder="Lower Value (x0)" required className="w-full lg:w-[33%] h-12 rounded-full   border-4 border-[#04aa6d] border-dashed px-4 text-[#04aa6d]  focus:border-solid" value={lower} onChange={handleLowerChange} />
                    </div>
                    <div className="w-full lg:w-[33%]">
                        <label style={{ padding: "0 10px" }} className="w-48 font-bold text-[#04aa6d] ">xUpper</label>
                        <input type="text" style={{ outline: "none" }} required placeholder="Upper Value (x1)" className="w-full lg:w-[33%] h-12 rounded-full   border-4 border-[#04aa6d] border-dashed px-4 text-[#04aa6d]  focus:border-solid" value={upper} onChange={handleUpperChange} />
                    </div>

                    <div className="w-full lg:w-[33%]">
                        <label style={{ padding: "0 10px" }} className="w-48 font-bold text-[#04aa6d] ">Tolerance</label>
                        <input type="text" style={{ outline: "none" }} placeholder="Tolerance" className="w-full lg:w-[33%] h-12 rounded-full   border-4 border-[#04aa6d] border-dashed px-4 text-[#04aa6d]  focus:border-solid" value={tolerance} onChange={handleToleranceChange} />
                    </div>
                </div>
                <button onClick={calcBisection} className="w-auto h-12 outline-none focus:outline-white focus:opacity-90 text-sm text-white font-bold p-4 flex justify-center items-center bg-[#04aa6d] rounded-full">
                    Calculate
                </button>
            </div>

            <div className="mt-4 w-full">
                {

                    <SecantAnalysisData root={root} data={data} load={load} func={func.replace(/X/g, 'x')} error={error} />
                }
            </div>
        </>
    )
}

export default SecantInput
