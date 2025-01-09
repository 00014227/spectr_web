"use client"

import Image from "next/image";
import { IoChevronDownCircleOutline } from 'react-icons/io5';
import StatsSection from "./components/home/StatsSection";
import ServicesTabs from "./components/home/ServicesTabs";
import TeamSection from "./components/home/TeamSection";
import NavBar from "./components/NavBar";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Partners from "./components/home/Partners";
import CaseSlider from "./components/Slider";
import Link from "next/link";


const teamMembers = [
  { src: '/team/a.jpg', alt: 'Team Member 1' },
  { src: '/team/a.jpg', alt: 'Team Member 2' },
  { src: '/team/a.jpg', alt: 'Team Member 3' },
  { src: '/team/a.jpg', alt: 'Team Member 4' },
  { src: '/team/a.jpg', alt: 'Team Member 5' },

];

const cases = [
  { src: '/logo/lacoste.webp', alt: 'Lacoste logo' },
  { src: '/logo/uskudar.webp', alt: 'Uskudar logo' },
  { src: '/logo/lascala.webp', alt: 'Lascala logo' },
  { src: '/logo/new_millenium.webp', alt: 'New millenium logo' },
  { src: '/logo/levis.webp', alt: 'Lascala logo' },
  { src: '/logo/decor.webp', alt: 'Lascala logo' },
  { src: '/logo/hill.webp', alt: 'Lascala logo' },
  { src: '/logo/tommy.webp', alt: 'Lascala logo' },
]

export default function Home() {
  return (
    <div className="bg-black">
      <div className="relative w-full h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute 2xl:-top-[21rem] -top-[18rem] left-0 w-full h-full object-cover opacity-75">
          <source src="/home/sds.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10"></div> {/* Overlay for better text visibility */}
        <div className="relative z-40">
          <NavBar className="w-full" />
        </div>
        <div className="relative flex flex-col items-center justify-center min-h-screen text-white text-center p-6 z-50">
          <Image
            src="/marketing_txt.svg"
            width={600}
            height={40}
            className="object-contain mb-6"
            alt="Marketing Text"
          />
          <Image
            src="/logo.svg"
            alt="Logo"
            width={800}
            height={180}
            className="mb-6 object-contain"
          />
          <div className="flex gap-24 text-xl mb-12">
            <span className="hover:text-red-500 transition duration-300">marketing</span>
            <span className="hover:text-red-500 transition duration-300">branding</span>
            <span className="hover:text-red-500 transition duration-300">smm</span>
            <span className="hover:text-red-500 transition duration-300">web</span>
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
      </div>








      <section className="flex flex-col md:flex-row items-center p-6 md:p-12 bg-black text-white">
        <Image src="/logo_red.svg" alt="Spectr Logo" width={300} height={200} className="transform md:-rotate-90" />
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">О нас</h2>
          <p className="text-2xl mb-6 2xl:w-[85%]">
            В маркетинговом агентстве Spectr мы верим, что каждая идея заслуживает того, чтобы её заметили. Мы создаём пространство для вашего бизнеса, где он может засиять.
          </p>
          <h3 className="text-2xl font-bold mb-4">Кто мы?</h3>
          <p className="text-2xl mb-8 2xl:w-[85%]">
            Мы – команда профессионалов, увлечённых маркетингом, брендингом, SMM и веб-разработкой. Наш опыт, креативный подход и внимание к деталям помогают нам превращать бизнес-задачи в успешные кейсы.
          </p>
          <Link href="/about" className="border border-red-500 px-6 py-2 rounded-full hover:bg-red-500 transition duration-300 inline-flex items-center gap-2">
            Подробнее <IoChevronDownCircleOutline className="text-2xl" />
          </Link>
        </div>
      </section>
      <StatsSection />
      <ServicesTabs />
      <TeamSection teamMembers={teamMembers} header = {'Наша команда'} />
      <Partners/>
      <CaseSlider/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}
