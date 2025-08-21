import type { Metadata } from 'next';
import Navbar from '@organisms/Navbar';
import Footer from '@organisms/Footer';
import BlogHero from '@templates/BlogHero';
import Blog from '@templates/Blog';

export const metadata: Metadata = {
  title: 'Блог — NewSite',
  description: 'Статьи, практики и новости компании NewSite.',
};

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <BlogHero />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
