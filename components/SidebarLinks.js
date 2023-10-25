import Link from "next/link"
import { BiMath } from "react-icons/bi"

const SidebarLinks = ({ text, link }) => {
    return (
        <Link href={link} className="group w-full min-w-full px-2 rounded-lg h-10 lg:h-12 flex justify-start gap-2 transition-all duration-150 items-center bg-gray-50 hover:bg-[#04aa6d] text-[#04aa6d] hover:text-gray-100 text-md font-semibold hover:opacity-90">
            <span className="w-8 h-8 rounded-md  bg-[#04aa6d] group-hover:bg-gray-100 flex items-center justify-center text-white group-hover:text-[#04aa6d] text-lg">
                <BiMath />
            </span>
            {text}</Link>
    )
}

export default SidebarLinks
