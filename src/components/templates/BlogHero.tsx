"use client";
import type { FC } from 'react';
import Button from '@atoms/Button';
import { useRouter } from 'next/navigation';

export type BlogHeroProps = {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  videoSrc?: string;
};

const BlogHero: FC<BlogHeroProps> = ({
  title = "Блог - где бизнес становится умнее ",
  subtitle =
    "Здесь мы делимся экспертными знаниями, разбираем сложные темы простым языком и рассказываем, как современные технологии меняют веб-разработку. Мы помогаем компаниям заменить Excel, WhatsApp и бумажки на умные системы, которые работают 24/7. ",
  ctaLabel = 'Кнопка',
  ctaHref = '#',
  videoSrc = '/blog/0_1080_N.mp4',
}) => {
  const router = useRouter();
  const handleCtaClick = () => {
    if (!ctaHref) return;
    router.push(ctaHref);
  };
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900" aria-label="Hero Блог">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-6 sm:static">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              {title}
            </h1>
            <p className="mt-4 text-xl text-gray-500 dark:text-gray-300">{subtitle}</p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid with video tile */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:top-0 sm:left-1/2 sm:translate-x-8 lg:top-1/2 lg:left-1/2 lg:translate-x-8 lg:-translate-y-1/2">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          alt=""
                          src="/blog/01.png"
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="/blog/02.png"
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="/blog/03.png"
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <video
                          src={videoSrc}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="/blog/04.png"
                          className="size-full object-cover"
                        />
                      </div>
                      
                    </div>
                    <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="/blog/05.png"
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="/blog/06.png"
                          className="size-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
