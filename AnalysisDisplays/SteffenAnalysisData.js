import Loader from "../components/Loader"
import Alert from "../components/Alert"
import { derivative } from "mathjs"
import ExportBtn from "../components/ExportBtn"


const SteffenAnalysisData = ({ data, root, load, func, error }) => {
    return (
        <div id="steffenData" className="hidden w-full">
            <a href="#steffenData" id="scrollToSteffen" style={{ visibility: "hidden" }} />

            {
                error ? <Alert text="Something wrong happened" /> :
                    load ?
                        <Loader />
                        :
                        <div className="flex flex-col w-full">

                            <div className="w-full h-auto flex gap-4 p-4 text-[#2e2e2d] text-3xl font-semibold">
                                <span>

                                    f(x) =
                                    <span className="w-auto  text-[#04aa6d] font-bold text-5xl" dangerouslySetInnerHTML={{ __html: `${func.replace(/\^/g, '<sup>').replace(/\-/g, '</sup>-').replace(/\+/g, '</sup>+').replace(/\*/g, '.')}` }} />
                                </span>
                            </div>


                            <div className="overflow-x-auto w-full sm:-mx-6 lg:-mx-8">
                                <div className="flex flex-col gap-2 min-w-full py-2 sm:px-6 lg:px-8">
                                    <div className="overflow-hidden w-full bg-white p-8 rounded-[16px]">
                                        <table id="tbl_exporttable_to_xls" className=" w-full text-left rounded-[16px]  text-sm font-light">
                                            <thead className="border-b w-full h-12  font-medium ">
                                                <tr className="w-full ">
                                                    <th scope="col" className=" w-1/4 h-12 text-[#04aa6d] text-lg ">#</th>
                                                    <th scope="col" className="w-1/4 h-12 text-[#04aa6d] text-lg  ">x0</th>
                                                    <th scope="col" className="w-1/4 h-12 text-[#04aa6d] text-lg  ">F(x0)</th>
                                                    <th scope="col" className="w-1/4 h-12 text-[#04aa6d] text-lg  ">x1</th>
                                                    <th scope="col" className="w-1/4 h-12 text-[#04aa6d] text-lg ">Error</th>
                                                </tr>
                                            </thead>
                                            <tbody className="w-full h-auto ">
                                                {
                                                    data.map((item, key) => (
                                                        <tr className="w-full hover:bg-[#04aa6d]" key={key}>
                                                            <th scope="col" className=" w-1/4 h-12 font-normal ">{item.iterCount}</th>
                                                            <th scope="col" className="w-1/4 h-12 font-normal  ">{item.initialVal}</th>
                                                            <th scope="col" className="w-1/4 h-12 font-normal ">{item.fx}</th>
                                                            <th scope="col" className="w-1/4 h-12 font-normal ">{item.xm}</th>
                                                            <th scope="col" className="w-1/4 h-12 font-normal ">{item.error}</th>
                                                        </tr>
                                                    ))
                                                }

                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="w-full my-2">
                                        <div className="w-full flex justify-end items-center ">
                                            <ExportBtn />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full h-auto p-4 text-[#2e2e2d] text-3xl font-semibold">
                                Root =
                                <span className="w-auto  text-[#04aa6d] font-bold text-5xl">
                                    {" " + root}
                                </span>
                            </div>
                        </div>

            }
        </div >
    )
}

export default SteffenAnalysisData;
