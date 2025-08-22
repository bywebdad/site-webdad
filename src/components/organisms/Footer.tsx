import type { FC } from 'react';
import Logo from '@atoms/Logo';
import SocialLink from '@atoms/SocialLink';
import FooterColumn, { type FooterLinkItem } from '@molecules/FooterColumn';

const footerProducts: FooterLinkItem[] = [
  { label: 'Платёжные решения', href: '#' },
  { label: 'Интеграции', href: '#' },
  { label: 'Карты и счета', href: '#' },
  { label: 'Инвестиции', href: '#' },
  { label: 'Кредиты', href: '#' },
];

const footerCompany: FooterLinkItem[] = [
  { label: 'О компании', href: '#' },
  { label: 'Карьера', href: '#' },
  { label: 'Пресса', href: '#' },
  { label: 'Блог', href: '#' },
  { label: 'Контакты', href: '#' },
];

const footerSupport: FooterLinkItem[] = [
  { label: 'Центр помощи', href: '#' },
  { label: 'Сообщество', href: '#' },
  { label: 'Безопасность', href: '#' },
  { label: 'Конфиденциальность', href: '#' },
  { label: 'Условия использования', href: '#' },
];

const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 bg-white pt-16 pb-8  dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Верхняя сетка: бренд + навигация */}
        <div className="mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Бренд */}
          <div className="md:col-span-1">
            <div className="mb-5 flex items-center">
              <div className="mr-2 flex items-center">
                <div className="flex items-center justify-center">
                  <Logo />
                </div>
              </div>
            </div>
            <p className="mb-5 text-sm text-gray-600 dark:text-gray-400">
            Миссия WebDad - развивать бизнес-экосистему, которая поможет автоматизировать процессы и сэкономить время бизнеса и людей для новых достижений, инноваций и творчества.
            </p>
            <div className="flex space-x-4">
              <SocialLink
                href="#"
                label="X (Twitter)"
                icon={(
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                )}
              />
              <SocialLink
                href="#"
                label="Instagram"
                icon={(
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                  </svg>
                )}
              />
              <SocialLink
                href="#"
                label="YouTube"
                icon={(
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 01-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 01-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 011.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd"></path>
                  </svg>
                )}
              />
            </div>
          </div>

          {/* Быстрые ссылки */}
          <FooterColumn title="Продукты" links={footerProducts} />
          <FooterColumn title="Компания" links={footerCompany} />
          <FooterColumn title="Поддержка" links={footerSupport} />
        </div>

        {/* Разделитель и нижняя строка */}
        <div className="border-t border-gray-200/60 pt-8 dark:border-white/10">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-500 dark:text-gray-400">© {year} NewSite. Все права защищены.</p>
            <div className="flex space-x-6">
              <a href="#" className="text-xs text-gray-500 transition-colors hover:text-indigo-500 focus-visible:text-indigo-500 dark:text-gray-400 dark:hover:text-white dark:focus-visible:text-white">Конфиденциальность</a>
              <a href="#" className="text-xs text-gray-500 transition-colors hover:text-indigo-500 focus-visible:text-indigo-500 dark:text-gray-400 dark:hover:text-white dark:focus-visible:text-white">Условия</a>
              <a href="#" className="text-xs text-gray-500 transition-colors hover:text-indigo-500 focus-visible:text-indigo-500 dark:text-gray-400 dark:hover:text-white dark:focus-visible:text-white">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
