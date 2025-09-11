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
  title: 'AI и аналитика — WEBDAD',
  description: 'Машинное обучение, предсказательная аналитика, автоматизация процессов с помощью искусственного интеллекта от команды WEBDAD.',
  openGraph: {
    title: 'AI и аналитика — WEBDAD',
    description: 'Машинное обучение, предсказательная аналитика, автоматизация процессов с помощью искусственного интеллекта от команды WEBDAD.',
    type: 'website',
    images: [{
      url: '/og-ai-analytics.jpg',
      width: 1200,
      height: 630,
      alt: 'AI и аналитика от WEBDAD - машинное обучение и предсказательная аналитика',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI и аналитика — WEBDAD',
    description: 'Машинное обучение, предсказательная аналитика, автоматизация процессов с помощью искусственного интеллекта от команды WEBDAD.',
    images: ['/og-ai-analytics.jpg'],
  },
};

export default function ServiceAiAnalyticsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-gray-900 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <ServiceHero
          eyebrow="Услуги / AI и аналитика"
          title={"AI и аналитика\nML, Big Data, BI"}
          subtitle="Внедряем ML и big data для бизнес‑эффекта и автоматизации."
        />
        
        <ServiceProcess
          id="process"
          title="Как мы строим AI и аналитику"
          items={[
            {
              title: 'Discovery и цели',
              result: 'Согласованы бизнес‑цели, KPI и источники данных',
              duration: '≈ 1–3 дня',
              description:
                'Интервью и анализ задач: какие решения принимаются на данных, какие метрики важны, какие гипотезы проверить.',
            },
            {
              title: 'Данные и инфраструктура',
              result: 'Карта источников, качество данных и архитектура DWH/Lake',
              duration: '≈ 1–2 недели',
              description:
                'Аудит источников, схем и доступов; оценка качества данных, проектирование пайплайнов (ETL/ELT), выбор хранилища.',
            },
            {
              title: 'Модели и аналитика',
              result: 'Гипотезы, фичи и прототипы моделей/дашбордов',
              duration: '≈ 3–10 дней',
              description:
                'Фиче‑инжиниринг, выбор алгоритмов (ML/ классика / LLM), прототипирование; дизайн BI‑дашбордов и метрик.',
            },
            {
              title: 'MLOps и прод',
              result: 'Пайплайны, мониторинг и автоматизация релизов',
              duration: '≈ 1–2 недели',
              description:
                'Оркестрация задач, деплой моделей и аналитики, мониторинг качества и дрифта, A/B‑эксперименты.',
            },
            {
              title: 'Внедрение и эффект',
              result: 'Интеграция и измеримый ROI',
              duration: 'На постоянной основе',
              description:
                'Встраиваем в процессы, обучаем команду, настраиваем метрики эффекта и оптимизируем стоимость владения.',
            },
          ]}
        />

        <ServiceShowcase
          id="showcase-ai-analytics"
          eyebrow="AI и аналитика"
          title={"От данных к решению\nза недели"}
          subtitle="Строим пайплайны данных, обучаем модели и создаём BI‑дашборды. Производственный контур и MLOps — сразу в проекте."
          imageSrc="/brand/01.webp"
          imageAlt="AI и аналитика: ML, Big Data, BI"
          ctaLabel="Связаться"
          ctaHref="/company"
          pillLabel="ML • BI"
          variant="rect"
          hideDecorations
          features={[
            { title: 'ML‑модели под задачу', description: 'Прогноз, классификация, рекомендации, NLP/LLM.' },
            { title: 'Data pipelines и DWH', description: 'ETL/ELT, оркестрация, качество данных и каталоги.' },
            { title: 'MLOps и мониторинг', description: 'Деплой, мониторинг дрифта, A/B‑эксперименты.' },
            { title: 'BI‑дашборды и self‑service', description: 'Метрики, визуализации и принятие решений на данных.' },
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
              title: 'Система геовизуализации от идеи до промышленного решения',
              description: 'Система геовизуализации для анализа и визуализации данных на карте.',
              imageUrl: '/projects/geomarketing/09.webp',
              ctaVariant: 'arrow',
              href: '/projects/geomarketing',
            },
            {
              title: 'Аналитические дашборды рынка недвижимости',
              description: 'Мы разработали комплексную систему аналитики, которая отображает ключевые метрики рынка в режиме реального времени.',
              imageUrl: '/projects/real-estate-analytics/02.png',
              ctaVariant: 'arrow',
              href: '/projects/real-estate-analytics',
            },
          ]}
        />
      </main>
      <Clients />
      <FAQ
        id="faq"
        title="FAQ по AI и аналитике"
        subtitle="О данных, сроках и качестве моделей"
        items={[
          {
            question: 'Готовы ли наши данные для ML/BI?',
            answer:
              'Оценим качество данных, схему и доступы. При необходимости поможем построить пайплайны и хранилище (DWH/Lake).',
          },
          {
            question: 'Сколько времени занимает первый результат?',
            answer:
              'Обычно 2–6 недель до прототипа модели или набора дашбордов. Срок зависит от источников, качества данных и целей.',
          },
          {
            question: 'Как вы контролируете качество моделей?',
            answer:
              'Метрики offline/online, контроль дрифта, A/B‑эксперименты, мониторинг в проде и регулярный пересмотр фич/алгоритмов.',
          },
          {
            question: 'Нужна ли специальная инфраструктура?',
            answer:
              'Работаем в облаках и on‑prem. Подскажем оптимальные сервисы (GPU/кластер/оркестрация) и поможем рассчитать стоимость.',
          },
          {
            question: 'Как с безопасностью и соответствием требованиям?',
            answer:
              'Следуем политикам безопасности, шифруем данные, ограничиваем доступы. Учитываем требования комплаенса и регуляторов.',
          },
        ]}
      />
      <Footer />
    </div>
  );
}
