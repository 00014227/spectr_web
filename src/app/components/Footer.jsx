"use client"

import Image from 'next/image'
import React from 'react'
import { FaInstagram, FaFacebook, FaTelegramPlane, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
<footer className="flex flex-col md:flex-row items-center w-11/12 justify-between py-8 mx-auto gap-8">
  {/* Logo Section */}
  <div className="flex flex-col items-center md:items-start justify-center w-full md:w-fit">
    <Image
      src="/logo_red.svg"
      alt="Spectr Logo"
      width={200}
      height={150}
      className="mx-auto md:mx-0"
    />
    <p className="text-center md:text-left font-evolventa">marketing / branding / web / smm</p>
  </div>

  {/* Contact Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:w-auto">
    {/* First Column */}
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <FaInstagram size={20} />
        <span className="text-base sm:text-lg font-evolventa">@spectr.marketing</span>
      </div>
      <div className="flex items-center space-x-3">
        <FaTelegramPlane size={20} />
        <span className="text-base sm:text-lg font-evolventa">@spectrmarketing</span>
      </div>
      <div className="flex items-center space-x-3">
        <FaPhoneAlt size={20} />
        <div>
          <p className="text-base sm:text-lg font-evolventa">+99899-944-47-44</p>
          <p className="text-base sm:text-lg font-evolventa">+99899-940-44-88</p>
        </div>
      </div>
    </div>

    {/* Second Column */}
    <div className="space-y-4">
      <div className="flex items-center space-x-3">
        <FaFacebook size={20} />
        <span className="text-base sm:text-lg font-evolventa">@spectrmarketing</span>
      </div>
      <div className="flex items-center space-x-3">
        <FaEnvelope size={20} />
        <span className="text-base sm:text-lg font-evolventa">spectragency@gmail.com</span>
      </div>
    </div>
  </div>
</footer>

  )
}
