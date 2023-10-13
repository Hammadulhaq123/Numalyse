import Link from "next/link"


const GreenBorder = ({ name, link }) => {
    return (
        <Link href={link} className='w-full md:w-[22.2rem] lg:w-[20.1rem] xl:w-[21.4rem] text-xl font-bold p-4 flex justify-center items-center h-auto bg-white text-[#04aa6c] border-4 border-[#04aa6c] border-dashed rounded-[16px]'>
            {name}

        </Link>
    )
}

export default GreenBorder
