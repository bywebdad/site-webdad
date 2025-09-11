import type { Metadata } from 'next';
import Navbar from '@organisms/Navbar';
import Footer from '@organisms/Footer';
import ProjectDetails from '@templates/ProjectDetails';
import ProjectHero from '@features/projects/organisms/ProjectHero';
import ProjectResults from '@features/projects/organisms/ProjectResults';
import ProjectOverview from '@features/projects/organisms/ProjectOverview';
import { SparklesIcon, FunnelIcon, CreditCardIcon } from '@heroicons/react/20/solid';
import ArtPrototyping from '@features/projects/atoms/ArtPrototyping';
import ArtVersionControl from '@features/projects/atoms/ArtVersionControl';
import ArtUIComponents from '@features/projects/atoms/ArtUIComponents';
import ArtCollaboration from '@features/projects/atoms/ArtCollaboration';
import ArtDesignSystem from '@features/projects/atoms/ArtDesignSystem';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://webdad.by';

export const metadata: Metadata = {
  title: 'Сервис для оптовых заказов и специальных поставок винных аксессуаров',
  description:
    'Каждый бокал заслуживает не только великолепного вина — но и достойного представления',
  alternates: {
    canonical: `${siteUrl}/projects/addseller`,
  },
  openGraph: {
    title: 'Сервис для оптовых заказов и специальных поставок винных аксессуаров',
    description:
      'Каждый бокал заслуживает не только великолепного вина — но и достойного представления',
    url: `${siteUrl}/projects/addseller`,
    images: [{ url: '/projects/addseller/01.png' }],
    type: 'article',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AddSellerPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-gray-900 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <ProjectHero
          title="AddSeller — сервис для оптовых заказов и специальных поставок винных аксессуаров"
          subtitle="Сервис для оптовых заказов и специальных поставок винных аксессуаров"
          imageSrc="/projects/addseller/01.png"
          imageAlt="Скриншот интерфейса AddSeller"
          year={2020}
          stack={["Next.js", "TypeScript", "TailwindCSS"]}
        />
        <ProjectResults
          title="Результаты"
          items={[
            {
              title: 'Личный кабинет',
              description:
                'Для удобства дилеров создан и продуман личный кабинет для каждого пользователя. В нем подключен такой функционал, как: просмотр новостей, создание различных адресов доставки и т.д.',
              tags: ['Interactive', 'Animations'],
              imageSrc: '/projects/addseller/02.png',
              imageAlt: 'Скриншот интерфейса AddSeller',
              imageFit: 'contain',
              colSpanMd: 1,
            },
            // {
            //   title: 'Административная панель',
            //   description:
            //     'Также была создана административная панель, где можно добавлять товары, управлять коллекциями и контентом.',
            //   tags: ['History', 'Branching'],
            //   imageSrc: '/projects/addseller/05.png',
            //   imageFit: 'contain',
            //   colSpanMd: 1,
            // },
            {
              title: 'Генерация документов в формате XML и Excel',
              description:
                'В личном кабинете есть возможность генерации документов. При нажатии на кнопку у пользователя генерируется документ, в котором отражается наличие определенных товаров на сайте. Данные документы можно выгрузить в формате Excel для интеграции в собственную систему дилера, либо в формате XML, любой из этих документов возможно распечатать.',
              tags: ['Library', 'Variants'],
              imageSrc: '/projects/addseller/04.png',
              imageAlt: 'Скриншот интерфейса AddSeller',
              imageFit: 'contain',
              colSpanMd: 1,
            },
            {
              title: 'Чат с менеджером и координатором',
              description:
                'По исследованиям около 77% клиентов не готовы совершить покупку через сайт, если в нём нет чата с консультантом. Чат на сайте стал основным каналом поддержки клиентов.',
              tags: ['Live Editing', 'Comments', 'Presence'],
              imageSrc: '/projects/addseller/03.png',
              imageAlt: 'Скриншот интерфейса AddSeller',
              imageFit: 'contain',
              colSpanMd: 1,
            },
          ]}
        />
        
        <ProjectOverview
          eyebrow="Кейс"
          title="Как мы создавали интернет-магазин для тех, кто чувствует вино — не языком, а душой"
          intro="Когда к нам обратился бренд Sophienwald, мы сразу поняли: это не просто продажа бокалов. Это создание цифрового пространства для ритуала. Для момента тишины, когда вы откупориваете бутылку, подносите бокал к свету — и вдыхаете аромат, который раскрывается только в идеальной чаше."
          image={{ src: '/projects/sophienwald/01.png', alt: 'Скриншоты Miniapp Coffee' }}
          content={[
            'Наша задача была сложной: Передать атмосферу премиальности, мастерства и глубокой связи с вином — в формате интернет-магазина.',
            'Мы отказались от шаблонов. Вместо этого — создали цифровую галерею, где каждый продукт представлен как произведение искусства.',
            'Покупка бокалов — не как покупка носков. Здесь важен контекст: Для какого вина? Какой стиль дегустации? Домашний ужин или коллекционирование?',
            'Sophienwald — это премиум. И сайт должен был соответствовать. Адаптивная верстка под все устройства: от десктопа до смартфона. Быстрая загрузка тяжёлых изображений благодаря оптимизации и lazy load. Интеграция с платёжными системами и доставкой. Административная панель для простого управления товарами, коллекциями и контентом.',
            'Результат: магазин, который не только продаёт — он вдохновляет. Удобный инструмент для выбора идеального бокала. Цифровое воплощение философии бренда. Пространство, где каждый посетитель чувствует себя не покупателем, а ценителем',
            'Мы не делали интернет-магазин. Мы создали цифровой дом для бренда, который говорит на языке совершенства. Потому что, когда речь идёт о вине, даже сайт должен дышать ароматом.'
          ]}
          features={[
            {
              icon: <SparklesIcon className="size-5" aria-hidden="true" />,
              title: 'Премиальная витрина',
              description: 'Большие фото с зумом, коллекции и наборы, акцент на эстетике бренда.'
            },
            {
              icon: <FunnelIcon className="size-5" aria-hidden="true" />,
              title: 'Умные фильтры и подбор',
              description: 'Фильтры по типу вина, коллекции, объёму и форме бокала; сравнение товаров.'
            },
            {
              icon: <CreditCardIcon className="size-5" aria-hidden="true" />,
              title: 'Платежи и доставка',
              description: 'Безопасные платежи, расчёт доставки и статусы заказов прямо в аккаунте.'
            }
          ]}
          showPattern
        />

        


      </main>
      <Footer />
    </div>
  );
}
