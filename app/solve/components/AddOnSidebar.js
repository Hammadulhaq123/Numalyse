import { Cedarville_Cursive } from "next/font/google"


const supreme = Cedarville_Cursive({
    weight: '400',
    subsets: ['latin']
})


const AddOnSidebar = () => {
    return (
        <>
            {/* SideBar that is going to contain the ads and extras */}
            <div className='w-[30%] h-auto hidden lg:flex flex-col bg-[#2e2e2e] items-center justify-start py-8 px-4 text-[#fff] rounded-[20px]'>
                <div id='plot' className={` w-full text-center h-auto flex gap-2 items-center justify-center flex-col text-5xl font-bold text-[#fff]`}>
                    <span className={`${supreme.className}`}>
                        Graphical Representation

                    </span>
                </div>
            </div>
        </>
    )
}

export default AddOnSidebar
