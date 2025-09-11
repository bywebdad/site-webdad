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
  title: 'Сайт для застройщика элитного жилья ',
  description:
    'От дизайна до разработки корпоративного сайта',
  openGraph: {
    title: 'Сайт для застройщика элитного жилья',
    description:
      'Сайт для застройщика элитного жилья',
    images: [{ url: '/projects/amatar/01.png' }],
    type: 'article',
  },
};

export default function AmatarPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-gray-900 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <ProjectHero
          title="Сайт для застройщика элитного жилья"
          subtitle="Мы создали сайт для застройщика элитного жилья, который включает в себя все основные функции корпоративного сайта: новости, контакты, галерея, форма обратной связи и многое другое."
          imageSrc="/projects/amatar/01.png"
          imageAlt="Скриншот интерфейса системы геовизуализации"
          year={2022}
          stack={["Next.js", "TypeScript", "TailwindCSS"]}
        />
        <ProjectResults
          title="Результаты"
          items={[
            {
              title: 'Отправка заявок в Telegram',
              description:
                'Одним из требований заказчика было обеспечить удобную, автоматизированную ообратную связь с клиентом. Исходя из этого мы реализовали отправку заявок с формы в Telegram.',
              tags: ['Telegram', 'API'],
              imageSrc: '/projects/amatar/03.png',
              imageAlt: 'Скриншот интерфейсаSophienwald',
              imageFit: 'cover',
              colSpanMd: 1,
            },
            {
              title: 'Современный дизайн',
              description:
                 'Для сайта с нуля был создан дизайн. Заказчик предоставил нам логотип и фирменные цвета, от которых мы отталкивались при подборе дизайн-решений. Таким образом была создана полноценная дизайн-система, а также прототипы и фреймы страниц, которые передавались в разработку.',
              tags: ['Кастомизация', 'Дизайн-система', 'Прототипы', 'Фреймы'],
              imageSrc: '/projects/amatar/02.png',
              imageAlt: 'Скриншот интерфейса Sophienwald',
              imageFit: 'cover',
              colSpanMd: 1,
            },
            {
              title: 'Возможность выбрать планировку этажа',
              description: 'К сайту подключен функционал, который помогает пользователю облегчить выбор и ознакомиться с планировкой этажа и квартиры заранее.',
              tags: ['Юзабилити'],
              imageSrc: '/projects/amatar/04.png',
              imageAlt: 'Скриншот интерфейса Sophienwald',
              imageFit: 'contain',
              colSpanMd: 1,
            },
          ]}
        />
        
        <ProjectOverview
          eyebrow="Кейс"
          title="Создали сайт для застройщика, который продает не квадратные метры — а будущее"
          intro="Когда речь идёт о покупке квартиры, клиент выбирает не просто жильё. Он выбирает место, где будет жить его семья. Где дети пойдут в садик. Где удобно добираться на работу. Где приятно гулять вечером."
          image={{ src: '/projects/amatar/01.png', alt: 'Скриншоты AddWine' }}
          content={[
            'Наш клиент — современный застройщик, который строит не очередной ЖК, а целые локации с продуманной инфраструктурой. И ему был нужен сайт, который не просто показывает планировки, а помогает принять решение с уверенностью.',
            'Мы создали сайт, который работает как личный консультант — доступный 24/7, понятный и максимально информативный. ',
            'Чтобы упростить выбор, мы реализовали интерактивные планировки этажей. Клиент кликает на этаж — и видит: Все доступные квартиры, Их площадь, цену, ориентацию, количество комнат, количество балконов. Он может сравнить несколько вариантов, сохранить понравившиеся и сразу отправить заявку на просмотр — без перезвонов и ожидания.',
            'Дизайн сайта мы создавали с нуля. Заказчик предоставил логотип и фирменные цвета — и мы на их основе разработали полноценную дизайн-систему: прототипы и фреймы страниц, которые передавались в разработку.',
            'Результат — элегантный, лёгкий и доверительный визуальный язык, который усиливает позиционирование застройщика как надёжного и современного бренда.',
            'Одно из ключевых требований — мгновенная обработка заявок. Мы интегрировали форму обратной связи с автоматической отправкой заявок в Telegram.',
            'Как только пользователь оставляет запрос: Менеджер получает уведомление в чат, c ним — все данные: имя, телефон, выбранная квартира, комментарий, Ответ можно отправить в один клик, никаких пропущенных звонков.',
            'Сегодня сайт — не просто визитка. Это инструмент продаж и доверия.',
            'Когда клик — это шаг к новой жизни, значит, мы сделали всё правильно.'
          ]}
          features={[
            {
              icon: <FunnelIcon className="size-5" aria-hidden="true" />,
              title: 'Интерактивные планировки и фильтры',
              description: 'Подбор по комнатам, площади, цене, этажу и ориентации; сравнение вариантов и добавление в избранное.'
            },
            {
              icon: <PaperAirplaneIcon className="size-5" aria-hidden="true" />,
              title: 'Мгновенные заявки в Telegram',
              description: 'Автоотправка заявок менеджеру с карточкой лида; быстрый ответ из чата без пропущенных обращений.'
            },
            {
              icon: <ArrowPathIcon className="size-5" aria-hidden="true" />,
              title: 'Интеграции и автоматизация',
              description: 'Связка с CRM и формами, webhooks и события аналитики; синхронизация контента без ручной рутины.'
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
