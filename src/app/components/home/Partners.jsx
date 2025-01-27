"use client"

import Image from 'next/image'
import React from 'react'

const logo_whiteMembers = [
    // { src: '/logo_white/asd.png', alt: 'ASD logo_white' },
    { src: '/logo_white/b.png', alt: 'B logo_white' },
    { src: '/logo_white/beeline.png', alt: 'Beeline logo_white' },
    { src: '/logo_white/beelisimo.png', alt: 'Bellissimo Pizza logo_white' },
    { src: '/logo_white/bose.png', alt: 'Bose logo_white' },
    { src: '/logo_white/byd.png', alt: 'BYD logo_white' },
    { src: '/logo_white/chinamotors.png', alt: 'China Motors logo_white' },
    { src: '/logo_white/decaro.png', alt: 'Decaro logo_white' },
    { src: '/logo_white/decor.png', alt: 'Decor Center logo_white' },
    { src: '/logo_white/diatech.png', alt: 'Diatech logo_white' },
    { src: '/logo_white/evos.png', alt: 'Evos logo_white' },
    { src: '/logo_white/eyewear.png', alt: 'Eyewear logo_white' },
    { src: '/logo_white/fcn.png', alt: 'FCN Group logo_white' },
    // { src: '/logo_white/g.png', alt: 'G logo_white' },
    { src: '/logo_white/glamour.png', alt: 'Glamour logo_white' },
    { src: '/logo_white/hill.png', alt: 'Hill logo_white' },
    // { src: '/logo_white/hp.png', alt: 'HP logo_white' },
    { src: '/logo_white/island.png', alt: 'Aesthetic Island logo_white' },
    // { src: '/logo_white/jeans.png', alt: 'Jeans logo_white' },
    { src: '/logo_white/lacoste.png', alt: 'Lacoste logo_white' },
    { src: '/logo_white/scala.png', alt: 'Lascala logo_white' },
    { src: '/logo_white/levis.png', alt: 'Levis logo_white' },
    { src: '/logo_white/michale.png', alt: 'Michale Cafe Boutique logo_white' },
    { src: '/logo_white/natuzzi.png', alt: 'Natuzzi Italia logo_white' },
    { src: '/logo_white/newmillenium.png', alt: 'New Millenium logo_white' },
    { src: '/logo_white/poul-shark.png', alt: 'Poul Shark logo_white' },
    { src: '/logo_white/pyramids.png', alt: 'Pyramids logo_white' },
    { src: '/logo_white/swarowski.png', alt: 'Swarovski logo_white' },
    { src: '/logo_white/tepan.png', alt: 'Teppanyaki logo_white' },
    { src: '/logo_white/tezz.png', alt: 'Tezz.uz logo_white' },
    { src: '/logo_white/thermo.png', alt: 'Thermo House logo_white' },
    { src: '/logo_white/tommy.png', alt: 'Tommy Hilfiger logo_white' },
    { src: '/logo_white/uskudar.png', alt: 'Uskudar logo_white' },
    { src: '/logo_white/uzcard.png', alt: 'Uzcard logo_white' },
  ];
  

export default function Partners() {
  return (
    <div className="grid grid-cols-6 gap-0 mx-auto py-10 lg:w-[70vw] w-[90vw]">
        {logo_whiteMembers.map((member, index) => (
            <div key={index} className=" border border-red-600">
                <Image src={member.src} alt={member.alt} width={240} height={240}/>
            </div>
        ))}
     
        
    </div>
  )
}
