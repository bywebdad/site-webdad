import type { Metadata } from 'next';
import Navbar from '@organisms/Navbar';
import Footer from '@organisms/Footer';
import BlogHero from '@templates/BlogHero';
import CompanyIntro from '@templates/CompanyIntro';
import CompanyValues from '@templates/CompanyValues';
import Clients from '@templates/Clients';
import RequestForm from '@organisms/RequestForm';

export const metadata: Metadata = {
  title: 'Компания — NewSite',
  description: 'О компании NewSite: чем мы занимаемся, наши принципы и чем помогаем бизнесу.',
};

export default function CompanyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-gray-900 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <BlogHero
          title="WEBDAD - больше чем просто компания"
          subtitle="Мы создаём современные веб‑решения, помогаем компаниям автоматизировать процессы и ускорять рост. Заменяем хаос из Excel и мессенджеров на понятные цифровые системы."
          ctaLabel="Связаться с нами"
          ctaHref="/#contact"
        />
        <CompanyValues
          title="Наши ценности и подход"
          subtitle="Наша цель — помочь предприятиям автоматизировать рутинные процессы."
          items={[
            {
              title: 'Автоматизируем рутину — освобождая время для роста',
              description:
                'Мы помогаем компаниям избавиться от повторяющихся задач, внедряя умные цифровые решения, которые работают 24/7.',
            },
            {
              title: 'Для тех, кто стремится',
              description:
                'Наша работа — поддержка амбициозных лидеров и команд, готовых к цифровому развитию и реальным изменениям.',
            },
            {
              title: 'Цифровые решения — под ключ',
              description:
                'От веб‑сайтов до приложений — наши специалисты создают удобные, быстрые и масштабируемые продукты под ваши задачи.',
            },
            {
              title: 'Всё — для клиента',
              description:
                'Клиент в центре всего, что мы делаем. Мы слушаем, понимаем и превосходим ожидания, чтобы вы были в восторге.',
            },
            {
              title: 'Мы — команда',
              description:
                'Сила в единстве и доверии. Мы помогаем друг другу расти, делимся знаниями и работаем как одна система — ради вашего результата.',
            },
            {
              title: 'Технологии в каждый бизнес',
              description:
                'Мы верим: простые, удобные решения могут изменить бизнес — и сделать будущее лучше уже сегодня.',
            },
          ]}
        />

        <CompanyIntro
          title="Работайте с WEBDAD"
          subtitle="Мы верим в сильные продуктовые команды, прозрачные процессы и бережное отношение к времени. Присоединяйтесь, чтобы вместе создавать понятные и красивые цифровые сервисы."
          links={[
            { label: 'Открытые вакансии →', href: '#' },
            { label: 'Стажёрская программа →', href: '#' },
            { label: 'Наши ценности →', href: '#' },
            { label: 'Наша команда →', href: '#' },
          ]}
          stats={[
            { label: 'Офисы по миру', value: '12' },
            { label: 'Сотрудников full‑time', value: '300+' },
            { label: 'Часов в неделю', value: '40' },
            { label: 'Оплачиваемый отпуск', value: 'Unlimited' },
          ]}
        />

        <Clients />
        
      </main>
      <Footer />
    </div>
  );
}
