import type { FC } from 'react';
import ClientLogo from '@atoms/ClientLogo';

type Logo = {
  src: string;
  alt: string;
  className?: string;
};

type ClientsProps = {
  id?: string;
  title?: string;
  logos?: Logo[];
  className?: string;
};

const defaultLogos: Logo[] = [
  {
    src: '/clients/addwine.png',
    alt: 'Transistor',
    className: 'col-span-2 max-h-12 w-full object-contain lg:col-span-1',
  },
  {
    src: '/clients/grand.png',
    alt: 'Reform',
    className: 'col-span-2 max-h-12 w-full object-contain lg:col-span-1',
  },
  {
    src: '/clients/atlant.png',
    alt: 'Tuple',
    className: 'col-span-2 max-h-12 w-full object-contain lg:col-span-1',
  },
  {
    src: '/clients/wikidom.png',
    alt: 'SavvyCal',
    className: 'col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1',
  },
  {
    src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg',
    alt: 'Statamic',
    className: 'col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1',
  },
];

const Clients: FC<ClientsProps> = ({
  id = 'clients',
  title = 'Нам доверяют самые инновационные команды',
  logos = defaultLogos,
  className = '',
}) => {
  return (
    <section id={id} className={`bg-white py-24 sm:py-32 dark:bg-gray-900 ${className}`}>
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {logos.map((logo, idx) => (
            <ClientLogo key={idx} src={logo.src} alt={logo.alt} className={logo.className} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
