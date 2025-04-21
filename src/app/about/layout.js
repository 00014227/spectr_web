export const metadata = {
    title: 'О нас | Spectr — Маркетинговое агентство в Узбекистане',
    description: 'Узнайте больше о маркетинговом агентстве Spectr: наша миссия, ценности, партнеры и подход к развитию.',
    keywords: ['маркетинг', 'агентство', 'Узбекистан', 'брендинг', 'SMM', 'веб-разработка'],
    openGraph: {
      title: 'О нас | Spectr',
      description: 'Узнайте больше о маркетинговом агентстве Spectr: наша миссия, ценности, партнеры и подход к развитию.',
      url: 'https://spectr-web-95k6.vercel.app/about',
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
      title: 'О нас | Spectr',
      description: 'Узнайте больше о маркетинговом агентстве Spectr: наша миссия, ценности, партнеры и подход к развитию.',
      images: ['https://spectr-web-95k6.vercel.app/images/logo.png'],
    },
  };

export default function AboutLayout({ children }) {
    return (
      <div>
    
        <main>{children}</main>
      </div>
    );
  }
  