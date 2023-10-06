import { BsArrowUpRight } from 'react-icons/bs'
const Button = () => {
    return (
        <button className="w-auto bg-[#2e2d2d] text-[#04aa6d] text-sm font-bold rounded-full h-12 py-2 px-4 flex items-center gap-2 justify-between">
            Try for Free
            <span className='w-8 h-8 bg-[#04aa6d] rounded-full flex justify-center items-center'>
                <BsArrowUpRight className='text-white' />
            </span>


        </button>
    )
}

export default Button
