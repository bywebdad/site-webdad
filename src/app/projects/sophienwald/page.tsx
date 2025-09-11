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

export const metadata: Metadata = {
  title: 'Современный интернет-магазин для бокалов Sophienwald',
  description:
    'Каждый бокал заслуживает не только великолепного вина — но и достойного представления',
  openGraph: {
    title: 'Современный интернет-магазин для бокалов Sophienwald',
    description:
      'Каждый бокал заслуживает не только великолепного вина — но и достойного представления',
    images: [{ url: '/projects/sophienwald/01.png' }],
    type: 'article',
  },
};

export default function SophienwaldPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-gray-900 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <ProjectHero
          title="Sophienwald — интернет-магазин для бокалов"
          subtitle="Великое вино заслуживает идеального бокала. А идеальный бокал — идеального цифрового дома. Мы создали цифровой дом для бренда, который говорит на языке совершенства. "
          imageSrc="/projects/sophienwald/01.png"
          imageAlt="Скриншот интерфейса Sophienwald"
          year={2020}
          stack={["Next.js", "TypeScript", "TailwindCSS"]}
        />
        <ProjectResults
          title="Результаты"
          items={[
            {
              title: 'Оптимизация кодовой базы',
              description:
                'Transform static designs into interactive prototypes. Test user flows and animations.',
              tags: ['Interactive', 'Animations'],
              imageSrc: '/projects/sophienwald/02.png',
              imageAlt: 'Скриншот интерфейса Sophienwald',
              imageFit: 'contain',
              colSpanMd: 1,
            },
            {
              title: 'Интеграция платежной системы',
              description:
                'Track design changes with full version history. Compare versions and restore previous iterations.',
              tags: ['History', 'Branching'],
              imageSrc: '/projects/sophienwald/03.png',
              imageAlt: 'Скриншот интерфейса Sophienwald',
              imageFit: 'contain',
              colSpanMd: 2,
            },
            {
              title: 'Непрерывная интеграция и доставка',
              description:
                'Build and manage reusable components for consistent interfaces across projects.',
              tags: ['Library', 'Variants'],
              imageSrc: '/projects/sophienwald/05.png',
              imageAlt: 'Скриншот интерфейса Sophienwald',
              imageFit: 'contain',
              colSpanMd: 2,
            },
            {
              title: 'Семантическая и SEO оптимизация',
              description:
                'Команда разработчиков расширила возможности для поисковой оптимизации товаров и контента на сайте. Большое внимание было уделено проверке корректности разметки и использованию HTML-тегов.',
              tags: ['Live Editing', 'Comments', 'Presence'],
              imageSrc: '/projects/sophienwald/06.png',
              imageAlt: 'Скриншот интерфейса Sophienwald',
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
