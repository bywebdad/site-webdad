import type { Metadata } from 'next';
import Navbar from '@organisms/Navbar';
import Footer from '@organisms/Footer';
import ProjectDetails from '@templates/ProjectDetails';
import ProjectHero from '@features/projects/organisms/ProjectHero';
import ProjectResults from '@features/projects/organisms/ProjectResults';
import ProjectOverview from '@features/projects/organisms/ProjectOverview';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import ArtPrototyping from '@features/projects/atoms/ArtPrototyping';
import ArtVersionControl from '@features/projects/atoms/ArtVersionControl';
import ArtUIComponents from '@features/projects/atoms/ArtUIComponents';
import ArtCollaboration from '@features/projects/atoms/ArtCollaboration';
import ArtDesignSystem from '@features/projects/atoms/ArtDesignSystem';

export const metadata: Metadata = {
  title: 'Miniapp Coffee — Проекты — NewSite',
  description:
    'Мини‑приложение для оформления заказов, оплаты и программ лояльности прямо в мобильном вебе. Лёгкий, быстрый и отзывчивый интерфейс.',
  openGraph: {
    title: 'Miniapp Coffee — кейс',
    description:
      'Мини‑приложение для сети кофеен: оформление заказов, оплата, бонусы, аналитика. Выполнено на Next.js и TailwindCSS.',
    images: [{ url: '/blog/01.png' }],
    type: 'article',
  },
};

export default function MiniappCoffeePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-gray-900 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <ProjectHero
          title="Miniapp Coffee — мини‑приложение для кофейни в Telegram"
          subtitle="Мы спроектировали и разработали мини‑приложение для сети кофеен. Оно позволяет оформлять заказы, оплачивать и копить бонусы. Интерфейс лёгкий, быстрый и отзывчивый."
          imageSrc="/projects/miniapp-coffee/1.png"
          imageAlt="Скриншот интерфейса Miniapp Coffee"
          year={2025}
          stack={["Next.js", "TypeScript", "TailwindCSS"]}
        />
        <ProjectResults
          title="Результаты"
          items={[
            {
              title: 'MiniApp Telegram',
              description:
                'Transform static designs into interactive prototypes. Test user flows and animations.',
              tags: ['Interactive', 'Animations'],
              art: <ArtPrototyping />,
            },
            {
              title: 'Реализация доставки',
              description:
                'Track design changes with full version history. Compare versions and restore previous iterations.',
              tags: ['History', 'Branching'],
              imageSrc: '/projects/miniapp-coffee/2.png',
            },
            {
              title: 'Новейшие технологии',
              description:
                'Build and manage reusable components for consistent interfaces across projects.',
              tags: ['Library', 'Variants'],
              imageSrc: '/projects/miniapp-coffee/2.png',
              imageAlt: 'Скриншот интерфейса Miniapp Coffee'

            },
            {
              title: 'Административная панель',
              description:
                'Work together with your team in real-time. See cursor movements, comments, and changes as they happen. Perfect for remote design reviews and pair designing.',
              tags: ['Live Editing', 'Comments', 'Presence'],
              art: <ArtCollaboration />,
              colSpanMd: 2,
            },
            {
              title: 'Выручка',
              description: 'Create and maintain consistent designs with a comprehensive design system.',
              tags: ['Tokens', 'Styles'],
              art: <ArtDesignSystem />,
            },
          ]}
        />
        
        <ProjectOverview
          eyebrow="Кейс"
          title="Miniapp Coffee — о продукте"
          intro="В сердце города, где каждый гость — не просто посетитель, а часть уютной атмосферы, работает небольшая, но очень душевная кофейня. Здесь знают каждого по имени, помнят любимый напиток и всегда встретят с улыбкой. Но даже самая тёплая атмосфера требует современных решений, чтобы быть ближе к людям — особенно в эпоху, когда смартфон становится продолжением руки."
          image={{ src: '/projects/miniapp-coffee/1.png', alt: 'Скриншоты Miniapp Coffee' }}
          content={[
            'Именно поэтому мы вместе с командой разработчиков создали уникальное цифровое пространство прямо внутри Telegram — удобное, быстрое и живое, как сама кофейня.',
            'Представляем Miniapp в Telegram — ваш личный гид, бариста и менеджер в одном лице.',
            'Больше не нужно перепечатывать меню каждый раз, когда меняется сезон или появляется новое десертное искушение. Административная панель позволяет владельцу кофейни за пару кликов добавить новое блюдо, изменить цену или временно скрыть позицию. А клиенты видят всё — красиво, актуально и в режиме реального времени.',
            'Гость заходит в бота, просматривает меню с фотографиями, выбирает любимый капучино и круассан, добавляет в заказ — и готово. Заказ мгновенно попадает на кухню, а клиент получает подтверждение. Удобно, быстро, без лишних слов.',
            'Хочется провести вечер за чашкой кофе в уютном уголке? Забронируйте столик через Telegram. Кофейня получает уведомление, а гость — уверенность, что его уже ждут.',
            'После каждого визита клиент может оставить отзыв или оценку. Это не просто слова — это инструмент роста. Владелец видит, что нравится гостям, а что можно улучшить, и оперативно реагирует на пожелания.',
            'Специальное предложение на осенние напитки? День рождения кофейни? Через Miniapp можно отправить персонализированное уведомление всей аудитории — и быть уверенным, что оно будет прочитано. Повышается лояльность, растёт трафик, а атмосфера становится ещё теплее.',
            'Какие напитки самые популярные? В какие дни больше всего заказов? Кто из гостей — постоянный клиент? Аналитический модуль собирает и визуализирует данные, помогая принимать решения, основанные не на интуиции, а на фактах.',
            'Мы не заменяем живое общение. Мы делаем его ещё удобнее. Помогаем кофейне заботиться о клиентах, не теряя своей души, а гостям — наслаждаться моментом с меньшими усилиями.',
          ]}
          features={[
            {
              icon: <CloudArrowUpIcon className="size-5" />,
              title: 'Работает без установки',
              description: 'Telegram Mini Apps: вход по одному тапу, мгновенный старт и кроссплатформенность.'
            },
            {
              icon: <LockClosedIcon className="size-5" />,
              title: 'Безопасные платежи',
              description: 'Интеграция с платёжным провайдером и защищённые сессии. Данные пользователей в безопасности.'
            },
            {
              icon: <ServerIcon className="size-5" />,
              title: 'Аналитика и бэкенд',
              description: 'Сбор метрик, экспорт отчётов и уведомления. Масштабируемая архитектура и бэкенд API.'
            }
          ]}
          showPattern
        />

        


      </main>
      <Footer />
    </div>
  );
}
