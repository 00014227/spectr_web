"use client"
import { useState } from 'react';
import { IoChevronDownCircleOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    title: 'Маркетинг',
    description: `Мы помогаем бизнесу расти, развиваться и выходить на новый уровень. Разрабатываем индивидуальные маркетинговые стратегии, которые учитывают особенности вашей отрасли, целевую аудиторию и конкурентов.`,
    details: `
      Что входит:
      1. Анализ рынка и аудит бренда.
      2. Разработка маркетинговой стратегии.
      3. Планирование рекламных кампаний.
      4. Анализ эффективности и оптимизация.
      
      Результат: Увеличение продаж, повышение узнаваемости бренда и долгосрочная лояльность клиентов.
    `,
  },
  {
    title: 'Брендинг',
    description: `Создаем уникальный образ вашего бренда, который выделит вас среди конкурентов и надолго останется в памяти клиентов.`,
    details: `
      Что входит:
      1. Разработка айдентики (логотип, цветовая палитра, шрифты).
      2. Создание брендбука.
      3. Формирование УТП (уникального торгового предложения).
      4. Визуальное и коммуникационное позиционирование.
      
      Результат: Целостный и узнаваемый бренд, который вызывает доверие и привлекает внимание аудитории.
    `,
  },
  {
    title: 'SMM',
    description: `Продвигаем ваш бизнес в социальных сетях — от стратегии до контента и рекламы. Привлекаем подписчиков и превращаем их в клиентов.`,
    details: `
      Что входит:
      1. Разработка SMM-стратегии.
      2. Ведение аккаунтов (контент, сторис, взаимодействие с аудиторией).
      3. Таргетированная реклама.
      4. Анализ статистики и отчетность.
      
      Результат: Рост подписчиков, увеличение вовлеченности и повышение продаж через соцсети.
    `,
  },
  {
    title: 'WEB разработки',
    description: `Создаем современные и удобные сайты, которые работают на результат — от лендингов до многостраничных платформ.`,
    details: `
      Что входит:
      1. Разработка дизайна и UX/UI.
      2. Верстка и программирование.
      3. Интеграция с системами аналитики и CRM.
      4. Тестирование и запуск проекта.
      
      Результат: Функциональный сайт, который отражает ваш бренд и помогает достигать бизнес-целей.
    `,
  },
  {
    title: 'Остальные услуги',
    description: `Предлагаем комплекс дополнительных услуг для комплексного продвижения и развития вашего бизнеса.`,
    details: `
      Что входит:
      1. Фото- и видеосъёмка.
      2. Создание презентаций и коммерческих предложений.
      3. Email-маркетинг и рассылки.
      4. Настройка и аналитика digital-инструментов.
      
      Результат: Полноценное сопровождение, которое усиливает ваш бренд на всех уровнях коммуникации.
    `,
  },
];


export default function ServicesTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col md:flex-row p-6 md:py-11 md:p-0  bg-black text-white">
      <div className="flex flex-col w-full md:w-1/3 mb-6 md:mb-0">
        {services.map((service, index) => (
          <button
            key={index}
            className={`text-left py-8 px-2 transition-colors duration-300 border-b border-t border-red-500 font-evolventa ${
              activeTab === index ? 'text-red-500' : 'text-white'
            } hover:text-red-500`}
            onClick={() => setActiveTab(index)}
          >
            {service.title}
          </button>
        ))}
      </div>
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="flex-1 md:pl-12"
      >
        <h2 className="md:text-3xl text-xl font-bold font-evolventa mb-4">{services[activeTab].title}</h2>
        <p className="md:text-lg text-base mb-6 font-evolventa">{services[activeTab].description}</p>
        {services[activeTab].details && (
          <pre className="text-lg mb-8 whitespace-pre-wrap font-evolventa">
            {services[activeTab].details}
          </pre>
        )}
        <Link href="/services" className="border font-evolventa border-red-500 px-6 py-2 rounded-full hover:bg-red-500 transition duration-300 inline-flex items-center gap-2">
          Подробнее <IoChevronDownCircleOutline className="text-2xl" />
        </Link>
      </motion.div>
    </div>
  );
}
