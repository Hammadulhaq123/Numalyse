import Describer from '../../../../components/Describer'
import Navbar from '../../../../components/Navbar'
import NewtonInputs from '../../../../RequiredInputs/NewtonInputs'

import { Cedarville_Cursive } from "next/font/google"





const supreme = Cedarville_Cursive({
    weight: '400',
    subsets: ['latin']
})
const page = () => {
    return (
        <>

            {/* Main Functionalities */}
            <div className='w-full lg:w-[70%] bg-gray-100 p-4 gap-2 rounded-[20px] flex flex-col items-center justify-start'>
                <Navbar />
                <Describer title={"Newton's method"} description={"This online calculator implements Newton's method (also known as the Newton–Raphson method) for finding the roots (or zeroes) of a real-valued function.It implements Newton's method using derivative calculator to obtain an analytical form of the derivative of a given function because this method requires it. You can find a theory to recall the method basics below the calculator."} />
                <NewtonInputs />
            </div>


        </>
    )
}

export default page
