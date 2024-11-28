"use client"

import Link from 'next/link';
import { useState } from 'react';
import { FaInstagram, FaPhone, FaFacebookF, FaEnvelope, FaTelegramPlane } from 'react-icons/fa';
import { IoChevronDownCircleOutline, IoMenu, IoClose } from "react-icons/io5";


const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center py-6 px-12 bg-none text-white">
    <div className="flex-1">
      <Link href="/apply" className="border border-red-500 px-4 py-2 rounded hover:bg-red-500 transition duration-300 inline-flex items-center">
        Подать заявку <span className="ml-2 text-2xl text-red-500 hover:text-white"><IoChevronDownCircleOutline /></span>
      </Link>
    </div>
    <div className="hidden md:flex flex-2 justify-center gap-8">
      <Link href="/about" className="hover:text-red-500 transition duration-300">О нас</Link>
      <Link href="/services" className="hover:text-red-500 transition duration-300">Услуги</Link>
      <Link href="/cases" className="hover:text-red-500 transition duration-300">Кейсы</Link>
      <Link href="/team" className="hover:text-red-500 transition duration-300">Команда</Link>
    </div>
    <div className="hidden md:flex flex-1 justify-end gap-6 text-red-500 text-xl">
      <Link href="https://telegram.org" className="hover:text-white text-2xl transition duration-300"><FaTelegramPlane /></Link>
      <Link href="https://instagram.com" className="hover:text-white text-2xl transition duration-300"><FaInstagram /></Link>
      <Link href="tel:+123456789" className="hover:text-white text-2xl transition duration-300"><FaPhone /></Link>
      <Link href="https://facebook.com" className="hover:text-white text-2xl transition duration-300"><FaFacebookF /></Link>
      <Link href="mailto:info@example.com" className="hover:text-white text-2xl transition duration-300"><FaEnvelope /></Link>
    </div>
    <div className="md:hidden flex items-center">
      <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
        {menuOpen ? <span className="text-white"><IoClose /></span> : <IoMenu />}
      </button>
    </div>

    {menuOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-xl">
          <Link href="/about" className="hover:text-red-500 transition duration-300" onClick={() => setMenuOpen(false)}>О нас</Link>
          <Link href="/services" className="hover:text-red-500 transition duration-300" onClick={() => setMenuOpen(false)}>Услуги</Link>
          <Link href="/cases" className="hover:text-red-500 transition duration-300" onClick={() => setMenuOpen(false)}>Кейсы</Link>
          <Link href="/team" className="hover:text-red-500 transition duration-300" onClick={() => setMenuOpen(false)}>Команда</Link>
          <div className="flex gap-6 text-red-500 text-2xl">
            <Link href="https://telegram.org" className="hover:text-white transition duration-300" onClick={() => setMenuOpen(false)}><FaTelegramPlane /></Link>
            <Link href="https://instagram.com" className="hover:text-white transition duration-300" onClick={() => setMenuOpen(false)}><FaInstagram /></Link>
            <Link href="tel:+123456789" className="hover:text-white transition duration-300" onClick={() => setMenuOpen(false)}><FaPhone /></Link>
            <Link href="https://facebook.com" className="hover:text-white transition duration-300" onClick={() => setMenuOpen(false)}><FaFacebookF /></Link>
            <Link href="mailto:info@example.com" className="hover:text-white transition duration-300" onClick={() => setMenuOpen(false)}><FaEnvelope /></Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar