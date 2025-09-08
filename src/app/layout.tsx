import type { Metadata } from 'next';
import './globals.css';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'IT-компания WEBDAD разработка веб-приложений',
  description: 'Мы специализируемся на комплексных ИТ-решениях, включая разработку сайтов MPA, PWA и ботов для компаний, стремящихся повысить свое присутствие в цифровом пространстве.',
  metadataBase: new URL(siteUrl),
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
