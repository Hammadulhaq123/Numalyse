import { Inconsolata } from "next/font/google"


const supreme = Inconsolata({
    weight: '800',
    subsets: ['latin']
})


const AddOnSidebar = () => {
    return (
        <>
            {/* SideBar that is going to contain the ads and extras */}
            <div className='w-[30%] h-auto hidden lg:flex flex-col bg-gray-200 border-4 border-[#2e2e2e] border-dashed items-center justify-start py-8 px-4 text-[#2e2e2e] rounded-[20px]'>
                <div id='plot' className={` w-full text-center h-auto flex gap-2 items-center justify-center flex-col text-5xl font-bold text-[#2e2e2e]`}>
                    <span className={`${supreme.className}`}>
                        Graphical Representation

                    </span>
                </div>
            </div>
        </>
    )
}

export default AddOnSidebar
