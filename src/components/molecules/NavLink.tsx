import Link from 'next/link';
import React from 'react';

interface NavLinkProps { href: string; label: string }

const NavLink: React.FC<NavLinkProps> = ({ href, label }) => (
  <Link
    href={href}
    className="rounded px-2 py-1 text-sm font-medium text-slate-600 hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600"
    aria-label={`Перейти: ${label}`}
  >
    {label}
  </Link>
);

export default NavLink;
