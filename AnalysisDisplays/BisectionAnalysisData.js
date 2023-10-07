import Loader from "../components/Loader"

const BisectionAnalysisData = ({ data, root, load, func }) => {

    return (
        <div id="bisectionData" className="hidden w-full">

            {
                load ?
                    <Loader />
                    :
                    <div className="flex flex-col w-full">

                        <div className="w-full h-auto p-4 text-[#2e2e2d] text-3xl font-semibold">
                            f(x) =
                            <span className="w-auto  text-[#04aa6d] font-bold text-5xl" dangerouslySetInnerHTML={{ __html: `${func.replace(/[()]/g, '')}` }} />


                        </div>


                        <div className="overflow-x-auto w-full sm:-mx-6 lg:-mx-8">
                            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div className="overflow-hidden w-full bg-gray-200 p-8 rounded-[16px]">
                                    <table className=" w-full text-left rounded-[16px]  text-sm font-light">
                                        <thead className="border-b w-full h-12  font-medium ">
                                            <tr className="w-full ">
                                                <th scope="col" className=" w-1/4 h-12 text-[#04aa6d] text-lg ">Iteration #</th>
                                                <th scope="col" className="w-1/4 h-12 text-[#04aa6d] text-lg  ">xMean</th>
                                                <th scope="col" className="w-1/4 h-12 text-[#04aa6d] text-lg ">fxMean</th>
                                                <th scope="col" className="w-1/4 h-12 text-[#04aa6d] text-lg ">Error</th>
                                            </tr>
                                        </thead>
                                        <tbody className="w-full h-auto ">
                                            {
                                                data.map((item, key) => (
                                                    <tr className="w-full hover:bg-[#04aa6d]" key={key}>
                                                        <th scope="col" className=" w-1/4 h-12 font-normal ">{item.iterCount}</th>
                                                        <th scope="col" className="w-1/4 h-12 font-normal  ">{item.xMean}</th>
                                                        <th scope="col" className="w-1/4 h-12 font-normal ">{item.fxMean}</th>
                                                        <th scope="col" className="w-1/4 h-12 font-normal ">{item.error}</th>
                                                    </tr>
                                                ))
                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-auto p-4 text-[#2e2e2d] text-3xl font-semibold">
                            x =
                            <span className="w-auto  text-[#04aa6d] font-bold text-5xl">
                                {" " + root}
                            </span>
                        </div>
                    </div>

            }
        </div>
    )
}

export default BisectionAnalysisData
