"use client"

import Image from 'next/image'
import React from 'react'
import { FaInstagram, FaFacebook, FaTelegramPlane, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex items-center w-10/12 justify-between py-12 mx-auto">
      <div className="flex flex-col  justify-center w-fit">
        <Image src="/logo_red.svg" alt="Spectr Logo" width={300} height={200} className="" />
        <p className="mx-auto">marketing / branding / web / smm</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <FaInstagram size={24} />
            <span className="text-xl">@spectr.marketing</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaTelegramPlane size={24} />
            <span className="text-xl">@spectrmarketing</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhoneAlt size={24} />
            <div>
              <p className="text-xl">+99899-944-47-44</p>
              <p className="text-xl">+99899-940-44-88</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <FaFacebook size={24} />
            <span className="text-xl">@spectrmarketing</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope size={24} />
            <span className="text-xl">spectragency@gmail.com</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
