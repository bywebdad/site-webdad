import type { FC } from 'react';

export type FooterLinkItem = {
  label: string;
  href: string;
};

type FooterColumnProps = {
  title: string;
  links: FooterLinkItem[];
};

const FooterColumn: FC<FooterColumnProps> = ({ title, links }) => {
  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((item, idx) => (
          <li key={idx}>
            <a
              href={item.href}
              aria-label={item.label}
              tabIndex={0}
              className="text-sm text-gray-500 transition-colors hover:text-indigo-500 focus-visible:text-indigo-500 focus-visible:outline-none dark:text-gray-400"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
