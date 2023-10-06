import Hero from "@/components/Hero";
import Bisection from "@/components/Bisection";
import Newton from "../components/Newton";

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen gap-4 p-4 items-start justify-start">
      <div className="flex gap-4 w-full h-auto lg:h-[59%] flex-wrap lg:flex-nowrap">
        <Hero />
        <Bisection />
      </div>

      <div className="flex gap-4 w-full h-auto lg:h-[39%] flex-wrap lg:flex-nowrap">
        <div className="w-full h-[25rem]] bg-[#04aa6d] lg:w-[25%] lg:h-full rounded-[20px] flex flex-col justify-start items-center p-4">

        </div>
        <div className="w-full h-[25rem]] bg-gray-100 border-4 border-[#04aa6d] border-dashed lg:w-[34.5%] lg:h-full rounded-[20px] flex flex-col justify-start items-center p-4">

        </div>
        <Newton />
      </div>

    </div>
  )
}