"use client"
const Alert = ({ text }) => {
    return (
        <div id="toast-danger" className="fixed bottom-3 right-3 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-[#04aa6d] rounded-lg shadow" role="alert">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-6 h-6 text-white bg-red-500 rounded-lg ">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
                </svg>
                <span className="sr-only">Error icon</span>
            </div>
            <div className="ml-3 text-sm text-gray-100 font-normal">{text}</div>
            <button onClick={() => document.getElementById("toast-danger").classList.add("hidden")} type="button" className="ml-auto -mx-1.5 -my-1.5 text-gray-100 hover:text-gray-50 rounded-lg  p-1.5  inline-flex items-center justify-center h-6 w-6 " data-dismiss-target="#toast-danger" aria-label="Close">
                <span className="sr-only">Close</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
            </button>
        </div>
    )
}

export default Alert
