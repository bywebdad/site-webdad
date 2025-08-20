import type { FC, ReactNode } from 'react';

type SocialLinkProps = {
  href: string;
  label: string;
  icon: ReactNode;
  className?: string;
};

const SocialLink: FC<SocialLinkProps> = ({ href, label, icon, className }) => {
  return (
    <a
      href={href}
      aria-label={label}
      tabIndex={0}
      className={`w-9 h-9 rounded-full bg-indigo-900/70 flex items-center justify-center text-gray-300 transition-colors hover:bg-purple-600 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${className ?? ''}`}
    >
      {icon}
    </a>
  );
};

export default SocialLink;
