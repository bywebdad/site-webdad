import type { FC, ReactNode } from 'react';
import FeatureItem from '@features/projects/atoms/FeatureItem';

export type Feature = {
  icon: ReactNode;
  title: string;
  description: string;
};

export type FeaturesListProps = {
  items: Feature[];
  className?: string;
  textColorClass?: string; // позволяет переопределить цвет текста в тёмной теме
};

const FeaturesList: FC<FeaturesListProps> = ({ items, className = '', textColorClass = 'text-gray-700' }) => {
  if (!items?.length) return null;

  return (
    <ul role="list" className={["mt-8 space-y-8", textColorClass, className].join(' ')}>
      {items.map((item) => (
        <FeatureItem key={item.title} icon={item.icon} title={item.title} description={item.description} />
      ))}
    </ul>
  );
};

export default FeaturesList;
