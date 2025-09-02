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
  title: 'Телегарам-бот для агентства недвижимости',
  description:
    'Мини‑приложение для аренды недвижимости, связь с риелтором и помощь в оформлении сделки.',
  openGraph: {
    title: 'Телегарам-бот для агентства недвижимости',
    description:
      'Мини‑приложение для аренды недвижимости, связь с риелтором и помощь в оформлении сделки.',
    images: [{ url: '/projects/GRE/01.png' }],
    type: 'article',
  },
};

export default function RealEstateMiniappPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-gray-900 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <ProjectHero
          title="Телегарам-бот для агентства недвижимости"
          subtitle="Мы спроектировали и разработали ит архитектуру и удобную административную панель с возможностью управления несколькими проектами. Сайт был интегрирован с системами МойСклад и AmoCRM, а также с маркетплейсами Яндекс Маркет, Озон, Валберис и Google. ."
          imageSrc="/projects/GRE/01.png"
          imageAlt="Скриншот интерфейса Miniapp Coffee"
          year={2024}
          stack={["Next.js", "TypeScript", "TailwindCSS"]}
        />
        <ProjectResults
          title="Результаты"
          items={[
            {
              title: 'Каталог и фильтры',
              description:
                'Miniapp который позволяет пользователям легко подбирать недвижимость, используя удобные фильтры по цене, району, площади, этаж, наличие ремонта и другим параметрам.',
              tags: ['UI/UX', 'Design System'],
              imageSrc: '/projects/GRE/06.png',
              imageFit: 'cover',
              colSpanMd: 1,
            },
            {
              title: 'Уведомления',
              description:
                 'Уведомляющий о новых объектах, которые соответствуют критериям пользователя.',
              tags: ['Автоматическая подборка объектов'],
              imageSrc: '/projects/GRE/06.png',
              imageFit: 'cover',
              colSpanMd: 1,
            },
            {
              title: 'Подборка объектов',
              description:
                'Менеджеры в реальном времени подбирают объекты и отправляют их пользователю.',
              tags: ['History', 'Branching'],
              imageSrc: '/projects/GRE/03.png',
              imageFit: 'contain',
              colSpanMd: 1,
            },
            {
              title: 'Административная панель',
              description:
                'Мы разработали современную, интуитивную и функциональную административную панель, которая превращает сложные процессы в простые действия — прямо из браузера или даже с мобильного устройства.',
              tags: ['Custom development'],
              imageSrc: '/projects/GRE/05.png',
              imageFit: 'contain',
              colSpanMd: 2,
            },
            {
              title: 'Аналитика и отслеживание',
              description: 'Реализована аналитика в реальном времени конверсия из просмотра в заявку, самые популярные объекты, эффективность маркетинговых кампаний и многое другое.',
              tags: ['Grafana', 'Google Analytics', 'AmoCRM', 'Google Tag Manager'],
              imageSrc: '/projects/GRE/02.png',
              imageFit: 'contain',
              colSpanMd: 1,
            },
          ]}
        />
        
        <ProjectOverview
          eyebrow="Кейс"
          title="Как мы перезапустили подбор недвижимости в Telegram"
          intro="В мире, где каждая секунда на счету, а решения принимаются за считанные минуты, клиенты ждут не просто предложения — они ждут удобства, доверия и мгновенного доступа к тому, что им действительно подходит. Именно с этой идеей мы создали инновационное веб-приложение для агентства недвижимости, интегрированное напрямую в Telegram — мессенджер, где живут миллионы пользователей каждый день."
          image={{ src: '/projects/GRE/01.png', alt: 'Скриншоты AddWine' }}
          content={[
            'Мы заменили громоздкие формы, долгие ожидания и бесконечные переписки на удобное веб-приложение внутри Telegram. Пользователь открывает чат — и уже через секунду начинает подбирать квартиры, дома или коммерческую недвижимость с помощью интуитивного интерфейса, адаптированного под мобильные устройства.',
            'Фильтры по цене, району, площади, этажу, наличию ремонта и другим параметрам работают мгновенно. Каждый объект — с качественными фото, описанием, расположением на карте и ценой. А система умных уведомлений сразу оповещает пользователя, как только появляется новая недвижимость, соответствующая его критериям.',
            'Каждое действие пользователя — просмотр, запрос, подписка — автоматически попадает в CRM-систему. Менеджеры Grand Real Estate видят интересы клиентов в реальном времени, могут оперативно связаться и предложить идеальный вариант.Никаких упущенных звонков. Никаких потерянных лидов. Только точные данные и слаженная работа команды.',
            'Более 70% пользователей ищут недвижимость с телефона. Мы сделали приложение максимально адаптированным под смартфоны: быстрая загрузка, плавная навигация, удобные карусели изображений и одно-касательное взаимодействие.',

          ]}
          features={[
            {
              icon: <PaperAirplaneIcon className="size-5" aria-hidden="true" />,
              title: 'Telegram — это привычное пространство.',
              description: 'Клиент не переходит на сайт, не регистрируется на новой платформе — он уже здесь.'
            },
            {
              icon: <FunnelIcon className="size-5" aria-hidden="true" />,
              title: 'Бизнес получает структурированный поток лидов.',
              description: 'Клиенты получают прямые уведомления о новых объектах, которые соответствуют их критериям.'
            },
            {
              icon: <ArrowPathIcon className="size-5" aria-hidden="true" />,
              title: 'Интеграция с CRM и складскими системами',
              description: 'Менеджеры видят интересы клиентов в реальном времени, могут оперативно связаться и предложить идеальный вариант.'
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
