"use client";
import { useCallback, useMemo, useState } from 'react';
import type { CSSProperties, PointerEvent as ReactPointerEvent, KeyboardEvent as ReactKeyboardEvent } from 'react';
import Dot from '@atoms/Dot';
import TechCard from '@molecules/TechCard';

const icons = {
  analytics: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-slate-900 dark:text-white"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  ),
  performance: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-slate-900 dark:text-white"
    >
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>
  ),
  automation: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-slate-900 dark:text-white"
    >
      <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
      <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
      <path d="m14 16-3 3 3 3" />
      <path d="M8.293 13.596 7.196 9.5 3.1 10.598" />
      <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" />
      <path d="m13.378 9.633 4.096 1.098 1.097-4.096" />
    </svg>
  ),
  reporting: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-slate-900 dark:text-white"
    >
      <path d="M16 7h6v6" />
      <path d="m22 7-8.5 8.5-5-5L2 17" />
    </svg>
  ),
};

const data = [
  {
    category: 'Analytics',
    title: 'Data Intelligence',
    description:
      'Advanced analytics platform that processes complex data streams and provides actionable insights through machine learning algorithms.',
    bullets: ['98% accuracy', 'Real-time processing'],
    ctaLabel: 'Improve insights by 40%',
    icon: icons.analytics,
  },
  {
    category: 'Performance',
    title: 'System Optimization',
    description:
      'Intelligent performance monitoring that automatically optimizes system resources based on usage patterns and demand forecasting.',
    bullets: ['24/7 monitoring', 'Auto-scaling'],
    ctaLabel: 'Boost efficiency by 35%',
    icon: icons.performance,
  },
  {
    category: 'Automation',
    title: 'Process Automation',
    description:
      'Streamline workflows with intelligent automation. Connect systems, automate tasks, and create efficient operational processes.',
    bullets: ['Zero downtime', 'Smart workflows'],
    ctaLabel: 'Automate 90% of tasks',
    icon: icons.automation,
  },
  {
    category: 'Reporting',
    title: 'Business Intelligence',
    description:
      'Comprehensive reporting suite that transforms raw data into meaningful visualizations and actionable business insights.',
    bullets: ['Custom dashboards', 'Real-time updates'],
    ctaLabel: 'Enhanced reporting suite',
    icon: icons.reporting,
  },
] as const;

const clampIndex = (i: number) => (i + data.length) % data.length;

const Technologies = () => {
  const [active, setActive] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [dragging, setDragging] = useState(false);
  const threshold = 60; // px

  const order = useMemo(() => {
    // order array such that active is first (front), then next, etc.
    return [active, clampIndex(active + 1), clampIndex(active + 2), clampIndex(active + 3)];
  }, [active]);

  const idxToLayer = useCallback(
    (i: number) => {
      // map absolute index to its layer (0 = front, 1, 2, 3)
      return order.indexOf(i);
    },
    [order]
  );

  const getStyles = (i: number) => {
    const layer = idxToLayer(i); // 0..3
    const z = 4 - layer; // 4..1

    // base transforms per layer
    const baseTranslate = [-0, -20, -40, -60][layer];
    const baseScale = [1, 0.96, 0.92, 0.88][layer];
    const baseOpacity = [1, 0.92, 0.84, 0.76][layer];

    // apply drag effect only for front card
    const translateX = layer === 0 ? baseTranslate + dragOffset : baseTranslate;

    return {
      zIndex: z,
      transform: `translateX(${translateX}px) scale(${baseScale})`,
      opacity: baseOpacity,
      transition: dragging ? 'none' : 'transform 300ms ease, opacity 300ms ease',
    } as CSSProperties;
  };

  const handlePointerDown = (e: ReactPointerEvent) => {
    setDragging(true);
    (e.target as Element).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: ReactPointerEvent) => {
    if (!dragging) return;
    setDragOffset((prev) => {
      const next = prev + e.movementX;
      return Math.max(-200, Math.min(200, next));
    });
  };

  const endDrag = () => {
    if (!dragging) return;
    const offset = dragOffset;
    setDragging(false);
    setDragOffset(0);
    if (offset > threshold) {
      setActive((a) => clampIndex(a - 1));
      return;
    }
    if (offset < -threshold) {
      setActive((a) => clampIndex(a + 1));
      return;
    }
  };

  const handleKeyDown = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setActive((a) => clampIndex(a - 1));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setActive((a) => clampIndex(a + 1));
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-white text-slate-900 dark:bg-gray-950 dark:text-white" aria-label="Наши технологии">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          <div className="flex-1 max-w-xl">
            <div className="flex items-center gap-2 text-slate-500 dark:text-gray-400 mb-6">
              <span className="w-2 h-2 bg-slate-900 dark:bg-white rounded-full animate-pulse" />
              <span className="uppercase text-xs font-medium tracking-wide">Наши технологии</span>
            </div>
            <h2 className="text-4xl font-semibold tracking-tight mb-6">Технологический стек</h2>
            <p className="text-base text-slate-600 dark:text-gray-400 mb-8">
              Перетаскивайте карточки или используйте стрелки для навигации — так вы увидите, как мы применяем технологии, чтобы строить инновационные решения.
            </p>

            <div className="flex gap-3 mb-8" role="tablist" aria-label="Навигация по карточкам">
              {data.map((_, i) => (
                <Dot key={i} active={i === active} onClick={() => setActive(i)} ariaLabel={`Показать карточку ${i + 1}`} />
              ))}
            </div>

            <div className="space-y-3 text-sm text-slate-600 dark:text-gray-400">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-slate-400 dark:bg-gray-300 rounded-full" />
                <span>AI-powered analytics platform</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-slate-400 dark:bg-gray-300 rounded-full" />
                <span>Real-time optimization engine</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-slate-400 dark:bg-gray-300 rounded-full" />
                <span>Intelligent automation tools</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-slate-400 dark:bg-gray-300 rounded-full" />
                <span>Comprehensive reporting suite</span>
              </div>
            </div>
          </div>

          <div
            id="tech-cards"
            className="relative mx-auto w-full max-w-sm md:max-w-md lg:max-w-lg min-h-96 grid"
            style={{ gridTemplateAreas: '"stack"' }}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            aria-roledescription="carousel"
            aria-live="polite"
          >
            {data.map((card, i) => {
              const layer = idxToLayer(i);
              const isFront = layer === 0;
              return (
                <div
                  key={card.title}
                  className="[grid-area:stack]"
                  style={getStyles(i)}
                >
                  <div
                    onPointerDown={isFront ? handlePointerDown : undefined}
                    onPointerMove={isFront ? handlePointerMove : undefined}
                    onPointerUp={isFront ? endDrag : undefined}
                    onPointerCancel={isFront ? endDrag : undefined}
                    role="group"
                    aria-label={`${card.category} — ${card.title}`}
                    className="cursor-grab active:cursor-grabbing"
                  >
                    <TechCard
                      category={card.category}
                      title={card.title}
                      description={card.description}
                      bullets={card.bullets}
                      ctaLabel={card.ctaLabel}
                      icon={card.icon}
                      onClickCta={() => {}}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
