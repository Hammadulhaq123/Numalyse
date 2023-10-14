import Loader from "../components/Loader"

const QuadraticAnalysisData = ({ load, result, error, func }) => {
    return (
        <div id="quadData" className="hidden w-full">
            <a href="#quadraticData" id="scrollToQuadratic" style={{ visibility: "hidden" }} />
            {
                error ? <Alert text="Something wrong happened" /> :
                    load ?
                        <Loader />
                        :
                        <div className="flex flex-col w-full">

                            <div className="w-full h-auto flex gap-4 p-4 text-[#2e2e2d] text-3xl font-semibold">
                                <span>

                                    f(x) =
                                    <span className="w-auto  text-[#04aa6d] font-bold text-3xl" dangerouslySetInnerHTML={{ __html: `${func.replace(/\^/g, '<sup>').replace(/\-/g, '</sup>-').replace(/\+/g, '</sup>+').replace(/\*/g, '.')}` }} />
                                </span>
                            </div>


                            <div className="overflow-x-auto w-full sm:-mx-6 lg:-mx-8">
                                <div className="flex flex-col gap-2 min-w-full py-2 sm:px-6 lg:px-8">
                                    <div className="overflow-hidden flex flex-col gap-6 w-full bg-white p-8 rounded-[16px]">
                                        <span className="w-full flex items-center justify-center  text-[#2e2e2e] text-5xl font-bold">
                                            {result[0]}
                                        </span>
                                        <div className="flex w-full items-start flex-wrap gap-8 justify-between ">

                                            <span className="text-3xl text-[#04aa6d] font-bold flex gap-2">
                                                <span className="text-[#2e2e2e]">
                                                    x1:
                                                </span>
                                                {result[1]}
                                            </span>

                                            <span className="text-3xl text-[#04aa6d] font-bold flex gap-2">
                                                <span className="text-[#2e2e2e]">
                                                    x2:
                                                </span>
                                                {result[2]}
                                            </span>

                                            <span className="text-3xl text-[#04aa6d] font-bold flex gap-2">
                                                <span className="text-[#2e2e2e]">
                                                    D:
                                                </span>
                                                {result[3]}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
            }
        </div>
    )
}

export default QuadraticAnalysisData
