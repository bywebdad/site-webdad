import type { FC } from 'react'
import Link from 'next/link'

export type ServiceShowcaseFeature = {
  title: string
  description: string
}

export type ServiceShowcaseProps = {
  id?: string
  eyebrow?: string
  title: string
  subtitle?: string
  features: ServiceShowcaseFeature[]
  imageSrc: string
  imageAlt?: string
  ctaLabel?: string
  ctaHref?: string
  pillLabel?: string
  withGrid?: boolean
  imageRatio?: string
  customClipPath?: string
  variant?: 'blob' | 'rect'
  hideDecorations?: boolean
  className?: string
}

const CheckIcon: FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
)

// Иконки для разных типов фичей
const CodeIcon: FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M8 6l-5 6 5 6" />
    <path d="M16 6l5 6-5 6" />
    <path d="M10 4l4 16" />
  </svg>
)

const ServerIcon: FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <rect x="3" y="5" width="18" height="6" rx="2" />
    <rect x="3" y="13" width="18" height="6" rx="2" />
    <path d="M7 8h.01M7 16h.01" />
  </svg>
)

const PlugIcon: FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M9 7v4m6-4v4" />
    <path d="M7 11h10a3 3 0 01-3 3h-4a3 3 0 01-3-3z" />
    <path d="M12 14v4" />
  </svg>
)

const ShieldCheckIcon: FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
)

const FeatureIcon: FC<{ title: string; className?: string }> = ({ title, className = 'h-5 w-5' }) => {
  const t = title.toLowerCase()
  if (t.includes('front')) return <CodeIcon className={className} />
  if (t.includes('интегра')) return <PlugIcon className={className} />
  if (t.includes('бэк') || t.includes('backend') || t.includes('бэкенд')) return <ServerIcon className={className} />
  if (t.includes('культ') || t.includes('качеств')) return <ShieldCheckIcon className={className} />
  return <CheckIcon className={className} />
}

const ArrowUpRightIcon: FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
)

const ServiceShowcase: FC<ServiceShowcaseProps> = ({
  id = 'service-showcase',
  eyebrow = 'Наши услуги',
  title,
  subtitle,
  features,
  imageSrc,
  imageAlt = '',
  ctaLabel = 'Подробнее',
  ctaHref = '#',
  pillLabel,
  withGrid = true,
  imageRatio = '4 / 3',
  customClipPath,
  variant = 'blob',
  hideDecorations = false,
  className = '',
}) => {
  const clipId = `${id}-clip`
  const leftFeatures = features.filter((_, i) => i % 2 === 0)
  const rightFeatures = features.filter((_, i) => i % 2 === 1)
  const shapePath =
    customClipPath ||
    // Более точная форма под референс
    'M 0.05 0.26 C 0.05 0.12 0.15 0.04 0.32 0.04 L 0.68 0.04 C 0.85 0.04 0.95 0.12 0.95 0.30 L 0.95 0.70 C 0.95 0.88 0.85 0.96 0.68 0.96 L 0.46 0.96 C 0.29 0.96 0.18 0.90 0.12 0.80 C 0.11 0.72 0.11 0.59 0.11 0.54 C 0.11 0.42 0.05 0.36 0.05 0.26 Z'

  return (
    <section id={id} className={`relative ${className}`} aria-label="Промо услуг">
      <div className="relative mx-auto max-w-7xl px-6">
        {withGrid ? (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 opacity-70 [background-image:linear-gradient(to_right,rgba(2,6,23,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,6,23,0.06)_1px,transparent_1px)] [background-size:32px_32px] dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [mask-image:radial-gradient(120%_80%_at_30%_40%,black,transparent)]"
          />
        ) : null}
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-x-16 items-start">
        {/* Левый столбец */}
        <div className="lg:col-span-6">
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white whitespace-pre-line">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-4 text-base md:text-lg leading-7 text-neutral-600 dark:text-neutral-300">
              {subtitle}
            </p>
          ) : null}

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <ul className="space-y-5">
              {leftFeatures.map((f) => (
                <li key={f.title} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white dark:bg-jungle-500 shrink-0" aria-hidden="true">
                    <FeatureIcon title={f.title} className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm md:text-base font-semibold text-neutral-900 dark:text-white">{f.title}</div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-300">{f.description}</div>
                  </div>
                </li>
              ))}
            </ul>
            <ul className="space-y-5">
              {rightFeatures.map((f) => (
                <li key={f.title} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand text-white dark:bg-jungle-500 shrink-0" aria-hidden="true">
                    <FeatureIcon title={f.title} className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="text-sm md:text-base font-semibold text-neutral-900 dark:text-white">{f.title}</div>
                    <div className="text-sm text-neutral-600 dark:text-neutral-300">{f.description}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Правый столбец */}
        <div className="lg:col-span-6">
          {variant === 'blob' ? (
            <div className="relative w-full" style={{ aspectRatio: imageRatio }}>
              {/* SVG с clipPath для асимметричной формы */}
              <svg className="absolute inset-0 h-full w-full drop-shadow-[0_24px_48px_rgba(15,23,42,0.18)]" viewBox="0 0 100 75" role="img" aria-label={imageAlt}>
                <defs>
                  <clipPath id={clipId} clipPathUnits="objectBoundingBox">
                    {/* Форма-"плашка": крупные скругления сверху/справа и меньший радиус снизу слева */}
                    <path d={shapePath} />
                  </clipPath>
                </defs>
                <image
                  href={imageSrc}
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMidYMid slice"
                  clipPath={`url(#${clipId})`}
                />
              </svg>


              {/* Нижняя левая pill */}
              {pillLabel ? (
                <div className="absolute bottom-3 md:bottom-4 left-4 inline-flex items-center rounded-full bg-neutral-900/80 text-white px-3 py-1 text-xs backdrop-blur border border-white/10 shadow-sm">
                  {pillLabel}
                </div>
              ) : null}
            </div>
          ) : (
            <div className={hideDecorations ? "relative w-full overflow-hidden" : "relative w-full rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border border-white/10 shadow-xl"} style={{ aspectRatio: imageRatio }}>
              <img
                src={imageSrc}
                alt={imageAlt}
                className="absolute inset-0 m-auto max-w-[88%] max-h-[88%] w-auto h-auto object-contain lg:inset-y-0 lg:left-0 lg:right-auto lg:m-0 lg:my-auto"
                loading="lazy"
              />
              {!hideDecorations && pillLabel ? (
                <div className="absolute bottom-4 left-4 inline-flex items-center rounded-full bg-neutral-900/80 text-white px-3 py-1 text-xs backdrop-blur border border-white/10 shadow-sm">
                  {pillLabel}
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>
    </section>
  )
}

export default ServiceShowcase
