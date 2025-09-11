import type { Metadata } from 'next';
import Navbar from '@organisms/Navbar';
import Footer from '@organisms/Footer';
import ServiceHero from '@templates/ServiceHero';
import FAQ from '@organisms/FAQ';
import ProjectsCards from '@templates/ProjectsCards';
import ServiceProcess from '@templates/ServiceProcess';
import Clients from '@templates/Clients';
import ServiceShowcase from '@templates/ServiceShowcase';

export const metadata: Metadata = {
  title: 'ИТ‑аутсорсинг — WEBDAD',
  description: 'Команда разработчиков под ключ: фронтенд, бэкенд, DevOps, дизайн. Расширение штата без найма от команды WEBDAD.',
  openGraph: {
    title: 'ИТ‑аутсорсинг — WEBDAD',
    description: 'Команда разработчиков под ключ: фронтенд, бэкенд, DevOps, дизайн. Расширение штата без найма от команды WEBDAD.',
    type: 'website',
    images: [{
      url: '/og-outsourcing.jpg',
      width: 1200,
      height: 630,
      alt: 'ИТ‑аутсорсинг от WEBDAD - команда разработчиков под ключ',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ИТ‑аутсорсинг — WEBDAD',
    description: 'Команда разработчиков под ключ: фронтенд, бэкенд, DevOps, дизайн. Расширение штата без найма от команды WEBDAD.',
    images: ['/og-outsourcing.jpg'],
  },
};

export default function ServiceOutsourcingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-gray-900 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <ServiceHero
          eyebrow="Услуги / ИТ‑аутсорсинг"
          title={"ИТ‑аутсорсинг\nи выделенные команды"}
          subtitle="Берём на себя разработку и поддержку: подключаем сеньорных специалистов, масштабируем команду под задачи, работаем по SLA и прозрачным процессам."
        />
        
        <ServiceProcess
          id="process"
          title="Как мы запускаем ИТ‑аутсорсинг"
          items={[
            {
              title: 'Discovery и онбординг',
              result: 'Цели, зоны ответственности, стек и процессы согласованы',
              duration: '≈ 3–5 дней',
              description:
                'Погружаемся в продукт, договариваемся о KPI/SLA, выравниваем процессы и инструменты. Формируем план первых итераций.',
            },
            {
              title: 'Формирование команды',
              result: 'Сеньорные роли под ваши задачи',
              duration: '1–2 недели',
              description:
                'Подбираем роли (FE, BE, Full‑stack, QA, PM/BA, DevOps). Интервью, стартовые документы, доступы и расписание.',
            },
            {
              title: 'План работ и SLA',
              result: 'Roadmap, метрики и соглашения об уровне сервиса',
              duration: '1–3 дня',
              description:
                'Определяем объём, приоритеты и ритм. Фиксируем SLA по инцидентам, регламент поддержки и критерии качества.',
            },
            {
              title: 'Запуск и итерации',
              result: 'Регулярные поставки и отчётность',
              duration: 'Спринты 1–2 недели',
              description:
                'Итеративная разработка и поддержка: демо, ретро, прозрачная доска задач, weekly отчёты, контроль качества и рисков.',
            },
            {
              title: 'Поддержка и развитие',
              result: 'Стабильность и масштабируемость',
              duration: 'На постоянной основе',
              description:
                'Мониторинг, инциденты, релизы без простоев, оптимизация производительности и стоимости инфраструктуры.',
            },
          ]}
        />

        <ServiceShowcase
          id="showcase-outsourcing"
          // eyebrow="ИТ‑аутсорсинг"
          title={"Усилим вашу команду\nи ускорим релизы"}
          subtitle="Подключаемся в любом статусе продукта: берём весь поток задач или закрываем дефицит ролей. Прозрачно, предсказуемо, без микроменеджмента."
          imageSrc="/brand/01.webp"
          imageAlt="ИТ‑аутсорсинг и выделенные команды"
          ctaHref="/company"
          pillLabel="SLA"
          imageRatio="1 / 1"
          variant="rect"
          hideDecorations
          features={[
            { title: 'Выделенные команды', description: 'Сеньоры и мидлы под ваши задачи. Быстрый старт, плавный онбординг.' },
            { title: 'Гибкое масштабирование', description: 'Быстро расширяем или сокращаем состав без риска для сроков.' },
            { title: 'Процессы и SLA', description: 'Единый ритм, KPI/OKR, регламенты инцидентов и качество поставок.' },
            { title: 'Прозрачная коммуникация', description: 'Демо, weekly отчёты, доступ к метрикам, открытая доска задач.' },
          ]}
        />

        <ProjectsCards
          id="cases"
          className="mt-12 md:mt-16"
          showAllButton
          allHref="/projects"
          allLabel="Смотреть все проекты"
          items={[
            {
              title: 'Addwine: e‑commerce платформа',
              description: 'B2C‑магазин с удобным каталогом, фильтрами и промо‑модулями. Next.js + Headless CMS.',
              imageUrl: '/projects/addwine/01.webp',
              ctaVariant: 'arrow',
              href: '/projects/addwine',
            },
            {
              title: 'Miniapp Coffee — мини‑приложение для кофейни',
              description: 'Мини‑приложение для оформления заказов, оплаты и программ лояльности прямо в мобильном вебе.',
              imageUrl: '/projects/miniapp-coffee/1.png',
              ctaVariant: 'arrow',
              href: '/projects/miniapp-coffee',
            },
            {
              title: 'Образовательный веб сервис Upgrade для корпоративного обучения',
              description: 'Upgrade — образовательная платформа для корпоративного обучения',
              imageUrl: '/projects/upgrade/02.png',
              ctaVariant: 'arrow',
              href: '/projects/upgrade',
            },
          ]}
        />
      </main>
      <Clients />
      <FAQ
          id="faq"
          title="FAQ по ИТ‑аутсорсингу"
          subtitle="Отвечаем на ключевые вопросы о форматах и процессе работы"
          items={[
            {
              question: 'Какие модели сотрудничества доступны?',
              answer:
                'Работаем по Time & Material (T&M), retainer и фиксированным пакетам поддержки. Поможем выбрать модель под ваши риски и бюджет.',
            },
            {
              question: 'Как быстро вы можете подключиться?',
              answer:
                'Обычно стартуем за 3–5 рабочих дней: синхронизация, доступы, онбординг, запуск первой итерации.',
            },
            {
              question: 'Как вы обеспечиваете качество и прозрачность?',
              answer:
                'Сеньорные роли, код‑ревью, тесты и CI/CD, SLA и метрики. Регулярные демо, weekly отчёты и доступ к доске задач и мониторингу.',
            },
            {
              question: 'Как происходит масштабирование команды?',
              answer:
                'Масштабируемся по согласованным ролям и SLA. Быстро добавляем или снимаем специалистов без влияния на устойчивость процесса.',
            },
            {
              question: 'Как вы работаете с часовыми поясами и языком?',
              answer:
                'Работаем с ЕС/США. Коммуникация на русском/английском. Строим смешанный sync/async режим с понятными окнами синхронизации.',
            },
          ]}
        />
      <Footer />
    </div>
  );
}
