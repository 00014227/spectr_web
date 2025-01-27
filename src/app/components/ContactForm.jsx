"use client"


import React from 'react'

export default function ContactForm() {
    return (
        <section className="py-6 px-6 2xl:px-52 lg:px-32 space-y-8">
            <div className=" space-y-4">
                <h3 className=" text-6xl text-red-500">есть проект!?</h3>
                <p>marketing / branding / web / smm</p>
            </div>

            <div className="flex md:flex-row flex-col space-y-8  justify-between">
                <p className=" text-2xl 2xl:w-[50%] lg:w-2/3 w-auto">Наша команда всегда готова к новым проектам, оставляйте заявку, и мы скоро свяжемся с вами!</p>
                <button
                    className="relative px-12 sm:px-16 md:px-20 py-6 sm:py-3 md:py-4 uppercase bg-black text-white font-medium text-sm sm:text-base md:text-lg rounded-lg transition-transform duration-300 hover:bg-red-800 hover:scale-105"
                    style={{
                        boxShadow:
                            "inset -5px -5px 10px rgba(245, 39, 50, 0.8), inset 5px 5px 10px rgba(0, 0, 0, 0.7)",
                    }}
                >
                    позвонить
                </button>

            </div>

            <form className="grid grid-cols-1 md:grid-cols-3 gap-20 w-full mb-7">
                {/* Input Field 1 */}
                <div className="text-center space-y-6">
                    <label className="block text-white font-medium mb-2">
                        ВАШЕ ИМЯ
                    </label>
                    <input
                        type="text"
                        placeholder="введите ваше имя"
                        className="w-full px-6 text-xl py-6 text-white text-center bg-black rounded-lg placeholder-white placeholder:text-xl font-light focus:outline-none"
                        style={{
                            boxShadow:
                                "inset -5px -5px 10px rgba(245, 39, 50, 0.8), inset 5px 5px 10px rgba(0, 0, 0, 0.7)",
                        }}
                    />
                </div>
                {/* Input Field 2 */}
                <div className="text-center space-y-6">
                    <label className="block text-white font-medium mb-2">
                        НОМЕР ТЕЛЕФОНА
                    </label>
                    <input
                        type="tel"
                        placeholder="введите номер телефона"
                        className="w-full px-6 py-6 text-xl text-white text-center bg-black rounded-lg placeholder:text-xl placeholder-white font-light focus:outline-none"
                        style={{
                            boxShadow:
                                "inset -5px -5px 10px rgba(245, 39, 50, 0.8), inset 5px 5px 10px rgba(0, 0, 0, 0.7)",
                        }}
                    />
                </div>
                {/* Input Field 3 */}
                <div className="text-center space-y-6">
                    <label className="block text-white font-medium mb-2">
                        НАЗВАНИЕ ВАШЕЙ КОМПАНИИ
                    </label>
                    <input
                        type="text"
                        placeholder="введите название компании"
                        className="w-full px-6 py-6 text-white text-xl text-center placeholder:text-xl bg-black rounded-lg placeholder-white font-light focus:outline-none"
                        style={{
                            boxShadow:
                                "inset -5px -5px 10px rgba(245, 39, 50, 0.8), inset 5px 5px 10px rgba(0, 0, 0, 0.7)",
                        }}
                    />
                </div>
                <div className="col-span-full flex justify-center mt-10">

                    <button
                        className="relative px-20 py-6 uppercase bg-black text-white font-medium text-lg rounded-lg transition-transform duration-300 hover:bg-red-800 hover:scale-105"
                        style={{
                            boxShadow:
                                "inset -5px -5px 10px rgba(245, 39, 50, 0.8), inset 5px 5px 10px rgba(0, 0, 0, 0.7)",
                        }}
                    >
                        оставить заявку
                    </button>
                </div>
            </form>
        </section>
    );
}
