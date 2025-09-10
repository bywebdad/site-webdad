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
  title: 'ИТ‑консалтинг — WEBDAD',
  description: 'Аудит архитектуры, выбор технологий, планирование разработки. Консультации по цифровой трансформации и оптимизации процессов от команды WEBDAD.',
  openGraph: {
    title: 'ИТ‑консалтинг — WEBDAD',
    description: 'Аудит архитектуры, выбор технологий, планирование разработки. Консультации по цифровой трансформации и оптимизации процессов от команды WEBDAD.',
    type: 'website',
    images: [{
      url: '/og-consulting.jpg',
      width: 1200,
      height: 630,
      alt: 'ИТ‑консалтинг от WEBDAD - аудит архитектуры и планирование разработки',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ИТ‑консалтинг — WEBDAD',
    description: 'Аудит архитектуры, выбор технологий, планирование разработки. Консультации по цифровой трансформации и оптимизации процессов от команды WEBDAD.',
    images: ['/og-consulting.jpg'],
  },
};

export default function ServiceConsultingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-gray-900 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <ServiceHero
          eyebrow="Услуги / ИТ‑консалтинг"
          title={"ИТ‑консалтинг\nСтратегия, аудит, архитектура"}
          subtitle="Помогаем принять критичные продуктовые и технические решения: проводим аудит, формируем целевую архитектуру и процесс, собираем дорожную карту и метрики внедрения."
        />
        
        <ServiceProcess
          id="process"
          title="Как проходит ИТ‑консалтинг"
          items={[
            {
              title: 'Discovery и цели',
              result: 'Согласованы бизнес‑цели и критерии успеха',
              duration: '≈ 1–3 дня',
              description:
                'Интервью со стейкхолдерами, разбор контекста, метрик и ограничений. Фиксируем ожидания и область работ.',
            },
            {
              title: 'Аудит продукта и технологий',
              result: 'Чек‑лист рисков и находок',
              duration: '≈ 1–2 недели',
              description:
                'Анализ архитектуры, кода, инфраструктуры и безопасности; оценка процессов разработки и качества; обзор продуктовой аналитики.',
            },
            {
              title: 'Целевая архитектура и процесс',
              result: 'Рекомендации и целевая схема',
              duration: '≈ 3–5 дней',
              description:
                'Проектируем целевую архитектуру, определяем границы доменов, DevOps‑практики, SLA и подходы к качеству.',
            },
            {
              title: 'Дорожная карта и приоритеты',
              result: 'Roadmap и quick wins',
              duration: '≈ 2–3 дня',
              description:
                'Формируем план внедрения рекомендаций, приоритизируем риски и инициативы, оцениваем сроки и стоимость.',
            },
            {
              title: 'Сопровождение внедрения',
              result: 'Измеримый прогресс и поддержка',
              duration: 'По запросу',
              description:
                'Сопровождаем внедрение, проводим воркшопы, помогаем запустить первые итерации и выстроить контроль метрик.',
            },
          ]}
        />

        <ServiceShowcase
          id="showcase-consulting"
          eyebrow="ИТ‑консалтинг"
          title={"Примем ключевые решения\nбыстро и обоснованно"}
          subtitle="Дадим независимую оценку текущего состояния и предложим путь к целевому: от архитектуры до процессов и метрик."
          imageSrc="/brand/01.png"
          imageAlt="ИТ‑консалтинг: аудит и стратегия"
          ctaHref="/company"
          pillLabel="Аудит"
          variant="rect"
          hideDecorations
          features={[
            { title: 'Архитектурный аудит', description: 'Обзор систем, интеграций, узких мест и стоимости владения.' },
            { title: 'Стратегия и roadmap', description: 'Цели, гипотезы, quick wins и план внедрения инициатив.' },
            { title: 'Процессы разработки', description: 'CI/CD, тестирование, релизы, SLA и культура качества.' },
            { title: 'Технологии и облако', description: 'Обоснованный выбор стеков, PaaS/IaaS и оценка стоимости.' },
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
              imageUrl: '/projects/addwine/01.png',
              ctaVariant: 'arrow',
              href: '/projects/addwine',
            },
            {
              title: 'Современный интернет-магазин для бокалов Sophienwald',
              description: 'Каждый бокал заслуживает не только великолепного вина — но и достойного представления',
              imageUrl: '/projects/sophienwald/01.png',
              ctaVariant: 'arrow',
              href: '/projects/sophienwald',
            },
            {
              title: 'Корпоративный сайт застройщика жилых комплексов',
              description: 'От дизайна до разработки корпоративного сайта застройщика элитного жилья',
              imageUrl: '/projects/amatar/01.png',
              ctaVariant: 'arrow',
              href: '/projects/amatar',
            },
          ]}
        />
      </main>
      <Clients />
      <FAQ
          id="faq"
          title="FAQ по ИТ‑консалтингу"
          subtitle="О формате, сроках и результатах"
          items={[
            {
              question: 'Что входит в ИТ‑консалтинг?',
              answer:
                'Аудит продукта, архитектуры, кода, инфраструктуры и процессов. Рекомендации, целевая архитектура, roadmap и метрики.',
            },
            {
              question: 'Каковы сроки и формат работы?',
              answer:
                'Обычно 2–4 недели: интервью, анализ артефактов, воркшопы. Возможен ускоренный формат по ключевым вопросам.',
            },
            {
              question: 'Какие артефакты вы передаёте?',
              answer:
                'Отчёт с находками и рекомендациями, схемы целевой архитектуры, дорожная карта, метрики и список рисков.',
            },
            {
              question: 'Помогаете ли вы внедрить рекомендации?',
              answer:
                'Да. Сопровождаем внедрение, помогаем собрать команду и можем взять часть реализации под ключ.',
            },
            {
              question: 'Как рассчитывается стоимость?',
              answer:
                'Фикс за согласованный объём или T&M. Предварительная оценка после короткого звонка и ревью контекста.',
            },
          ]}
        />
      <Footer />
    </div>
  );
}
