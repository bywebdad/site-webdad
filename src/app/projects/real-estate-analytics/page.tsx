import type { Metadata } from 'next';
import Navbar from '@organisms/Navbar';
import Footer from '@organisms/Footer';
import ProjectDetails from '@templates/ProjectDetails';
import ProjectHero from '@features/projects/organisms/ProjectHero';
import ProjectResults from '@features/projects/organisms/ProjectResults';
import ProjectOverview from '@features/projects/organisms/ProjectOverview';
import { ChartBarIcon, BoltIcon, ArrowPathIcon } from '@heroicons/react/20/solid';
import ArtPrototyping from '@features/projects/atoms/ArtPrototyping';
import ArtVersionControl from '@features/projects/atoms/ArtVersionControl';
import ArtUIComponents from '@features/projects/atoms/ArtUIComponents';
import ArtCollaboration from '@features/projects/atoms/ArtCollaboration';
import ArtDesignSystem from '@features/projects/atoms/ArtDesignSystem';
import Blog from '@templates/Blog';
import RequestForm from '@organisms/RequestForm';
import SectionHeading from '@atoms/SectionHeading';

export const metadata: Metadata = {
  title: 'Аналитика рынка недвижимости',
  description:
    'Аналитика рынка недвижимости',
  openGraph: {
    title: 'Аналитика рынка недвижимости',
    description:
      'Аналитика рынка недвижимости',
    images: [{ 
      url: '/projects/real-estate-analytics/01.png',
      alt: 'Скриншот системы аналитики рынка недвижимости'
    }],
    type: 'article',
  },
};

export default function AmatarPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-gray-900 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <ProjectHero
          title="Аналитические дашборды рынка недвижимости"
          subtitle="Мы разработали комплексную систему аналитики, которая собирает, обрабатывает и отображает ключевые метрики рынка в режиме реального времени."
          imageSrc="/projects/real-estate-analytics/02.png"
          imageAlt="Скриншот интерфейса системы геовизуализации"
          year={2024}
          stack={["Node.js", "Grafana", "Prometheus"]}
        />
        <ProjectResults
          title="Результаты"
          items={[
            {
              title: 'Дашборды',
              description:
                'Сегодня команда клиента быстро реагирует на изменения рынка, формирует стратегию на основе аналитических дашбордов.',
              tags: ['Telegram', 'API'],
              imageSrc: '/projects/real-estate-analytics/06.png',
              imageAlt: 'Скриншот системы аналитики рынка недвижимости',
              imageFit: 'cover',
              colSpanMd: 1,
            },
            {
              title: 'Автоматические данные',
              description:
                'Система автоматически очищает, нормализует и агрегирует данные',
              tags: ['Telegram', 'API'],
              imageSrc: '/projects/real-estate-analytics/08.png',
              imageAlt: 'Скриншот системы аналитики рынка недвижимости',
              imageFit: 'cover',
              colSpanMd: 1,
            },
            {
              title: 'Прогнозы и сезонные тренды',
              description:
                'Система автоматически обновляется, отправляет оповещения о ключевых изменениях рынка, формирует прогнозы и сезонные тренды.',
              tags: ['Telegram', 'API'],
              imageSrc: '/projects/real-estate-analytics/03.png',
              imageAlt: 'Скриншот системы аналитики рынка недвижимости',
              imageFit: 'cover',
              colSpanMd: 1,
            },

            {
              title: 'Отображение данных в реальном времени',
              description:
                 'Для сайта с нуля был создан дизайн. Заказчик предоставил нам логотип и фирменные цвета, от которых мы отталкивались при подборе дизайн-решений. Таким образом была создана полноценная дизайн-система, а также прототипы и фреймы страниц, которые передавались в разработку.',
              tags: ['Кастомизация', 'Дизайн-система', 'Прототипы', 'Фреймы'],
              imageSrc: '/projects/real-estate-analytics/09.png',
              imageAlt: 'Скриншот системы аналитики рынка недвижимости',
              imageFit: 'cover',
              colSpanMd: 2,
            },
            {
              title: 'Гибкость и масштабируемость',
              description: 'Grafana интегрирована с PostgreSQL  что обеспечивает высокую производительность даже при больших объёмах.',
              tags: ['Юзабилити'],
              imageSrc: '/projects/real-estate-analytics/05.png',
              imageAlt: 'Скриншот системы аналитики рынка недвижимости',
              imageFit: 'contain',
              colSpanMd: 1,
            },
          ]}
        />
        
        <ProjectOverview
          eyebrow="Кейс"
          title="Превратили хаос данных в понятную аналитику для рынка недвижимости"
          intro="На рынке недвижимости тысячи сделок. Сотни предложений. десятки факторов: цены, локации, типы жилья, спрос по районам, сезонность, конкуренция."
          image={{ src: '/projects/real-estate-analytics/02.png', alt: 'Скриншоты системы аналитики рынка недвижимости' }}
          content={[
            'И при этом — почти везде царит аналитический хаос: Данные разбросаны по таблицам, отчётам, чатам и головам аналитиков. Решения принимаются на глаз. Тренды замечают, когда уже поздно.',
            'К нам обратился заказчик — с задачей: создать единую систему, которая бы не только собирала данные, но и говорила — что происходит на рынке, здесь и сейчас.',
            'Мы не стали строить очередную дашборд-панель. Мы построили живую систему мониторинга рынка.',
            'Мы разработали центральную базу данных, в которую интегрировали: Официальную статистику, Внутренние данные клиента, Геоданные и метрики по районам. Затем данные проходили очистку, нормализацию и агрегацию — с помощью автоматизированных ETL-процессов.',
            'Мы выбрали Grafana — не просто как инструмент визуализации, а как платформу для оперативной аналитики. Разработали комплекс дашбордов: ',
            'Динамика цен по городам и районам — с разбивкой по типу жилья (вторичка, новостройки) и многое многое другое. Можно зумировать по времени, фильтровать по типу объекта, сравнивать периоды.',
            'Раньше формирование отчёта занимало день. Теперь — обновление в реальном времени. Там, где раньше были догадки — теперь точность, скорость и контроль. '
          ]}
          features={[
            {
              icon: <ChartBarIcon className="size-5" aria-hidden="true" />,
              title: 'Метрики и дашборды',
              description: 'Динамика цен, предложение/спрос, фильтры по локациям, типам объектов и периодам; сравнение с прошлым периодом.'
            },
            {
              icon: <BoltIcon className="size-5" aria-hidden="true" />,
              title: 'Данные в реальном времени и алерты',
              description: 'Стриминг метрик из Prometheus, оповещения по порогам в Grafana, уведомления в чат — без задержек.'
            },
            {
              icon: <ArrowPathIcon className="size-5" aria-hidden="true" />,
              title: 'Интеграции и ETL‑пайплайны',
              description: 'Импорт из внешних источников, очистка/нормализация, агрегации и webhooks; связка с CRM и BI.'
            }
          ]}
          showPattern
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
