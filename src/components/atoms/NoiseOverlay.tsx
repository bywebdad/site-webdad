"use client";
import type { CSSProperties, FC } from 'react';

export type NoiseOverlayProps = {
  intensity?: number; // 0..1, прозрачность шума
  frequency?: number; // baseFrequency для feTurbulence (обычно 0.6–1.2)
  octaves?: number; // количество октав шума
  blendMode?: CSSProperties['mixBlendMode']; // режим смешивания шума с фоном
  className?: string;
};

/**
 * Атом: полноэкранный шумовой оверлей на базе SVG feTurbulence.
 * - Рендерит «плитку» SVG 180x180 с повторением.
 * - Наследует маскировку от родителя (используйте CSS mask на контейнере).
 */
const NoiseOverlay: FC<NoiseOverlayProps> = ({
  intensity = 0.06,
  frequency = 0.8,
  octaves = 2,
  blendMode = 'soft-light',
  className = '',
}) => {
  const svg = `\
<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180' viewBox='0 0 180 180'>\
  <filter id='n'>\
    <feTurbulence type='fractalNoise' baseFrequency='${frequency}' numOctaves='${octaves}' stitchTiles='stitch'/>\
    <feColorMatrix type='saturate' values='0'/>\
  </filter>\
  <rect width='100%' height='100%' filter='url(#n)'/>\
</svg>`;

  const dataUrl = `url("data:image/svg+xml;utf8,${encodeURIComponent(svg)}")`;

  return (
    <div
      aria-hidden
      className={[
        'pointer-events-none absolute inset-0',
        className,
      ].join(' ')}
      style={{
        backgroundImage: dataUrl,
        backgroundRepeat: 'repeat',
        backgroundSize: '180px 180px',
        mixBlendMode: blendMode,
        opacity: intensity,
      }}
    />
  );
};

export default NoiseOverlay;
