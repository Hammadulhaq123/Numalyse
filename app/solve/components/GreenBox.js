import Link from "next/link"


const GreenBox = ({ name, link }) => {
    return (
        <Link href={link} className='w-full md:w-[21.1rem] lg:w-[19.1rem] xl:w-[20.4rem] text-xl font-bold p-4 flex justify-center items-center h-auto bg-[#04aa6c] text-[#fff] rounded-[16px]'>
            {name}

        </Link>
    )
}

export default GreenBox
