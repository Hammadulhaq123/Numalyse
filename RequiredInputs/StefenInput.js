"use client"
import { useState } from "react"
import SteffenAnalysisData from "../AnalysisDisplays/SteffenAnalysisData";
import { evaluate, derivative } from "mathjs";
import functionPlot from "function-plot";

const StefenInput = () => {

    const [func, setFunc] = useState("");
    const [initial, setInitial] = useState("");
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

    // Newton methodology:

    const calculateSteffenMethod = (func, initial, tol) => {
        let root = null;  //Setting the root to null initially

        let data = [];
        //Setting an empty array so that we cann add all the related values one by one into this array after each iteration

        const tolerance = parseFloat(tol);
        let initialVal = parseFloat(initial);

        let allXM = [] // All values of xm will store in this variable

        let i = 1;


        const checkError = (xNew, xOld) => {
            let error = Math.abs((xNew - xOld) / xNew);
            return error.toFixed(3);
        }


        const checkPossibility = (initialVal) => {
            const fx = evaluate(func, { x: initialVal });
            if (fx == 0) {
                return false;
            } else return true;
        }

        const iterativeFunction = (initialVal) => {
            let error = 100;
            let fx = evaluate(func, { x: initialVal });
            // console.log(evaluate(func, { x: (initialVal + fx) }) - fx)
            // console.log(Math.pow(fx, 2))
            let xm = initialVal - (Math.pow(fx, 2) / (evaluate(func, { x: (initialVal + fx) }) - fx));
            // console.log("Mean", xm)
            // console.log(fx)

            allXM.unshift(xm);
            while (error > tolerance) {

                const possible = checkPossibility(initialVal);
                data.push({ "iterCount": i, "initialVal": initialVal.toFixed(3), "fx": fx.toFixed(3), "xm": xm.toFixed(3), "error": error });
                i++;
                if (possible) {
                    initialVal = xm;
                    fx = evaluate(func, { x: initialVal });
                }
                // else {
                //     allXM.unshift(xm);
                //     root = allXM[0].toFixed(4);
                //     setRoot(root);
                //     setData(data);
                //     setLoad(false);

                // }
                xm = initialVal - (Math.pow(fx, 2) / (evaluate(func, { x: (initialVal + fx) }) - fx));
                allXM.unshift(xm);
                error = checkError(allXM[0], allXM[1]);
            }
            root = allXM[0].toFixed(4);
            setRoot(root);
            setData(data);
            setLoad(false);

        }

        const calculateXwithSteffen = (initialVal) => {
            setLoad(true);
            const possible = checkPossibility(initialVal)
            if (possible) {
                try {
                    iterativeFunction(initialVal);
                    setError(false);
                }
                catch (error) {
                    setError(true);
                    console.log(error)
                }
            }
            else {
                console.log("Initial Value is the root")
            }
        }

        calculateXwithSteffen(initialVal);

    }

    // Newton methodolgy ends here

    const handleFuncChange = (e) => {
        setFunc(e.target.value);
    }


    const handleInitalChange = (e) => {
        setInitial(e.target.value)
    }

    const handleToleranceChange = (e) => {
        setTolerance(e.target.value)
    }

    const calcSteffen = () => {
        document.getElementById("steffenData").classList.remove("hidden");  //Change it later
        error && document.getElementById("toast-danger").classList.remove("hidden");
        calculateSteffenMethod(func.replace(/[a-zA-Z]/g, 'x').replace(/X/g, 'x'), initial, tolerance);
        draw();
        document.getElementById("scrollToSteffen").scrollIntoView({
            behavior: 'smooth'  //Change it later
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
                    <div className="w-full lg:w-[50%]">
                        <label style={{ padding: "0 10px" }} className="w-48 font-bold text-[#04aa6d] ">Initial value</label>
                        <input type="text" style={{ outline: "none" }} required placeholder="Initial Value" className="w-full lg:w-[33%] h-12 rounded-full   border-4 border-[#04aa6d] border-dashed px-4 text-[#04aa6d]  focus:border-solid" value={initial} onChange={handleInitalChange} />
                    </div>

                    <div className="w-full lg:w-[50%]">
                        <label style={{ padding: "0 10px" }} className="w-48 font-bold text-[#04aa6d] ">Tolerance</label>
                        <input type="text" style={{ outline: "none" }} placeholder="Tolerance" className="w-full lg:w-[33%] h-12 rounded-full   border-4 border-[#04aa6d] border-dashed px-4 text-[#04aa6d]  focus:border-solid" value={tolerance} onChange={handleToleranceChange} />
                    </div>
                </div>
                <button onClick={calcSteffen} className="w-auto h-12 outline-none focus:outline-white focus:opacity-90 text-sm text-white font-bold p-4 flex justify-center items-center bg-[#04aa6d] rounded-full">
                    Calculate
                </button>
            </div>

            <div className="mt-4 w-full">
                {

                    <SteffenAnalysisData root={root} data={data} load={load} func={func.replace(/X/g, 'x')} error={error} />
                }
            </div>
        </>
    )
}

export default StefenInput
