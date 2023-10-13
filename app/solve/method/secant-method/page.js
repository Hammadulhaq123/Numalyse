import Describer from '../../../../components/Describer'
import Navbar from '../../../../components/Navbar'
import SecantInput from '../../../../RequiredInputs/SecantInputs'

const page = () => {
    return (
        <>

            {/* Main Functionalities */}
            <div className='w-full lg:w-[70%] bg-gray-100 p-4 gap-2 rounded-[20px] flex flex-col items-center justify-start'>
                <Navbar />
                <Describer title={"Secant method"} description={"The secant method is a root-finding procedure in numerical analysis that uses a series of roots of secant lines to better approximate a root of a function f. Let us learn more about the second method, its formula, advantages and limitations, and secant method solved example with detailed explanations in this article."} />
                <SecantInput />
            </div>


        </>
    )
}

export default page
