"use client"

import React from 'react'
import NavBar from '../components/NavBar'
import InfoAbout from '../components/about/InfoAbout'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'
import Image from 'next/image'
import { motion } from 'framer-motion';


const values = {
    header: "наши ценности",
    sub_title: "Стремление к сотрудничеству:",
    paragraph: "Мы верим в сотрудничество как ключевой фактор успеха. Мы работаем в партнерстве с клиентами, чтобы достичь общих целей.",
    list: [
        {
            id: "01",
            title: "Результативность",
            paragraph: "Наша первоочередная цель — достижение конкретных результатов для клиентов. Мы рассматриваем успех клиентов как мерило эффективности наших действий и бизнес-процессов."
        },
        {
            id: "03",
            title: "Профессионализм",
            paragraph: '"Spectr" стремится к высшему профессиональному уровню во всех аспектах своей деятельности. Мы создаем высококлассные идеи и решения, чтобы предоставить клиентам лучшие результаты.'
        },
        {
            id: "02",
            title: "Творчество и инновации",
            paragraph: "Мы поддерживаем творческий подход к решению задач и активно внедряем инновации в маркетинговые стратегии, чтобы превзойти ожидания клиентов."
        },
        {
            id: "04",
            title: "Честность и надежность",
            paragraph: "Мы ценим доверие наших клиентов и стремимся к честным и надежным отношениям. Мы всегда придерживаемся высоких стандартов этики в своей работе."
        }
    ]
}

const partners = {
    header: "Наши партнеры",
    sub_title: "Выгодное размещение рекламы - через наше агентство вы получите скидку до -50% у наших партнеров.",
    paragraph: "Партнерство нашего агентства с разнообразными организациями, включая СМИ, блоггеров, компаний наружной рекламы, полиграфии - является одним из ключевых элементом нашей стратегии для достижения наилучших результатов и максимальной выгоды для наших клиентов. Партнерство предоставляет нам доступ к эксклюзивным рекламным площадкам и партнерским скидкам, которые не доступны другим.",
    list: [
        {
            id: "01",
            title: "СМИ",
            paragraph: "Сотрудничество с СМИ - возможность для расширения охвата самой влиятельной и многочисленной аудитории. Мы устанавливаем партнерские отношения с различными изданиями, включая онлайн и офлайн новостные каналы, газеты, журналы, радио и телевидение."
        },
        {
            id: "03",
            title: "Блоггеры",
            paragraph: 'Сотрудничество с блоггерами и инфлюенсерами позволяет нам создавать уникальный контент и достигать целевой аудитории. Мы устанавливаем партнерские связи с популярными блоггерами, чья аудитория соответствует интересам клиентов. Благодаря нашим отношениям, мы обеспечиваем клиентам доступ к эксклюзивным коллаборациям.'
        },
        {
            id: "02",
            title: "Наружная реклама",
            paragraph: "Сотрудничество с компаниями, специализирующимися на наружной рекламе, позволяет нам создавать эффективные рекламные кампании в городе и внутри помещений. Мы работаем с надежными партнерами, что позволяет нам обеспечивать клиентов доступом к привлекательным рекламным площадям."
        },
        {
            id: "04",
            title: "Печатные компании",
            paragraph: "Наши партнеры по полиграфии и производству рекламных конструкций предоставляют клиентам выгодные цены на печать рекламных материалов и изготовление рекламных конструкций. Это позволяет клиентам получать высококачественные рекламные материалы по доступным ценам."
        }
    ]
}

const grow = {
    header: "рост и развитие",
    sub_title: "",
    paragraph: "Рост и развитие сотрудников в маркетинг-агентстве 'Spectr' имеют высокий приоритет, поскольку квалифицированный персонал играет решающую роль в достижении успеха и удовлетворения клиентов. Вот ключевые моменты, описывающие точки роста и развития сотрудников:",
    list: [
        {
            id: "01",
            title: "Обучение и развитие",
            paragraph: "Маркетинг-агентство Spectr инвестирует в профессиональное обучение и развитие сотрудников. Это включает в себя участие в семинарах, тренингах, онлайн-курсах и мастер-классах по актуальным маркетинговым темам. Сотрудники имеют доступ к ресурсам и обучению, что помогает им оставаться в курсе последних тенденций и инноваций в отрасли."
        },
        {
            id: "03",
            title: "Ментерство и коучинг",
            paragraph: '«Spectr" предоставляет менторскую поддержку и коучинг сотрудникам, чтобы помочь им развиваться и достигать своих профессиональных целей. Это также способствует передаче знаний и опыта более опытными членами команды молодым специалистам.'
        },
        {
            id: "02",
            title: "Создание команды",
            paragraph: '"«Spectr" поощряет сотрудничество и работу в команде. Это способствует обмену знаний и идеями, что помогает всем членам команды расти и развиваться.'
        },
        {
            id: "04",
            title: "Участие в проектах",
            paragraph: "Сотрудники могут участвовать в разнообразных проектах, что позволяет им развивать свой опыт и экспертизу в различных областях маркетинга."
        }
    ]
}

