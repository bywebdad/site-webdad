import type { Metadata } from 'next';
import Navbar from '@organisms/Navbar';
import Footer from '@organisms/Footer';
import ProjectDetails from '@templates/ProjectDetails';
import ProjectHero from '@features/projects/organisms/ProjectHero';
import ProjectResults from '@features/projects/organisms/ProjectResults';
import ProjectOverview from '@features/projects/organisms/ProjectOverview';
import { ChartBarIcon, UserGroupIcon, ClockIcon } from '@heroicons/react/20/solid';
import ArtPrototyping from '@features/projects/atoms/ArtPrototyping';
import ArtVersionControl from '@features/projects/atoms/ArtVersionControl';
import ArtUIComponents from '@features/projects/atoms/ArtUIComponents';
import ArtCollaboration from '@features/projects/atoms/ArtCollaboration';
import ArtDesignSystem from '@features/projects/atoms/ArtDesignSystem';

export const metadata: Metadata = {
  title: 'SaaS-приложение для руководителей и команд, которым важен реальный прогресс, а не отчёты о занятости.',
  description:
    'Наш сервис помогает организовать рабочие процессы и достигать лучших результатов вместе с вашей командой',
  openGraph: {
    title: 'SaaS-приложение для руководителей и команд, которым важен реальный прогресс, а не отчёты о занятости.',
    description:
      'Наш сервис помогает организовать рабочие процессы и достигать лучших результатов вместе с вашей командой',
    images: [{ url: '/projects/journal/01.png' }],
    type: 'article',
  },
};

export default function JournalPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-gray-900 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <ProjectHero
          title="SaaS-приложение для руководителей и команд"
          subtitle="Разработали веб-сервис для управления проектами и командами, которым важен реальный прогресс, а не отчёты о занятости."
          imageSrc="/projects/journal/01.png"
          imageAlt="Скриншот интерфейса Journal"
          year={2025}
          stack={["Next.js", "TypeScript", "TailwindCSS"]}
        />
        <ProjectResults
          title="Результаты"
          items={[
            {
              title: 'Организуйте командную работу ',
              description:
                'Управляйте работой вашей команды эффективно. Создавайте задачи, назначайте исполнителей и отслеживайте результаты в реальном времени',
              tags: ['Interactive', 'Animations'],
              imageSrc: '/projects/journal/03.png',
              imageFit: 'contain',
            },
            {
              title: 'Настройте рабочие процессы',
              description:
                'Journal помогает выстроить чёткую структуру: каждый сотрудник понимает свою зону ответственности и приоритеты.',
              tags: ['History', 'Branching'],
              imageSrc: '/projects/journal/06.png',
              imageFit: 'contain',
            },
            {
              title: 'Не задачи. А прогресс',
              description:
                'Чек-листы и регулярные обновления исключают путаницу и срывы сроков.',
              tags: ['Library', 'Variants'],
              imageSrc: '/projects/journal/02.png',
              imageFit: 'contain',
            },
            {
              title: 'Контролируйте процессы',
              description:
                'Journal отслеживает выполнение задач, выявляет узкие места и задержки в работе. Руководитель получает данные в удобной форме и может оперативно влиять на результат.',
              tags: ['Live Editing', 'Comments', 'Presence'],
              imageSrc: '/projects/journal/04.png',
              imageFit: 'contain',
              colSpanMd: 2,
            },
            {
              title: 'Развивайте ответственность',
              description: 'Платформа укрепляет командную дисциплину: каждый участник видит общий прогресс и вклад коллег. Это повышает мотивацию, ускоряет согласование и создаёт атмосферу доверия.',
              tags: ['Tokens', 'Styles'],
              imageSrc: '/projects/journal/07.png',
              imageFit: 'contain',
              colSpanMd: 1,
            },
          ]}
        />
        
        <ProjectOverview
          eyebrow="Кейс"
          title="Journal — о продукте"
          intro="Journal — инструмент для тех, кто работает не ради задач, а ради результата. В большинстве команд рутинные встречи, бесконечные чаты и списки задач превращаются в иллюзию продуктивности."
          image={{ src: '/projects/journal/08.png', alt: 'Скриншоты Journal' }}
          content={[
            'Задачи закрываются. Сообщения летят. А прогресс остаётся где-то за кадром.',
            'Мы задались вопросом: Как помочь командам перестать "быть занятыми" — и начать двигаться вперёд? Так родился Journal — не просто ещё один таск-менеджер, а платформа для осознанной, результативной работы.',
            '🎯 Не задачи. А прогресс, который видно! Journal помогает командам: Ежедневно фокусироваться на главном, Делиться короткими апдейтами — без переписок и суеты.',
            'Чек-листы, которые держат в фокусе. Каждый участник видит свою структуру — понятную, предсказуемую, поддерживающую ритм.',
            'Journal — это не просто инструмент для отчётов. Это система, которая помогает командам чувствовать настоящий результат. Потому что продуктивность — это не количество закрытых задач, а ощущение движения к общей цели.'
          ]}
          features={[
            {
              icon: <ChartBarIcon className="size-5" />,
              title: 'Визуализация прогресса',
              description: 'Наглядные дашборды и отчёты показывают реальный прогресс команды, а не просто количество выполненных задач.'
            },
            {
              icon: <UserGroupIcon className="size-5" />,
              title: 'Командная синхронизация',
              description: 'Каждый участник видит общую картину и свой вклад. Прозрачность процессов укрепляет доверие в команде.'
            },
            {
              icon: <ClockIcon className="size-5" />,
              title: 'Фокус на результате',
              description: 'Система помогает концентрироваться на важном, исключая бесполезные встречи и отчёты о занятости.'
            }
          ]}
          showPattern
        />

        


      </main>
      <Footer />
    </div>
  );
}
