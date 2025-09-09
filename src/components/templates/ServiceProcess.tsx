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
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-3 text-lg leading-8 text-gray-600 dark:text-gray-300">{subtitle}</p>
          ) : null}
        </div>

        <div className="mx-auto mt-10 max-w-7xl">
          {/* Линия + пронумерованные этапы, результат внутри каждого этапа */}
          <div className="relative">
            <div aria-hidden className="pointer-events-none absolute inset-x-0 z-0 top-[calc(8rem+2.25rem)] lg:top-[calc(8rem+2.2rem)] hidden h-px bg-gray-200 dark:bg-white/10 lg:block" />
            <ol
              className="grid grid-flow-col auto-cols-[minmax(240px,1fr)] gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth overscroll-x-contain pb-2 lg:pb-0 lg:auto-cols-fr lg:gap-6 lg:overflow-visible"
              role="region"
              aria-label="Этапы процесса"
              aria-roledescription="carousel"
            >
              {items.map((item, index) => (
                <li
                  key={item.title}
                  className="group/step relative shrink-0 min-w-[240px] sm:min-w-[280px] max-w-xs lg:max-w-none snap-start lg:flex-1 grid grid-rows-[8rem_3rem_auto] gap-y-3 lg:gap-y-4 items-start text-center"
                >
                  {/* Результат (фиксированная высота ряда для выравнивания) */}
                  <div className="row-start-1 row-end-2 flex items-stretch justify-center">
                    <dl className="w-full max-w-[16rem] sm:max-w-[18rem] lg:max-w-[13rem]">
                      <div className="flex h-full w-full flex-col rounded-lg p-3 ring-2 ring-inset ring-gray-900/5 dark:bg-gray-800/60 dark:ring-white/10">
                        <dt className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">Результат</dt>
                        <dd className="text-sm leading-5 text-gray-900 dark:text-gray-100">{item.result}</dd>
                      </div>
                    </dl>
                  </div>

                  {/* Номер шага в собственной строке фиксированной высоты */}
                  <div className="row-start-2 row-end-3 flex items-center justify-center relative">
                    <span className="z-10 flex h-9 w-9 items-center justify-center rounded-full bg-brand-500 dark:bg-jungle-500 text-xs font-bold text-white ring-4 ring-white dark:ring-gray-900">
                      {index + 1}
                    </span>
                  </div>

                  {/* Контент шага */}
                  <div className="row-start-3 row-end-4">
                    <div className="mx-auto max-w-[18rem] sm:max-w-[16rem] lg:max-w-[14rem]">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
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
