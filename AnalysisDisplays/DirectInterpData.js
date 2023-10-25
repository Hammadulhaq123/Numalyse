import Loader from "../components/Loader"

const DirectInterpData = ({ load, root, error, x }) => {
    return (
        <div id="directinterpdata" className="hidden w-full">
            {
                error ? <Alert text="Something wrong happened" /> :
                    load ?
                        <Loader />
                        :
                        <div className="flex flex-col w-full">
                            <div className="w-full h-auto flex justify-center gap-4 p-4 text-[#2e2e2d] text-3xl font-semibold">
                                <span>

                                    {`y = f(${x})`} =
                                    <span className="w-auto  text-[#04aa6d] font-bold text-5xl" dangerouslySetInnerHTML={{ __html: ` ${root.toFixed(4)}` }} />
                                </span>
                            </div>
                        </div>
            }
            <a href="#interpData" id="scrollToDirectInterp" style={{ visibility: "hidden" }} />
        </div>
    )
}

export default DirectInterpData
