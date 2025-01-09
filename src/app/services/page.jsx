"use client";
import dynamic from "next/dynamic";

import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
const MotionDiv = dynamic(() => import("framer-motion").then(mod => mod.motion.div), { ssr: false });
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  const services = [
    {
      id: 1,
      title: "МАРКЕТИНГ",
      description:
        "Мы создаем стратегии, которые работают. Наша команда анализирует рынок, разрабатывает индивидуальные подходы и находит оптимальные решения для достижения ваших бизнес-целей. От идеи до реализации — мы поможем вам покорить рынок.",
      hiddenContent: "Дополнительная информация о маркетинге...",
    },
    {
      id: 2,
      title: "БРЕНДИНГ",
      description:
        "Мы формируем яркие и запоминающиеся образы вашего бренда. Логотипы, фирменный стиль, брендинг под ключ — каждый элемент отражает суть вашего бизнеса и привлекает внимание клиентов.",
      hiddenContent: "Дополнительная информация о брендинге...",
    },
    {
      id: 3,
      title: "SMM",
      description:
        "Ваш бренд будет ближе к аудитории. Мы разработаем эффективные стратегии продвижения в социальных сетях, создаем уникальный контент и повышаем вовлеченность подписчиков.",
      hiddenContent: "Дополнительная информация о SMM...",
    },
    {
      id: 4,
      title: "web разработки",
      description:
        "Создаем сайты, которые продают. Функциональный дизайн, удобный интерфейс и четкая структура — это ключевые элементы наших веб-решений. Мы делаем сайты, которые работают на ваш бизнес.",
      hiddenContent: "Дополнительная информация о SMM...",
    },
    {
      id: 5,
      title: "ивенты",
      description: "От идеи до реализации — мы создаем события, которые запоминаются. Корпоративы, презентации, открытие новых локаций — каждое мероприятие станет уникальным и профессионально организованным.",
      hiddenContent: "Дополнительная информация о SMM...",
    },
    {
      id: 6,
      title: "продакшн",
      description: "Качественный визуальный контент — основа успеха. Мы создаем фото- и видеоматериалы, которые привлекают внимание и выгодно выделяют ваш бренд.",
      hiddenContent: "Дополнительная информация о SMM...",
    },
    {
      id: 7,
      title: "диджитал маркетинг",
      description: "Комплексный подход для роста вашего бизнеса. Мы используем современные цифровые инструменты и технологии, чтобы привлечь новую аудиторию, увеличить продажи и укрепить позиции вашего бренда.",
      hiddenContent: "Дополнительная информация о SMM...",
    }, {
      id: 8,
      title: "amo crm",
      description: "Автоматизация продаж и управление клиентами становятся проще с AmoCRM. Мы интегрируем и настраиваем систему так, чтобы она максимально соответствовала потребностям вашего бизнеса.",
      hiddenContent: "Дополнительная информация о SMM...",
    }
  ];

  const toggleContent = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white py-12 px-7">
      <div className="max-w mx-auto px-4 sm:px-6 lg:px-8">
        {services.map((service, index) => (
          <div key={service.id} className="pb-6 mb-6 last:border-b-0">
            <div className="flex items-center justify-between">
              <div className="flex gap-12">
                <div className="flex gap-4">
                  <span className="text-white text-4xl font-bold">
                    {service.id.toString().padStart(2, "0")}
                  </span>
                  <div className="w-px h-16 bg-red-500"></div>
                </div>
                <div className="max-w-4xl">
                  <h2 className="text-4xl font-bold text-red-500">
                    {service.title}
                  </h2>
                  <p className="text-gray-300 mt-8 text-xl italic">
                    {service.description}
                  </p>
                  {activeIndex === index && (
                    <MotionDiv
                      className="mt-4 p-4 bg-gray-800 rounded"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{service.hiddenContent}</p>
                    </MotionDiv>
                  )}
                </div>
              </div>
              <button
                className="text-gray-300 flex justify-center items-center gap-2 hover:text-red-500 ml-4"
                onClick={() => toggleContent(index)}
              >
                Подробнее
                <IoIosArrowDropdown />
              </button>
            </div>
          </div>
        ))}
      </div>
      <ContactForm/>
      <Footer/>
    </div>
  );
}
