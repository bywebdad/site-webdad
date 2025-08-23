'use client';
import type { FC, HTMLAttributes, MouseEvent } from 'react';
import { useRef, useState } from 'react';
import NoiseOverlay from '@atoms/NoiseOverlay';

export type ValueCardProps = {
  title: string;
  description: string;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

const ValueCard: FC<ValueCardProps> = ({ title, description, className = '', ...rest }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState<{ x: number; y: number }>({ x: -9999, y: -9999 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPos({ x, y });
  };

  const handleMouseLeave = () => {
    setPos({ x: -9999, y: -9999 });
  };

  const handleFocus = () => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos({ x: rect.width / 2, y: rect.height / 2 });
  };

  const handleBlur = () => {
    setPos({ x: -9999, y: -9999 });
  };

  return (
    <article
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      className={[
        'group relative overflow-hidden rounded-xl border p-6',
        // 'border-brand-300 bg-white/60 shadow-sm backdrop-blur-sm',
        // 'hover:border-brand-400',
        // 'dark:border-jungle-400 dark:bg-white/[0.02] dark:shadow-none dark:hover:border-jungle-400',
        'transition-colors',
        className,
      ].join(' ')}
      aria-label={title}
      tabIndex={0}
      {...rest}
    >
      {/* Blur/Glow overlay, masked кругом под курсором: светлая тема (brand) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 dark:hidden"
        style={{
          WebkitMaskImage: `radial-gradient(460px circle at ${pos.x}px ${pos.y}px, #000 0%, transparent 60%)`,
          maskImage: `radial-gradient(660px circle at ${pos.x}px ${pos.y}px, #000 0%, transparent 60%)`,
        }}
      >
        <div className="absolute inset-0 rounded-xl backdrop-blur-md" />
        <div
          className="absolute inset-0 rounded-xl"
          style={{
            background: `radial-gradient(460px circle at ${pos.x}px ${pos.y}px, rgba(255,115,23,0.3), rgba(255,115,23,0.2) 40%, transparent 60%)`,
          }}
        />
        <NoiseOverlay intensity={0.39} frequency={0.85} octaves={3} blendMode="soft-light" />
      </div>
      {/* Blur/Glow overlay, masked кругом под курсором: тёмная тема (jungle-400) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 dark:block"
        style={{
          WebkitMaskImage: `radial-gradient(460px circle at ${pos.x}px ${pos.y}px, #000 0%, transparent 60%)`,
          maskImage: `radial-gradient(660px circle at ${pos.x}px ${pos.y}px, #000 0%, transparent 60%)`,
        }}
      >
        <div className="absolute inset-0 rounded-xl backdrop-blur-md" />
        <div
          className="absolute inset-0 rounded-xl"
          style={{
            /* jungle-400: #54b393 */
            background: `radial-gradient(460px circle at ${pos.x}px ${pos.y}px,rgba(84, 179, 147,0.4), rgba(84,179,147,0.30) 40%, transparent 60%)`,
          }}
        />
        <NoiseOverlay intensity={0.89} frequency={0.85} octaves={3} blendMode="soft-light" />
      </div>

      <h4 className="mb-2 font-medium tracking-tight text-gray-900 dark:text-white">{title}</h4>
      <p className="text-sm text-gray-600 dark:text-white/70">{description}</p>
    </article>
  );
};

export default ValueCard;