function About() {
    return (
        <div className=" bg-black h-auto">
            {/* Background Layer with Pseudo-Element */}
            <div className="relative">

          
            <div className="absolute inset-0 bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-[url('/about_bg.png')] before:rotate-120  before:opacity-10"></div>

            {/* Content Layer */}
            <div className="relative  z-10 space-y-20">
                <NavBar />
                <motion.div
            className="flex flex-col justify-center 2xl:max-w-7.5xl max-w-7.5xl mx-auto text-center px-32 sm:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <motion.h1
                className="text-red-500 text-3xl sm:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
            >
                О НАС
            </motion.h1>
            <motion.h2
                className="text-lg sm:text-2xl 2xl:text-3xl italic mb-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                Добро пожаловать в Spectr
            </motion.h2>
            <motion.p
                className="2xl:text-2xl text-lg sm:text-xl mb-6"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                Мы — маркетинговое агентство, объединяющее страсть к креативу и стремление к результату. Наша миссия — помочь вашему бизнесу выделиться, привлечь внимание целевой аудитории и достичь амбициозных целей.
            </motion.p>

            <motion.h3
                className="2xl:text-3xl text-xl sm:text-2xl font-semibold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                Почему выбирают нас:
            </motion.h3>
            <motion.ul
                className="list-disc list-inside 2xl:text-2xl text-lg sm:text-xl pl-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.8 }}
            >
                <motion.li
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    Команда профессионалов:
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    Мы собрали экспертов в области маркетинга, брендинга, SMM и веб-разработки. Каждый член команды вносит свой уникальный вклад, чтобы ваши проекты сияли.
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Индивидуальный подход:
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    Мы верим, что каждый бизнес уникален. Вместе мы создаем решения, которые подойдут именно вам.
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    Креативные идеи:
                </motion.li>
                <motion.li
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                >
                    Наше агентство черпает вдохновение в космосе, создавая идеи, которые выходят за пределы стандартов и формируют запоминающиеся бренды.
                </motion.li>
            </motion.ul>

            <motion.h3
                className="2xl:text-3xl text-xl sm:text-2xl font-semibold mt-8 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 1 }}
            >
                Наша философия
            </motion.h3>
            <motion.p
                className="2xl:text-2xl text-lg sm:text-xl"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 1.2 }}
            >
                Мы смотрим на маркетинг как на искусство и науку. Наша работа — это не только цифры и отчеты, но и создание визуальных и концептуальных историй, которые трогают сердца и запоминаются надолго.
            </motion.p>
        </motion.div>

                <InfoAbout values={values}/>
            </div>
            </div>


            <div className="space-y-20 mt-20 bg-[url('/about_bg2.png')] bg-no-repeat bg-center">
                <InfoAbout values={partners}/>
                <InfoAbout values={grow}/>
            </div>

            <section className=" flex flex-col justify-center max-w-6xl space-y-10 mt-20 mx-auto">
                <h2 className="text-red-500 text-3xl sm:text-4xl font-bold uppercase mb-4">Социяальная <br/> ответственность</h2>
                <div className="flex max-w-2xl space-x-16 items-center">
                    <Image className=" w-20 h-20" src="/about_icon1.png" width={120} height={100} alt="gweg"/>
                    <div className=" space-y-4">
                        <h3 className=" text-white text-4xl">Финансовая поддержка</h3>
                        <p className="text-white">Маркетинг-агентство "Spectr" регулярно выделяет деньги организациям благотворительности или конкретным проектам, которые соответствуют нашим ценностям и целям.</p>
                    </div>
                </div>

                <div className="flex max-w-2xl space-x-16 items-center">
                    <Image className=" w-20 h-20" src="/about_icon2.png" width={120} height={100} alt="gweg"/>
                    <div className=" space-y-4">
                        <h3 className=" text-white text-4xl">Защита окружающей среды</h3>
                        <p className="text-white">Маркетинг-агентство "Spectr" сосредоточила свои усилия на экологических и устойчивых инициативах, что помогает в сохранении окружающей среды.</p>
                    </div>
                </div>

                <div className="flex max-w-2xl space-x-16 items-center">
                    <Image className=" w-20 h-20" src="/about_icon3.png" width={120} height={100} alt="gweg"/>
                    <div className=" space-y-4">
                        <h3 className=" text-white text-4xl">Образование</h3>
                        <p className="text-white">Так же мы спонсируем образовательные программы или стипендии для молодых талантов, что способствует развитию и поддержке образования.</p>
                    </div>
                </div>

          
            </section>

            <ContactForm/>
            <Footer/>
        </div>

    )
}

export default About