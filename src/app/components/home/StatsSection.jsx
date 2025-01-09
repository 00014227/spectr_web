"use client"

import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const StatsSection = () => {
  const statsRef = useRef(null); // Reference to the section
  const [isVisible, setIsVisible] = useState(false); // Track if section is visible

  useEffect(() => {
    const element = statsRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when section is visible
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  // Hook to animate numbers
  const useCountUp = (targetValue, duration, shouldStart) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
      if (!shouldStart) return; // Do nothing if animation shouldn't start yet

      let start = 0;
      const increment = targetValue / (duration / 10);

      const timer = setInterval(() => {
        start += increment;
        if (start >= targetValue) {
          setValue(targetValue);
          clearInterval(timer);
        } else {
          setValue(Math.ceil(start));
        }
      }, 10);

      return () => clearInterval(timer);
    }, [targetValue, duration, shouldStart]);

    return value;
  };

  const AnimatedNumber = ({ target, duration, suffix }) => {
    const value = useCountUp(target, duration, isVisible);
    return (
      <motion.span
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-evolventa text-red-500"
      >
        {value}
        {suffix}
      </motion.span>
    );
  };

  return (
    <div
      ref={statsRef}
      className="flex flex-wrap justify-between items-center py-6 px-1 md:px-12 bg-black text-white text-center"
    >
      <div className="w-full sm:w-1/2 md:w-auto flex flex-col items-center mb-6 md:mb-0">
        <AnimatedNumber target={1000} duration={2000} suffix="+" />
        <span className="text-lg md:text-2xl">кейсов</span>
      </div>
      <div className="w-full sm:w-1/2 md:w-auto flex flex-col items-center mb-6 md:mb-0">
        <AnimatedNumber target={100} duration={1500} suffix="+" />
        <span className="text-lg md:text-2xl">клиентов</span>
      </div>
      <div className="w-full sm:w-1/2 md:w-auto flex flex-col items-center mb-6 md:mb-0">
        <AnimatedNumber target={1000000} duration={2500} suffix="+" />
        <span className="text-lg md:text-2xl">креатива</span>
      </div>
      <div className="w-full sm:w-1/2 md:w-auto flex flex-col items-center mb-6 md:mb-0">
        <AnimatedNumber target={100} duration={1500} suffix="%" />
        <span className="text-lg md:text-2xl">гарантии и результата</span>
      </div>
      <div className="w-full sm:w-1/2 md:w-auto flex flex-col items-center">
        <AnimatedNumber target={500} duration={2000} suffix="+" />
        <span className="text-lg md:text-2xl">проектов</span>
      </div>
    </div>
  );
};

export default StatsSection;
