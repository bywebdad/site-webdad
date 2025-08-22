import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NewSite',
  description: 'Landing built with Next.js and TailwindCSS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(() => { try {
              const KEY = 'theme';
              const stored = localStorage.getItem(KEY);
              const theme = stored || 'light';
              const root = document.documentElement;
              if (theme === 'dark') { root.classList.add('dark'); }
              else { root.classList.remove('dark'); }
            } catch (e) {} })();`,
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900 dark:bg-gray-900 dark:text-white">{children}</body>
    </html>
  );
}
