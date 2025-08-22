import Navbar from '@organisms/Navbar';
import Hero from '@templates/Hero';
import ProjectsCards from '@templates/ProjectsCards';
import Footer from '@organisms/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Проекты | NewSite',
  description: 'Наши реализованные проекты и кейсы: веб‑разработка, автоматизация и современные цифровые решения.',
};

export default function ProjectsPage() {
  const items = [
    {
      title: 'Интернет-магазин эксклюзивных винных аксессуаров',
      description:
        'Интернет-магазин эксклюзивных винных аксессуаров ручной работы',
      imageUrl: '/projects/addwine/01.png',
      ctaVariant: 'arrow' as const,
      href: '/projects/addwine',
    },
    {
      title: 'Miniapp Coffee — мини‑приложение для кофейни',
      description:
        'Мини‑приложение для оформления заказов, оплаты и программ лояльности прямо в мобильном вебе.',
      imageUrl: '/projects/miniapp-coffee/1.png',
      ctaVariant: 'arrow' as const,
      href: '/projects/miniapp-coffee',
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
