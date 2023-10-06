


const calculateBisectionMethod = (func, xLow, xUp, tol) => {
    let tolerance = parseInt(tol);
    let x1 = parseInt(xLow);
    let x2 = parseInt(xUp);
    let allXM = [] // All values of xm will store in this variable


    const checkError = (xNew, xOld) => {
        console.log(xNew, xOld)
        let error = Math.abs((xNew - xOld) / xNew) * 100
        return error;
    }


    const checkPossibility = (x1, x2) => {
        const fx1 = eval(func.replace(/x/g, x1));
        const fx2 = eval(func.replace(/x/g, x2));
        if ((fx1 * fx2) < 0) {
            return true;
        } else return false;
    }

    const iterativeFunction = (x1, x2) => {
        let error = 100;

        let xm = (x1 + x2) / 2;
        allXM.unshift(xm);
        console.log("Error before loop", error)
        while (error > tolerance) {

            if (x1.toFixed(2) == x2.toFixed(2)) {
                break;
            }
            const possible = checkPossibility(x1, xm);
            console.log(possible);

            if (possible) {
                x2 = xm;

            }
            else {
                x1 = xm;

            }
            xm = (x1 + x2) / 2;
            allXM.unshift(xm);
            error = checkError(allXM[0], allXM[1]);
        }
        console.log("Root is: ", allXM[0]);

    }

    const calculateXwithBisection = (x1, x2) => {
        const possible = checkPossibility(x1, x2)
        if (possible) {
            iterativeFunction(x1, x2);
        }
        else {
            alert("Error in Calculating");
        }
    }

    calculateXwithBisection(x1, x2);

}

export default calculateBisectionMethod;