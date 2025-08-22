import type { FC } from 'react';

export type PatternGridProps = {
  className?: string;
  strokeClassName?: string; // цвет линий сетки
  fillClassName?: string; // цвет заливки фигур
  patternId?: string;
  svgClassName?: string; // дополнительные классы для корневого svg
};

// Универсальный фон с паттерном-сеткой и декоративными блоками
const PatternGrid: FC<PatternGridProps> = ({
  className = '',
  strokeClassName = 'stroke-gray-200',
  fillClassName = 'fill-gray-50',
  patternId = 'pattern-grid',
  svgClassName = ''
}) => {
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`} aria-hidden="true">
      <svg className={`absolute top-0 left-1/2 -translate-x-1/2 ${strokeClassName} ${svgClassName}`}>
        <defs>
          <pattern id={patternId} x="50%" y={-1} width={200} height={200} patternUnits="userSpaceOnUse">
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className={`overflow-visible ${fillClassName}`}>
          <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" strokeWidth={0} />
        </svg>
        <rect fill={`url(#${patternId})`} width="100%" height="100%" strokeWidth={0} />
      </svg>
    </div>
  );
};

export default PatternGrid;
