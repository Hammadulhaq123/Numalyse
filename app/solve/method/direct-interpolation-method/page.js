import Describer from '../../../../components/Describer'
import Navbar from '../../../../components/Navbar'
import DirectInterpolationInput from '../../../../RequiredInputs/DirectInterpolationInput'

const page = () => {
    return (
        <>

            {/* Main Functionalities */}
            <div className='w-full lg:w-[70%] bg-gray-100 p-4 gap-2 rounded-[20px] flex flex-col items-center justify-start'>
                <Navbar />
                <Describer title={"Direct Interpolation Method"} description={"The direct method (also called the Vandermonde polynomial method) of interpolation is based on the following premise. Given  n+1 data points, fit a polynomial of order  n as given below y=a0+a1x+……………+anx^n."} />
                <DirectInterpolationInput />
            </div>


        </>
    )
}

export default page
