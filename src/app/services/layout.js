
export const metadata = {
  title: 'Услуги | Spectr — Маркетинговое агентство в Узбекистане',
  description: 'Ознакомьтесь с полным спектром услуг агентства Spectr: брендинг, веб-разработка, SMM, таргетированная реклама и другие маркетинговые решения.',
  keywords: ['услуги маркетинга', 'брендинг', 'веб-разработка', 'таргетинг', 'SMM', 'дизайн', 'маркетинговое агентство', 'Узбекистан'],
  openGraph: {
    title: 'Услуги | Spectr',
    description: 'Ознакомьтесь с полным спектром услуг агентства Spectr: брендинг, веб-разработка, SMM, таргетированная реклама и другие маркетинговые решения.',
    url: 'https://spectr-web-95k6.vercel.app/services',
    images: [
      {
        url: 'https://spectr-web-95k6.vercel.app/images/logo.png',
        width: 800,
        height: 600,
        alt: 'Spectr Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Услуги | Spectr',
    description: 'Ознакомьтесь с полным спектром услуг агентства Spectr: брендинг, веб-разработка, SMM, таргетированная реклама и другие маркетинговые решения.',
    images: ['https://spectr-web-95k6.vercel.app/images/logo.png'],
  },
};


export default function ServiceLayout({ children }) {
    
    return (
      <div>
    
      <main>{children}</main>
    </div>
    );
  }