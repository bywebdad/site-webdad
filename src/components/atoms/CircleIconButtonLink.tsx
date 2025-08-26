import React from 'react'
import Link from 'next/link'

export type CircleIconButtonLinkProps = {
  href: string
  ariaLabel: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeMap: Record<NonNullable<CircleIconButtonLinkProps['size']>, string> = {
  sm: 'w-9 h-9',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
}

const CircleIconButtonLink: React.FC<CircleIconButtonLinkProps> = ({ href, ariaLabel, size = 'md', className = '' }) => {
  const sizeClasses = sizeMap[size]
  const classes = [
    'group relative z-10 inline-flex items-center justify-center rounded-full text-white transition',
    'bg-brand dark:bg-jungle-500 border border-brand dark:border-jungle-500',
    'hover:bg-brand-600 group-hover:bg-brand-600 dark:group-hover:bg-jungle-500',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-900',
    sizeClasses,
    className,
  ].join(' ')

  return (
    <Link href={href} aria-label={ariaLabel} className={classes} tabIndex={0}>
      <span className="block group-hover:hidden" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      </span>
      <span className="hidden group-hover:block" aria-hidden="true">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14"></path>
          <path d="M5 12h14"></path>
        </svg>
      </span>
    </Link>
  )
}

export default CircleIconButtonLink
