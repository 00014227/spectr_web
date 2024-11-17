import Image from "next/image";
import { IoChevronDownCircleOutline } from 'react-icons/io5';
import StatsSection from "./components/home/StatsSection";

export default function Home() {
  return (
    <div>
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center p-6">
      <h2 className="text-lg mb-2 uppercase tracking-widest font-astron">marketing agency</h2>
      <Image src="/logo.svg" alt="Logo" width={800} height={180} className="mb-6" />
      {/* <h1 className="text-6xl font-bold mb-6">SPECTR</h1> */}
      <div className="flex gap-6 text-xl mb-12">
        <span>marketing</span>
        <span>branding</span>
        <span>smm</span>
        <span>web</span>
      </div>
      <div className="flex gap-12">
        <div className="flex flex-col items-center">
          <button className="border border-red-500 px-6 py-2 rounded-full hover:bg-red-500 transition duration-300 inline-flex items-center gap-2">
            Презентация <IoChevronDownCircleOutline className="text-2xl" />
          </button>
        </div>
        <div className="flex flex-col items-center">
          <button className="border border-red-500 px-6 py-2 rounded-full hover:bg-red-500 transition duration-300 inline-flex items-center gap-2">
            Прайслист <IoChevronDownCircleOutline className="text-2xl" />
          </button>
        </div>
      </div>
    </div>

    <StatsSection/>
    </div>
  );
}
