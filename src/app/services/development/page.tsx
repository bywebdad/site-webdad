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
  title: 'Разработка ПО — NewSite',
  description: 'Разработка веб-приложений на заказ: проектирование, дизайн, фронтенд, бэкенд, QA и поддержка.',
};

export default function ServiceDevelopmentPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-gray-900 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <ServiceHero
          eyebrow="Услуги / Разработка ПО"
          title={"Разработка\nвеб-приложений на заказ"}
          subtitle="Проектируем и создаём надежные продукты под нужды вашего бизнеса: от MVP до масштабируемых enterprise-решений."
        />
        
        <ServiceProcess
          id="process"
          title="Полный цикл услуг разработки веб‑приложений"
          items={[
            {
              title: 'Анализ рынка и конкурентов',
              result: '1–2 экрана ключевого пользовательского сценария',
              duration: '≈ 3 дня',
              description:
                'Перед стартом разработки погружаемся в контекст: изучаем аудиторию, аналогичные решения и best‑practice в домене. Это помогает выстроить гипотезы, определить ценность для пользователя и согласовать фокус MVP.',
            },
            {
              title: 'UI/UX дизайн',
              result: 'UI‑кит, кликабельные прототипы, дизайн‑система',
              duration: '≈ 2 недели',
              description:
                'Прорабатываем пользовательские сценарии, создаём прототипы и визуальный язык продукта. Собираем дизайн‑систему для единообразия интерфейсов и удобства дальнейшей разработки.',
            },
            {
              title: 'Разработка',
              result: 'Функциональный веб‑продукт',
              duration: '≈ 10 недель',
              description:
                'Реализуем фронтенд на Next.js/React/TypeScript и бэкенд/Headless (Node.js, Payload CMS, PostgreSQL). Двигаемся итерациями: регулярные демо, прозрачная доска задач, ранняя поставка ценности.',
            },
            {
              title: 'Тестирование',
              result: 'Готовый к релизу продукт',
              duration: 'Параллельно с разработкой',
              description:
                'Запускаем QA на каждом инкременте: ручные и автоматизированные проверки, регресс, тестирование сценариев. Выявляем и устраняем проблемы до релиза, держим стабильность.',
            },
            {
              title: 'Поддержка после релиза',
              result: 'Бесшовные релизы новых фич и актуальный стек',
              duration: 'Столько, сколько необходимо',
              description:
                'Следим за производительностью, безопасностью и зависимостями. Планируем roadmap, выпускаем улучшения без простоев и поддерживаем продукт в актуальном состоянии.',
            },
          ]}
        />

        <ServiceShowcase
          id="showcase-dev"
          eyebrow="Наши услуги"
          title={"Сильные решения\nдля вашего продукта"}
          subtitle="Инженерим архитектуру, проектируем UX и поставляем понятными инкрементами. Гарантируем прозрачность, качество и масштабируемость."
          imageSrc="/brand/01.png"
          imageAlt="Витрина кейсов и визуальный стиль"
          // ctaLabel="Подробнее"
          ctaHref="/projects"
          pillLabel="Эффективность"
          imageRatio="1 / 1"
          variant="rect"
          hideDecorations
          features={[
            { title: 'Frontend на Next.js/React', description: 'SSR/SSG, App Router, быстрая загрузка и стабильные релизы.' },
            { title: 'Надёжный бэкенд', description: 'Node.js, Payload CMS, PostgreSQL, очереди, фоновые задачи.' },
            { title: 'Интеграции', description: 'Платёжные системы, почтовые сервисы, аналитика, внешние API.' },
            { title: 'Культура качества', description: 'Типизация, тесты, code review и автоматизация CI/CD.' },
          ]}
        />

        <ProjectsCards
          id="cases"
          className="mt-20 md:mt-20"
          showAllButton
          allHref="/projects"
          allLabel="Смотреть все проекты"
          items={[
            {
              title: 'Addwine: e‑commerce платформа',
              description: 'B2C‑магазин с удобным каталогом, фильтрами и промо‑модулями. Next.js + Headless CMS.',
              imageUrl: '/projects/addwine/01.png',
              ctaVariant: 'arrow',
              href: '/projects/addwine',
            },
            {
              title: 'Addwine: мобильный checkout',
              description: 'Ускоренный сценарий оформления заказа и бесшовные оплаты.',
              imageUrl: '/projects/addwine/02.png',
              ctaVariant: 'arrow',
              href: '/projects/addwine',
            },
            {
              title: 'Addwine: личный кабинет',
              description: 'История заказов, трекинг статусов, поведенческие рекомендации.',
              imageUrl: '/projects/addwine/03.png',
              ctaVariant: 'arrow',
              href: '/projects/addwine',
            },
          ]}
        />
      </main>
      <Clients />
      <FAQ
          id="faq"
          title="Частые вопросы (FAQ)"
          subtitle="Коротко отвечаем на самые популярные вопросы о нашей работе"
          items={[
            {
              question: 'Сколько стоит разработка веб‑приложения?',
              answer:
                'Стоимость зависит от объёма функционала и сроков. Мы начинаем с короткого интервью и оценки. Дальше фиксируем бюджет и план работ. Для MVP возможен расширенный Discovery и поэтапная поставка.',
            },
            {
              question: 'Как вы работаете со сроками и рисками?',
              answer:
                'Планируем итерациями 1–2 недели, демонстрируем инкременты на каждом спринте, поддерживаем прозрачную доску задач. Риски фиксируем и регулярно пересматриваем, даём ранние предупреждения и варианты.',
            },
            {
              question: 'С каким стеком вы работаете?',
              answer:
                'Frontend: Next.js, React, TypeScript, TailwindCSS. Backend/Headless: Node.js, Payload CMS, PostgreSQL. Интеграции с платёжными и внешними системами. Выбираем инструменты под задачи и ограничения.',
            },
            {
              question: 'Можно ли начать с небольшой задачи?',
              answer:
                'Да. Мы часто начинаем с пилотной фазы (например, UX‑аудит, прототип, небольшой модуль). Это помогает быстро получить ценность и выстроить процесс.',
            },
          ]}
        />
      <Footer />
    </div>
  );
}
