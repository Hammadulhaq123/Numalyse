
const Describer = ({ title, description }) => {
    return (
        <div className="w-full h-auto bg-[#0e0e10] flex flex-col items-center lg:items-start justify-start rounded-[16px] p-8">
            <h1 className="text-5xl lg:text-7xl mb-2 w-full lg:w-[80%] font-bold text-white  ">
                {title}
            </h1>
            <p className="text-md w-full lg:w-[70%] font-light text-gray-50 ">
                {description}
            </p>
        </div>
    )
}

export default Describer
