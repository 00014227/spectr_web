"use client"
import React from 'react';
import { motion } from 'framer-motion';

function InfoAbout({ values }) {
    return (
        <motion.section
            className="flex flex-col justify-center md:px-0 px-2 mx-auto relative z-10 max-w-6xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
        >
            <motion.h2
                className="text-red-500 text-3xl sm:text-4xl font-bold uppercase mb-4"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1 }}
            >
                {values.header}
            </motion.h2>
            <motion.p
                className="text-base sm:text-lg mb-8 text-white"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                {values.sub_title}
            </motion.p>
            <motion.p
                className="text-base sm:text-lg mb-8 md:w-[70%] w-[90%] text-white"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, delay: 0.4 }}
            >
                {values.paragraph}
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.list.map((item, index) => (
                    <motion.div
                        key={index}
                        className="flex space-x-4"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                    >
                        <div className="flex gap-6">
                            <div className="text-red-500 text-3xl font-bold font-evolventa">{item.id}</div>
                            <div className="bg-red-500 w-1 h-[3rem]"></div>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold mb-2 font-evolventa text-white">{item.title}</h2>
                            <p className="text-base md:w-[70%] w-[90%] mt-12 font-evolventa text-white">{item.paragraph}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}

export default InfoAbout;
