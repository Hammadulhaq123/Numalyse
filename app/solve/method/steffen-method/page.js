import Describer from '../../../../components/Describer'
import Navbar from '../../../../components/Navbar'
import StefenInput from '../../../../RequiredInputs/StefenInput'

const page = () => {
    return (
        <>

            {/* Main Functionalities */}
            <div className='w-full lg:w-[70%] bg-gray-100 p-4 gap-2 rounded-[20px] flex flex-col items-center justify-start'>
                <Navbar />
                <Describer title={"Steffen method"} description={"The Steffensen's method is based on forward-difference approximation to derivative. This method is a tough competitor of Newton's method. Both methods are of quadratic convergence, and both require two functions evaluation per iteration, but in contrast to Newton's method, Steffensen's method is derivative-free."} />
                <StefenInput />
            </div>


        </>
    )
}

export default page
