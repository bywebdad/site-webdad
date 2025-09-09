import Navbar from '@organisms/Navbar';
import Hero from '@templates/Hero';
import ProjectsCards from '@templates/ProjectsCards';
import Footer from '@organisms/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Проекты | WEBDAD',
  description: 'Наши реализованные проекты и кейсы: веб‑разработка, автоматизация и современные цифровые решения.',
};

export default function ProjectsPage() {
  const items = [
    {
      title: 'Телегарам-бот для агентства недвижимости',
      description:
        'Мини-приложение для аренды недвижимости, связь с риелтором и помощь в оформлении сделки.',
      imageUrl: '/projects/GRE/01.png',
      ctaVariant: 'arrow' as const,
      href: '/projects/realt-estate-miniapp',
    },
    {
      title: 'Интернет-магазин эксклюзивных винных аксессуаров',
      description:
        'Интернет-магазин эксклюзивных винных аксессуаров ручной работы',
      imageUrl: '/projects/addwine/01.png',
      ctaVariant: 'arrow' as const,
      href: '/projects/addwine',
    },
    {
      title: 'Аналитические дашборды рынка недвижимости',
      description:
        'Мы разработали комплексную систему аналитики, которая отображает ключевые метрики рынка в режиме реального времени.',
      imageUrl: '/projects/real-estate-analytics/01.mp4',
      ctaVariant: 'arrow' as const,
      href: '/projects/real-estate-analytics',
    },
    {
      title: 'Miniapp Coffee — мини‑приложение для кофейни',
      description:
        'Мини‑приложение для оформления заказов, оплаты и программ лояльности прямо в мобильном вебе.',
      imageUrl: '/projects/miniapp-coffee/1.png',
      ctaVariant: 'arrow' as const,
      href: '/projects/miniapp-coffee',
    },
    {
      title: 'Upgrade — образовательная платформа для корпоративного обучения',
      description:
        'WEBDAD Upgrade — образовательная платформа для корпоративного обучения',
      imageUrl: '/projects/upgrade/02.png',
      ctaVariant: 'arrow' as const,
      href: '/projects/upgrade',
    },
    {
      title: 'Корпоративный сайт застройщика жилых комплексов',
      description:
        'От дизайна до разработки корпоративного сайта застройщика элитного жилья',
      imageUrl: '/projects/amatar/01.png',
      ctaVariant: 'arrow' as const,
      href: '/projects/amatar',
    },
    {
      title: 'Система геовизуализации от идеи до промышленного решения',
      description:
        'Система геовизуализации для анализа и визуализации данных на карте.',
      imageUrl: '/projects/geomarketing/09.png',
      ctaVariant: 'arrow' as const,
      href: '/projects/geomarketing',
    },
    {
      title: 'Современный интернет-магазин для бокалов Sophienwald',
      description:
        'Каждый бокал заслуживает не только великолепного вина — но и достойного представления',
      imageUrl: '/projects/sophienwald/01.png',
      ctaVariant: 'arrow' as const,
      href: '/projects/sophienwald',
    },
  ];
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero
          title="Наши проекты"
          subtitle="Подборка кейсов, которые помогли нашим клиентам ускорить бизнес, автоматизироваться и вырасти."
          primaryLabel="Обсудить проект"
          secondaryHref="#projects-list"
          secondaryLabel="Смотреть кейсы"
        />
        <ProjectsCards id="projects-list" className="py-16" items={items} />
      </main>
      <Footer />
    </div>
  );
}
