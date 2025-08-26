import React from 'react'

export type ServiceProcessItem = {
  title: string
  result: string
  duration: string
  description: string
}

export type ServiceProcessProps = {
  title: string
  subtitle?: string
  items: ServiceProcessItem[]
  id?: string
}

const ServiceProcess: React.FC<ServiceProcessProps> = ({ title, subtitle, items, id = 'service-process' }) => {
  if (!items?.length) return null

  return (
    <section id={id} className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-3 text-lg leading-8 text-gray-600 dark:text-gray-300">{subtitle}</p>
          ) : null}
        </div>

        <div className="mx-auto mt-12 max-w-6xl">
          {/* Ряд 1: только карточки "Результат" */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch">
            {items.map((item) => (
              <div key={item.title} className="flex-1 flex">
                <div className="flex flex-col items-center text-center lg:px-2 mt-4 lg:mt-6 w-full">
                  <dl className="w-full max-w-xs h-full">
                    <div className="flex h-full flex-col rounded-lg p-3 ring-1 ring-inset ring-gray-900/5 dark:bg-gray-800/60 dark:ring-white/10">
                      <dt className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">Результат</dt>
                      <dd className="text-sm text-gray-900 dark:text-gray-100">{item.result}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            ))}
          </div>

          {/* Ряд 2: линия + цифры + тексты */}
          <div className="relative">
            <div
              aria-hidden
              className="absolute left-0 right-0 top-[29px] lg:top-[69px] hidden h-0.5 bg-gray-200 dark:bg-white/10 lg:block"
            />
            <ol className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-6">
              {items.map((item, index) => (
                <li key={item.title} className="relative flex-1">
                  <div className="flex flex-col items-center text-center lg:pt-14">
                    <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-[18px] lg:top-[58px] z-10 flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 dark:bg-jungle-500 text-xs font-bold text-white ring-4 ring-white dark:ring-gray-900">
                      {index + 1}
                    </span>
                    <h3 className="mt-12 text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceProcess
