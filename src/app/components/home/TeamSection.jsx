"use client"
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';



export default function TeamSection({teamMembers, header}) {
  const containerRef = useRef(null);
  const [positions, setPositions] = useState(
    teamMembers.map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 4,
      vy: (Math.random() - 0.5) * 4,
    }))
  );
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const updatePositions = () => {
      setPositions((prevPositions) => {
        return prevPositions.map((pos, index) => {
          let { x, y, vx, vy } = pos;
          const container = containerRef.current;
          const containerWidth = container.offsetWidth;
          const containerHeight = container.offsetHeight;
          const radius = 50;

          // Update positions based on velocity
          x += vx;
          y += vy;

          // Collision with container walls
          if (x <= 0) {
            x = 0;
            vx *= -1;
          }
          if (x >= containerWidth - radius) {
            x = containerWidth - radius;
            vx *= -1;
          }
          if (y <= 0) {
            y = 0;
            vy *= -1;
          }
          if (y >= containerHeight - radius) {
            y = containerHeight - radius;
            vy *= -1;
          }

          // Collision with other balls
          prevPositions.forEach((otherPos, otherIndex) => {
            if (index !== otherIndex) {
              const dx = otherPos.x - x;
              const dy = otherPos.y - y;
              const distance = Math.sqrt(dx * dx + dy * dy);
              if (distance < radius * 4) {
                // Calculate new velocities for bouncing effect
                const angle = Math.atan2(dy, dx);
                vx = -Math.cos(angle) * 4;
                vy = -Math.sin(angle) * 4;
              }
            }
          });

          return { x, y, vx, vy };
        });
      });
    };

    const interval = setInterval(updatePositions, 50);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-black text-white p-6 overflow-hidden">
      <h2 className="text-5xl font-bold text-red-500 mb-12 ml-10">{header}</h2>
      {teamMembers.map((member, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full overflow-hidden w-32 h-32 md:w-48 md:h-48"
          animate={{
            x: positions[index].x,
            y: positions[index].y,
          }}
          transition={{ ease: 'linear', duration: 0.02 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <Image
            src={member.src}
            alt={member.alt}
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
      ))}
    </div>
  );
}





  
