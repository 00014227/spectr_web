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
        "Мы разрабатываем маркетинговые стратегии, которые помогают вашему бизнесу выделиться на рынке и увеличить доход. Комплексный подход включает анализ, планирование, внедрение и контроль эффективности.",
      price: "от 2 000$",
      hiddenContent: {
        items: [
          "Проведение комплексного маркетингового анализа: изучение конкурентов, целевой аудитории и рыночных трендов.",
          "Разработка персонализированной маркетинговой стратегии с выбором подходящих каналов продвижения.",
          "Реализация оффлайн- и онлайн-кампаний: наружная реклама, контекстная реклама, SEO и таргетированная реклама.",
          "Предоставление регулярных отчетов о результатах с рекомендациями по оптимизации."
        ]
      }
    },
    {
      id: 2,
      title: "БРЕНДИНГ",
      description:
        "Создаем уникальные образы для вашего бренда, которые помогут запомниться клиентам и выделиться на фоне конкурентов. Все элементы — от логотипа до фирменного стиля — отражают ценности вашего бизнеса.",
      price: "от 1 000$",
      hiddenContent: {
        items: [
          "Разработка логотипа, цветовой палитры, шрифтов и других элементов фирменного стиля.",
          "Создание брендбука с рекомендациями по применению всех визуальных элементов бренда.",
          "Определение философии, миссии и ценностей бренда для усиления его позиции на рынке.",
          "Подготовка коммуникационной стратегии для взаимодействия с клиентами."
        ]
      }
    },
    {
      id: 3,
      title: "SMM",
      description:
        "Управляем вашими социальными сетями, чтобы увеличить охват, вовлеченность и лояльность аудитории. Мы создаем уникальный контент и проводим рекламные кампании, направленные на рост вашего бизнеса.",
      price: "от 1 000$",
      hiddenContent: {
        items: [
          "Разработка контент-плана, включающего до 20 постов в месяц.",
          "Проведение фотосессий для создания качественного визуального контента (до 60 фото).",
          "Создание и запуск таргетированной рекламы для точного попадания в целевую аудиторию.",
          "Анализ эффективности работы и ежемесячные отчеты с рекомендациями по улучшению."
        ]
      }
    },
    {
      id: 4,
      title: "WEB-РАЗРАБОТКИ",
      description:
        "Разрабатываем сайты любой сложности, которые помогают вашему бизнесу быть заметным в интернете. От функционального дизайна до интеграции CRM — наши решения работают на ваш успех.",
      price: "от 2 000$",
      hiddenContent: {
        items: [
          "Создание одностраничных и многостраничных сайтов с адаптивным дизайном (до 15 страниц).",
          "Интеграция с CRM-системами для автоматизации работы и улучшения клиентского сервиса.",
          "SEO-оптимизация для повышения позиций в поисковых системах.",
          "Техническая поддержка и регулярное обновление сайта для стабильной работы."
        ]
      }
    },
    {
      id: 5,
      title: "ИВЕНТЫ",
      description:
        "Организуем мероприятия любого уровня сложности, которые помогают вашему бренду стать ближе к клиентам. От концепции до пост-ивента — всё продумано до мелочей.",
      price: "от 1 000$",
      hiddenContent: {
        items: [
          "Разработка уникальной концепции мероприятия, соответствующей целям бренда.",
          "Полная организация: выбор площадки, оформление, техническая поддержка и координация программы.",
          "Проведение рекламных кампаний для привлечения участников.",
          "Создание фото- и видеоматериалов для дальнейшего продвижения."
        ]
      }
    },
    {
      id: 6,
      title: "ПРОДАКШН",
      description:
        "Создаем качественный фото- и видеоконтент, который помогает вашему бренду выделиться. Мы гарантируем профессиональный подход и оригинальные идеи.",
      price: "от 500$",
      hiddenContent: {
        items: [
          "Проведение профессиональных фотосессий (модельная, предметная, репортажная).",
          "Создание рекламных видеороликов для социальных сетей и цифровых платформ.",
          "Монтаж и обработка видео и фото с использованием современных технологий.",
          "Добавление спецэффектов и анимации для привлечения внимания аудитории."
        ]
      }
    },
    {
      id: 7,
      title: "ДИДЖИТАЛ МАРКЕТИНГ",
      description:
        "Комплексный подход к цифровому продвижению вашего бренда. Мы используем современные инструменты для увеличения видимости, привлечения клиентов и роста продаж.",
      price: "от 1 000$",
      hiddenContent: {
        items: [
          "SEO-оптимизация сайта для улучшения позиций в поисковых системах.",
          "Контекстная реклама: настройка и управление рекламными кампаниями.",
          "E-mail и SMS-рассылки для работы с клиентской базой.",
          "Анализ эффективности и регулярные рекомендации по улучшению."
        ]
      }
    },
    {
      id: 8,
      title: "AMO CRM",
      description:
        "Интеграция AmoCRM для автоматизации продаж и оптимизации работы с клиентами. Мы адаптируем систему под ваши задачи и обучаем команду.",
      price: "от 500$",
      hiddenContent: {
        items: [
          "Интеграция CRM с вашим сайтом и социальными сетями.",
          "Настройка воронок продаж и автоматизация повторяющихся процессов.",
          "Обучение сотрудников работе с системой и поддержка на всех этапах.",
          "Регулярный мониторинг и доработка системы для повышения эффективности."
        ]
      }
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
              <div className="md:flex block gap-12">
                <div className="flex gap-4">
                  <span className="text-white text-4xl font-bold font-evolventa">
                    {service.id.toString().padStart(2, "0")}
                  </span>
                  <div className="w-px h-16 bg-red-500"></div>
                  <h2 className=" block md:hidden text-4xl font-bold text-red-500 font-evolventa">
                    {service.title}
                  </h2>
                </div>
                <div className="max-w-4xl">
                  <h2 className="md:block hidden text-4xl font-bold text-red-500 font-evolventa">
                    {service.title}
                  </h2>
                  <p className="text-gray-300 md:block hidden mt-8 text-xl italic font-evolventa">
                    {service.description}
                  </p>
                  {activeIndex === index && (
                    <MotionDiv
                      className="mt-4 p-6 bg-gray-800 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-red-500/50"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-gray-100">
                        <h3 className="text-2xl font-bold text-red-400 mb-4 font-evolventa">
                          Подробнее о {service.title.toLowerCase()}
                        </h3>
                        <p className="text-gray-300 mb-4 font-evolventa">Что входит:</p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300 font-evolventa">
                          {service.hiddenContent.items.map((item, idx) => (
                            <li className="font-evolventa" key={idx}>{item}</li>
                          ))}
                        </ul>
                        <p className="text-gray-300 mt-4 font-evolventa">
                          <span className="font-bold text-gray-100 font-evolventa">Стоимость:</span> {service.price}
                        </p>
                        <div className="flex items-center gap-4 mt-4">
                          <button className="bg-red-500 text-white font-evolventa px-6 py-2 rounded-lg hover:bg-red-600 transition-colors">
                            Связаться с нами
                          </button>

                        </div>
                      </div>
                    </MotionDiv>

                  )}
              
                </div>
                <p className="text-gray-300 md:hidden block mt-8 text-xl italic font-evolventa">
                    {service.description}
                  </p>

                  <button
                className="text-gray-300 md:hidden flex justify-end mt-2 items-center gap-2 hover:text-red-500 ml-auto font-evolventa"
                onClick={() => toggleContent(index)}
              >
                Подробнее
                <IoIosArrowDropdown />
              </button>
              </div>
              <button
                className="text-gray-300 md:flex hidden justify-center items-center gap-2 hover:text-red-500 ml-4 font-evolventa"
                onClick={() => toggleContent(index)}
              >
                Подробнее
                <IoIosArrowDropdown />
              </button>
            </div>
          </div>
        ))}
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}
