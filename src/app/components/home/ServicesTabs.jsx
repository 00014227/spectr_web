"use client"
import { useState } from 'react';
import { IoChevronDownCircleOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';

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
  { title: 'Брендинг', description: 'Описание услуг брендинга...' },
  { title: 'SMM', description: 'Описание услуг SMM...' },
  { title: 'WEB разработки', description: 'Описание услуг веб-разработки...' },
  { title: 'Остальные услуги', description: 'Описание остальных услуг...' },
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
        <button className="border font-evolventa border-red-500 px-6 py-2 rounded-full hover:bg-red-500 transition duration-300 inline-flex items-center gap-2">
          Подробнее <IoChevronDownCircleOutline className="text-2xl" />
        </button>
      </motion.div>
    </div>
  );
}
