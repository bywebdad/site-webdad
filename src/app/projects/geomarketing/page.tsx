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

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Система геовизуализации',
  description:
    'Система геовизуализации для анализа и визуализации данных на карте.',
  openGraph: {
    title: 'Система геовизуализации',
    description:
      'Система геовизуализации для анализа и визуализации данных на карте.',
    images: [{ url: '/projects/geomarketing/01.png' }],
    type: 'article',
  },
};

export default function GeomarketingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-gray-900 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <ProjectHero
          title="Система геовизуализации"
          subtitle="Мы объединили данные из сотен источников: кадастр, реестры, открытые API, полевые исследования. Очистили, нормализовали и привязали к геокоординатам — впервые создав комплексную карту недвижимости и домохозяйств."
          imageSrc="/projects/geomarketing/09.png"
          imageAlt="Скриншот интерфейса системы геовизуализации"
          year={2020}
          stack={["Next.js", "TypeScript", "TailwindCSS"]}
        />
        <ProjectResults
          title="Результаты"
          items={[
            {
              title: 'Визуализация на карте',
              description:
                'Реализовали масштабируемую карту с поддержкой зумирования, наложения слоёв, зон охвата и тепловых карт плотности населения.',
              tags: ['Карта', 'Система геовизуализации'],
              imageSrc: '/projects/geomarketing/02.png',
              imageFit: 'cover',
              colSpanMd: 1,
            },
            {
              title: 'Базы домохозяйств по стране',
              description:
                 'Объединили данные из сотен источников, нормализовали и привязали к геокоординатам.',
              tags: ['реестры', 'спутниковые снимки', 'полевые исследования', 'кадастр', 'API'],
              imageSrc: '/projects/geomarketing/04.png',
              imageFit: 'cover',
              colSpanMd: 1,
            },
            {
              title: 'Учёт конкурентов',
              description:
                'Добавили возможность отмечать точки конкурирующих магазинов с указанием формата, площади и примерного оборота — чтобы видеть картину целиком. ',
              tags: ['Конкуренты'],
              imageSrc: '/projects/geomarketing/06.png',
              imageFit: 'contain',
              colSpanMd: 1,
            },
            {
              title: 'Прогнозирования товарооборота',
              description:
                'Разработали алгоритм, который на основе данных о населении, доходах, транспортной доступности и конкуренции рассчитывает потенциальную выручку для каждой локации.',
              tags: ['Custom development'],
              imageSrc: '/projects/geomarketing/03.png',
              imageFit: 'contain',
              colSpanMd: 2,
            },
            {
              title: 'Аналитика и отслеживание',
              description: 'Реализована аналитика в реальном времени конверсия из просмотра в заявку, самые популярные объекты, эффективность маркетинговых кампаний и многое другое.',
              tags: ['Grafana'],
              imageSrc: '/projects/geomarketing/07.png',
              imageFit: 'contain',
              colSpanMd: 1,
            },
          ]}
        />
        
        <ProjectOverview
          eyebrow="Кейс"
          title="Как мы построили карту, которой не было. И зачем она нужна, чтобы открыть магазин"
          intro="Однажды к нам обратился крупный ритейлер. Не с просьбой «сделайте сайт» или «запустите рекламу». А с вопросом, от которого зависят миллионы: «Мы хотим открыть новый магазин. Но где? Где люди? Где нет конкурентов? Где они готовы тратить? И как это вообще измерить?»"
          image={{ src: '/projects/geomarketing/08.png', alt: 'Скриншоты AddWine' }}
          content={[
            'Мы привыкли к цифровым задачам. Но тут — физический мир. Улицы. Дома. Квартиры. Люди, о которых никто не вёл учёт.',
            'И перед нами встала странная, почти безумная задача: построить карту, которой не существовало. Начало: когда данных нет — их создаёшь сам У клиента не было базы квартир.',
            'Не было точных сведений о количестве домохозяйств. Не было единой системы — только фрагменты: кадастр, открытые реестры, данные переписи, спутниковые снимки, информация от агентств недвижимости. Мы собрали всё. Каждый источник — как кусочек пазла.',
            'И постепенно — дом за домом — воссоздали цифровую копию жилой застройки по всей стране. Это заняло месяцы. Сотни часов обработки данных. Система, которая понимает: этот дом — панельный, тот — кирпичный, а вон тот — элитный жилой комплекс.',
            'Карта, которая говорит. Представьте: вы открываете веб-сервис. Зумируете на город. Кликаете по дому — и видите: 144 квартиры. Средний размер — 56 м². Построен в 1978 году. Плотность населения в радиусе 500 метров — 12 700 человек.',
            'Вы рисуете зону охвата — и сервис показывает: «Здесь находятся 8 200 домохозяйств. Примерный потенциальный товарооборот — 180 тыс долларов в месяц». ',
            'А рядом — красные метки. Конкуренты. Два дискаунтера. Один продуктовый магазин у дома. Небольшой локальный игрок. ',
            'Тот, кто знает, где живут люди, знает, где будет работать бизнес. '

          ]}
          features={[
            {
              icon: <FunnelIcon className="size-5" aria-hidden="true" />,
              title: 'Пространственная фильтрация и слои карты',
              description: 'Фильтры по радиусу, зонам охвата, демографии и конкуренции; слои: теплокарты, трафик, дома, конкуренты.'
            },
            {
              icon: <ArrowPathIcon className="size-5" aria-hidden="true" />,
              title: 'Актуальные данные и интеграции',
              description: 'Автообновление из кадастра, реестров, — единая нормализованная модель данных.'
            },
            {
              icon: <PaperAirplaneIcon className="size-5" aria-hidden="true" />,
              title: 'Оценка локаций и прогноз выручки',
              description: 'Моделирование открытия точки: расчёт потенциального оборота с учётом плотности населения, доходов, доступности и конкуренции.'
            }
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
