"use client"
import { useState } from "react"
import NewtonAnalysisData from "../AnalysisDisplays/NewtonAnalysisData";
import { evaluate, derivative } from "mathjs";
import functionPlot from "function-plot";

const NewtonInputs = () => {

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

    const calculateNewtonMethod = (func, initial, tol) => {
        let root = null;
        let data = [];
        const tolerance = parseInt(tol);
        let initialVal = parseInt(initial);
        let allXM = [] // All values of xm will store in this variable
        let i = 1;


        const checkError = (xNew, xOld) => {
            let error = Math.abs((xNew - xOld) / xNew);
            return error.toFixed(3);
        }


        const checkPossibility = (initialVal) => {
            const derFunc = derivative(func, 'x').evaluate({ x: initialVal });
            if (derFunc == 0) {
                setError(true);
                return false;
            } else return true;
        }

        const iterativeFunction = (initialVal) => {
            let error = 100;
            let fx = evaluate(func, { x: initialVal });
            let xm = initialVal - (evaluate(func, { x: initialVal })) / derivative(func, 'x').evaluate({ x: initialVal });

            allXM.unshift(xm);
            while (error > tolerance) {

                const possible = checkPossibility(initialVal);
                data.push({ "iterCount": i, "initialVal": xm.toFixed(4), "fx": fx.toFixed(4), "error": error });
                i++;
                if (possible) {
                    initialVal = xm;
                    fx = evaluate(func, { x: initialVal });
                }
                else {
                    console.log("Not possible with newton method try another initial value");
                    // setError(true);
                }
                xm = initialVal - (evaluate(func, { x: initialVal })) / derivative(func, 'x').evaluate({ x: initialVal });
                allXM.unshift(xm);
                error = checkError(allXM[0], allXM[1]);
            }
            root = allXM[0].toFixed(4);
            setRoot(root);
            setData(data);
            setLoad(false);

        }

        const calculateXwithBisection = (initialVal) => {
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
                setError(true);
                console.log("Error at the beginning")
            }
        }

        calculateXwithBisection(initialVal);

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

    const calcNewton = () => {
        document.getElementById("newtonData").classList.remove("hidden");
        error && document.getElementById("toast-danger").classList.remove("hidden");
        calculateNewtonMethod(func.replace(/[a-zA-Z]/g, 'x').replace(/X/g, 'x'), initial, tolerance);
        draw();
        document.getElementById("scrollToNewton").scrollIntoView({
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
                    <input type="text" style={{ outline: "none" }} required placeholder="Algebric Function (One variable))" className="w-full h-12 rounded-full   border-4 border-[#04aa6d] border-dashed px-4 text-[#04aa6d]  focus:border-solid" value={func} onChange={handleFuncChange} />
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
                <button onClick={calcNewton} className="w-auto h-12 outline-none focus:outline-white focus:opacity-90 text-sm text-white font-bold p-4 flex justify-center items-center bg-[#04aa6d] rounded-full">
                    Calculate
                </button>
            </div>

            <div className="mt-4 w-full">
                {

                    <NewtonAnalysisData root={root} data={data} load={load} func={func.replace(/X/g, 'x')} error={error} />
                }
            </div>
        </>
    )
}

export default NewtonInputs
