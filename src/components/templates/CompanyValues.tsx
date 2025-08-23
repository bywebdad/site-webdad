import type { FC } from 'react';
import ValueCard from '@molecules/ValueCard';

export type CompanyValuesItem = {
  title: string;
  description: string;
};

export type CompanyValuesProps = {
  title?: string;
  subtitle?: string;
  items: CompanyValuesItem[];
  className?: string;
};

const CompanyValues: FC<CompanyValuesProps> = ({
  title = 'Наши ценности',
  subtitle,
  items,
  className = '',
}) => {
  return (
    <section className={["py-16 sm:py-20", className].join(' ')} aria-labelledby="company-values-title">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <h3 id="company-values-title" className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h3>
          {subtitle ? (
            <p className="mt-2 text-gray-600 dark:text-white/70">{subtitle}</p>
          ) : null}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, idx) => (
            <ValueCard key={idx} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;
