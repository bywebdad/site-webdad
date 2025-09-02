import type { Metadata } from 'next';
import Navbar from '@organisms/Navbar';
import Footer from '@organisms/Footer';
import ProjectDetails from '@templates/ProjectDetails';
import ProjectHero from '@features/projects/organisms/ProjectHero';
import ProjectResults from '@features/projects/organisms/ProjectResults';
import ProjectOverview from '@features/projects/organisms/ProjectOverview';
import { PaperAirplaneIcon, FunnelIcon, ArrowPathIcon } from '@heroicons/react/20/solid';
import ArtPrototyping from '@features/projects/atoms/ArtPrototyping';
import ArtVersionControl from '@features/projects/atoms/ArtVersionControl';
import ArtUIComponents from '@features/projects/atoms/ArtUIComponents';
import ArtCollaboration from '@features/projects/atoms/ArtCollaboration';
import ArtDesignSystem from '@features/projects/atoms/ArtDesignSystem';
import Blog from '@templates/Blog';
import RequestForm from '@organisms/RequestForm';
import SectionHeading from '@atoms/SectionHeading';

export const metadata: Metadata = {
  title: 'Образовательная платформа для корпоративного обучения',
  description:
    'Мини‑приложение для аренды недвижимости, связь с риелтором и помощь в оформлении сделки.',
  openGraph: {
    title: 'Образовательная платформа для корпоративного обучения',
    description:
      'Мини‑приложение для аренды недвижимости, связь с риелтором и помощь в оформлении сделки.',
    images: [{ url: '/projects/upgrade/02.png' }],
    type: 'article',
  },
};

export default function UpgradePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-gray-900 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <ProjectHero
          title="Образовательная платформа для корпоративного обучения"
          subtitle="Наша команда разработала платформу, которая позволяет корпоративным организациям предоставлять обучение в удобном и эффективном формате."
          imageSrc="/projects/upgrade/02.png"
          imageAlt="Скриншот интерфейса Miniapp Coffee"
          year={2022}
          stack={["Next.js", "React", "TailwindCSS"]}
        />
        <ProjectResults
          title="Результаты"
          items={[
            {
              title: 'Корпоративное обучение',
              description:
                'Индивидуальные треки, закрытые группы, интеграция с внутренними процессами',
              tags: ['Стек', 'Технологии', 'Культура', 'Принципы работы'],
              imageSrc: '/projects/upgrade/05.png',
              imageFit: 'cover',
              colSpanMd: 1,
            },
            {
              title: 'Программа обучения',
              description:
                 'Обучение построено вокруг реальных задач из жизни нашей IT-компании. С гибким графиком и возможностью выбора направления.',
              tags: ['Hello World', 'Git', 'React', 'TypeScript', 'TailwindCSS'],
              imageSrc: '/projects/upgrade/04.png',
              imageFit: 'cover',
              colSpanMd: 1,
            },
            {
              title: 'Административная панель',
              description:
                'Удобная панель управления для отслеживания прогресса студентов: выполненные задания, активность, статус ревью, сильные и слабые стороны.',
              tags: ['HR', 'Поддержка', 'Аналитика'],
              imageSrc: '/projects/upgrade/06.png',
              imageFit: 'contain',
              colSpanMd: 1,
            }
          ]}
        />
        
        <ProjectOverview
          eyebrow="Кейс"
          title="Как мы перезапустили обучение в IT — без лекций, с реальным кодом"
          intro="Мы — IT-компания, которая сама строит сложные продукты, масштабирует проекты и решает реальные задачи."
          image={{ src: '/projects/upgrade/09.jpg', alt: 'Скриншоты AddWine' }}
          content={[
            'Почему junior-разработчик должен учиться на "игрушечных" задачах, если вокруг — миллионы настоящих?',
            'И мы решили: хватит готовить к экзаменам. Пора готовить к профессии.',
            'Мы — действующая IT-компания, которая сама строит сложные продукты, масштабирует сервисы и решает задачи, от которых зависят бизнесы.',
            'И мы решили: если мы обучаем своих новых разработчиков внутри команды — почему бы не открыть этот процесс для других?',
            'Так родился WEBDAD Upgrade — платформа, где обучение начинается там, где заканчиваются учебники.'
          ]}
          features={[
          ]}
          showPattern
        />

      <Blog
        eyebrow="Ещё по проекту"
        title="Статьи как мы реализовали проект для агентства недвижимости"
        subtitle="Заметки об интеграциях с CRM и автоматизацией подбора объектов для клиентов."
      />  

        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-0">
            <SectionHeading as="h2" align="left" size="lg" className="mb-6">
              Обсудим ваш проект
            </SectionHeading>
            <RequestForm source="addwine" variant="glass" />
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
