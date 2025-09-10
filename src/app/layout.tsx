import type { Metadata } from 'next';
import './globals.css';

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000').replace(/\/$/, '');

export const metadata: Metadata = {
  title: 'IT-компания WEBDAD разработка веб-приложений',
  description: 'Мы специализируемся на комплексных ИТ-решениях, включая разработку сайтов, MPA, PWA, ПО, CRM, IA',
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: siteUrl,
    title: 'IT-компания WEBDAD разработка веб-приложений',
    description: 'Мы специализируемся на комплексных ИТ-решениях, включая разработку сайтов, MPA, PWA, ПО, CRM, IA',
    siteName: 'WEBDAD',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'WEBDAD - IT-компания разработка веб-приложений',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT-компания WEBDAD разработка веб-приложений',
    description: 'Мы специализируемся на комплексных ИТ-решениях, включая разработку сайтов, MPA, PWA, ПО, CRM, IA',
    images: ['/og-image.jpg'],
    creator: '@webdad_dev',
    site: '@webdad_dev',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'mask-icon', url: '/favicon.svg', color: '#059669' }
    ]
  },
  manifest: '/site.webmanifest',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' }
  ],
  viewport: 'width=device-width, initial-scale=1',
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#111827" media="(prefers-color-scheme: dark)" />
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
