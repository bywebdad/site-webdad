import Navbar from '@organisms/Navbar';
import Footer from '@organisms/Footer';
import Hero from '@templates/Hero';
import ServiceShowcase from '@templates/ServiceShowcase';
import WhyChooseUs from '@templates/WhyChooseUs';
import CTA from '@templates/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agile-разработка | WEBDAD',
  description: 'Как мы используем Agile-методологию в разработке проектов. Спринты, итерации и гибкое управление проектами для достижения лучших результатов.',
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function AgilePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero
          title="Agile-разработка"
          subtitle="Мы используем Agile-методологию для создания продуктов, которые действительно решают бизнес-задачи. Короткие итерации, постоянная обратная связь и адаптация под изменяющиеся требования — так мы гарантируем успех вашего проекта."
          primaryLabel="Обсудить проект"
          secondaryHref="/services"
          secondaryLabel="Наши услуги"
        />

        <ServiceShowcase
          id="agile-principles"
          title="Принципы Agile в нашей работе"
          subtitle="Как мы применяем гибкую методологию для достижения максимального результата"
          imageSrc="/brand/01.webp"
          imageAlt="Agile принципы"
          variant="rect"
          hideDecorations
          features={[
            {
              title: 'Итеративная разработка',
              description: 'Разбиваем проект на спринты по 1-2 недели. Каждый спринт — готовый функционал, который можно протестировать.'
            },
            {
              title: 'Постоянная обратная связь',
              description: 'Еженедельные демо, ретроспективы и планирование. Вы всегда в курсе прогресса и можете влиять на результат.'
            },
            {
              title: 'Адаптивность к изменениям',
              description: 'Готовы быстро реагировать на новые требования и изменения в бизнес-логике без потери времени.'
            },
            {
              title: 'Фокус на ценности',
              description: 'Приоритизируем функции по их влиянию на бизнес. Сначала делаем то, что принесет максимальную пользу.'
            }
          ]}
        />

        <WhyChooseUs
          title="Преимущества Agile-подхода"
          description="Почему гибкая методология эффективнее традиционного подхода"
          items={[
            {
              title: 'Быстрый выход на рынок',
              description: 'MVP готов уже через 4-6 недель. Можете начать получать обратную связь от пользователей и зарабатывать.',
              icon: '🚀'
            },
            {
              title: 'Прозрачность процесса',
              description: 'Ежедневные стендапы, спринт-ревью и демо. Вы всегда знаете, что происходит с вашим проектом.',
              icon: '👁️'
            },
            {
              title: 'Контроль бюджета',
              description: 'Фиксированная стоимость спринта. Можете остановиться в любой момент с готовым продуктом.',
              icon: '💰'
            },
            {
              title: 'Качество кода',
              description: 'Code review, автотесты и рефакторинг на каждом спринте. Технический долг не накапливается.',
              icon: '⚡'
            },
            {
              title: 'Гибкость планирования',
              description: 'Можете изменить приоритеты между спринтами. Реагируем на изменения рынка и потребности бизнеса.',
              icon: '🎯'
            },
            {
              title: 'Командная работа',
              description: 'Кросс-функциональная команда: разработчики, дизайнеры, тестировщики работают как единое целое.',
              icon: '🤝'
            }
          ]}
        />

        <ServiceShowcase
          id="agile-process"
          title="Как проходит Agile-проект"
          subtitle="Пошаговый процесс от идеи до готового продукта"
          imageSrc="/brand/01.webp"
          imageAlt="Процесс Agile-разработки"
          variant="blob"
          pillLabel="2-4 недели"
          features={[
            {
              title: 'Discovery & Planning',
              description: 'Изучаем бизнес-задачи, создаем Product Backlog, планируем архитектуру и первые спринты.'
            },
            {
              title: 'Sprint Planning',
              description: 'Выбираем задачи на спринт, оцениваем сложность, распределяем между командой.'
            },
            {
              title: 'Development Sprint',
              description: 'Ежедневные стендапы, разработка, тестирование, code review. Спринт длится 1-2 недели.'
            },
            {
              title: 'Sprint Review & Demo',
              description: 'Демонстрируем готовый функционал, собираем обратную связь, планируем следующий спринт.'
            }
          ]}
        />

        <div className="bg-gray-50 dark:bg-gray-800 py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Agile-инструменты в нашей работе
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Используем современные инструменты для эффективного управления проектами
              </p>
            </div>
            
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col items-start justify-between rounded-2xl bg-white dark:bg-gray-900 p-8 shadow-lg ring-1 ring-gray-200 dark:ring-gray-700">
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <span className="relative z-10 rounded-full bg-brand-50 dark:bg-jungle-900/50 px-3 py-1.5 font-medium text-brand-600 dark:text-jungle-400">
                      Планирование
                    </span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white">
                      Jira & Confluence
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-300">
                      Управление задачами, спринтами и документацией. Полная прозрачность процесса разработки.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start justify-between rounded-2xl bg-white dark:bg-gray-900 p-8 shadow-lg ring-1 ring-gray-200 dark:ring-gray-700">
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <span className="relative z-10 rounded-full bg-brand-50 dark:bg-jungle-900/50 px-3 py-1.5 font-medium text-brand-600 dark:text-jungle-400">
                      Коммуникация
                    </span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white">
                      Slack & Zoom
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-300">
                      Ежедневные стендапы, спринт-ревью и постоянная связь с командой в реальном времени.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start justify-between rounded-2xl bg-white dark:bg-gray-900 p-8 shadow-lg ring-1 ring-gray-200 dark:ring-gray-700">
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <span className="relative z-10 rounded-full bg-brand-50 dark:bg-jungle-900/50 px-3 py-1.5 font-medium text-brand-600 dark:text-jungle-400">
                      Разработка
                    </span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white">
                      Git & CI/CD
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-300">
                      Контроль версий, автоматическое тестирование и развертывание. Качество на каждом этапе.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CTA
          id="agile-cta"
          title="Готовы начать Agile-проект?"
          description="Обсудим ваши задачи, составим план спринтов и запустим разработку уже на следующей неделе."
          primaryAction={{
            href: '#',
            label: 'Оставить заявку'
          }}
          imageSrc="/brand/01.webp"
          imageAlt="Начать Agile-проект"
        />
      </main>
      <Footer />
    </div>
  );
}
