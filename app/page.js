import Hero from "@/components/Hero";
import Bisection from "@/components/Bisection";
import Newton from "../components/Newton";
import Secant from "../components/Secant";
import Stefen from "../components/Stefen";

export default function Home() {
  return (
    <div className="flex flex-col bg-white w-full h-screen gap-4 p-4 items-start justify-start">
      <div className="flex gap-4 w-full h-auto lg:h-[59%] flex-wrap lg:flex-nowrap">
        <Hero />
        <Bisection />
      </div>

      <div className="flex gap-4 w-full h-auto lg:h-[39%] flex-wrap lg:flex-nowrap">
        <Secant />
        <Stefen />
        <Newton />
      </div>

    </div>
  )
}