import type { FC, ReactNode } from 'react';

export type SectionHeadingProps = {
  id?: string;
  as?: 'h1' | 'h2' | 'h3';
  align?: 'left' | 'center';
  size?: 'md' | 'lg';
  className?: string;
  children: ReactNode;
};

const SectionHeading: FC<SectionHeadingProps> = ({
  id,
  as = 'h2',
  align = 'center',
  size = 'md',
  className = '',
  children,
}) => {
  const Tag = as;

  const sizeClasses = size === 'lg'
    ? 'text-4xl md:text-5xl font-semibold tracking-tight'
    : 'text-3xl md:text-4xl font-light tracking-tight';

  const alignClasses = align === 'center' ? 'text-center' : 'text-left';

  return (
    <Tag id={id} className={[sizeClasses, alignClasses, className].join(' ')} tabIndex={0}>
      {children}
    </Tag>
  );
};

export default SectionHeading;
