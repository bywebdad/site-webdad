import type { FC, ReactNode } from 'react';

export type FeatureItemProps = {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
};

const FeatureItem: FC<FeatureItemProps> = ({ icon, title, description, className = '' }) => {
  return (
    <li className={["flex gap-x-3", className].join(' ')}>
      <span aria-hidden className="mt-1 size-5 flex-none text-brand-600 dark:text-brand-300">{icon}</span>
      <span className="text-inherit">
        <strong className="font-semibold text-inherit">{title}</strong>{' '}
        {description}
      </span>
    </li>
  );
};

export default FeatureItem;
