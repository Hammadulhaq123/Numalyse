import Describer from '../../../../components/Describer'
import Navbar from '../../../../components/Navbar'
import QuadraticInputs from '../../../../RequiredInputs/QuadraticInputs'


const page = () => {
    return (
        <>

            {/* Main Functionalities */}
            <div className='w-full lg:w-[70%] bg-gray-100 p-4 gap-2 rounded-[20px] flex flex-col items-center justify-start'>
                <Navbar />
                <Describer title={"Quadratic Equation Solver"} description={`In math, we define a quadratic equation as an equation of degree 2, meaning that the highest exponent of this function is 2. The standard form of a quadratic is y = a.x² + b.x + c, where a, b, and c are numbers and a cannot be 0.`} />
                <QuadraticInputs />
            </div>


        </>
    )
}

export default page