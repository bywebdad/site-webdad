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
        <ProjectsCards id="projects-list" className="py-16" />
      </main>
      <Footer />
    </div>
  );
}
