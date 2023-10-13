import Describer from '../../../../components/Describer'
import Navbar from '../../../../components/Navbar'
import BisectionInputs from '../../../../RequiredInputs/BisectionInputs'


const page = () => {
    return (
        <>

            {/* Main Functionalities */}
            <div className='w-full lg:w-[70%] bg-gray-100 p-4 gap-2 rounded-[20px] flex flex-col items-center justify-start'>
                <Navbar />
                <Describer title={"Bisection method"} description={"The bisection method in mathematics is a root-finding method that repeatedly bisects an interval and then selects a subinterval in which a root must lie for further processing. The method is also called the interval halving method. \n This is a calculator that finds a function root using the bisection method, or interval halving method. A brief method description can be found below the calculator."} />
                <BisectionInputs />
            </div>


        </>
    )
}

export default page
