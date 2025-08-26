import type { FC } from 'react';
import ServiceCard from '@molecules/ServiceCard';
type ServicesProps = {
  eyebrow?: string;
  title?: string;
};

const Services: FC<ServicesProps> = ({
  eyebrow = 'От идеи до реализации и поддержки',
  title = 'Полный цикл IT-услуг'
}) => {
  return (
    <section className=" py-24 dark:bg-gray-900 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-base font-semibold text-brand-500 dark:text-jungle-500">{eyebrow}</h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl dark:text-white">
          {title}
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: 'Разработка ПО',
              description: 'Создаём современные веб- и мобильные приложения под ключ.',
              img: 'https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png',
              alt: 'Mobile friendly preview',
              href: '/services/development',
            },
            {
              title: 'IT-аутсорсинг',
              description: 'Эффективная поддержка и развитие вашей ИТ-инфраструктуры.',
              img: 'https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png',
              alt: 'Performance preview',
              href: '/services/outsourcing',
            },
            {
              title: 'IT-консалтинг',
              description: 'Помогаем выбирать технологии и архитектуру, сокращая риски и сроки.',
              img: 'https://tailwindcss.com/plus-assets/img/component-images/bento-03-security.png',
              alt: 'Security preview',
              href: '/services/consulting',
            },
            {
              title: 'AI и аналитика',
              description: 'Внедряем ML и big data для бизнес-эффекта и автоматизации.',
              img: 'https://tailwindcss.com/plus-assets/img/component-images/bento-03-performance.png',
              alt: 'Analytics preview',
              href: '/services/ai-analytics',
            },
          ].map((item) => (
            <ServiceCard
              key={item.title}
              title={item.title}
              description={item.description}
              img={item.img}
              alt={item.alt}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
