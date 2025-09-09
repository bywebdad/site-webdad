'use client'

import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import React from 'react'

export type FAQItem = {
  question: string
  answer: string
}

export type FAQProps = {
  title: string
  subtitle?: string
  items: FAQItem[]
  id?: string
}

const FAQ: React.FC<FAQProps> = ({ title, subtitle, items, id = 'faq' }) => {
  if (!items?.length) return null

  return (
    <section id={id} className="relative py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-3 text-lg leading-8 text-gray-600 dark:text-gray-300">{subtitle}</p>
          ) : null}
        </div>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-gray-200 dark:divide-white/10">
          {items.map((item, idx) => (
            <Disclosure as="div" key={idx} className="py-4">
              {({ open }) => (
                <>
                  <Disclosure.Button
                    className="group flex w-full items-center justify-between gap-4 text-left outline-none"
                    aria-label={`Вопрос: ${item.question}`}
                  >
                    <span className="text-base font-medium text-gray-900 dark:text-white">
                      {item.question}
                    </span>
                    <ChevronDownIcon
                      className={`size-5 flex-none text-gray-500 transition-transform group-data-open:rotate-180 dark:text-gray-400 ${
                        open ? 'rotate-180' : 'rotate-0'
                      }`}
                      aria-hidden="true"
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel
                    static={false}
                    className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300"
                  >
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
