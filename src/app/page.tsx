import Navbar from '@organisms/Navbar';
import Hero from '@templates/Hero';
import Services from '@templates/Services';
import WhyChooseUs from '@templates/WhyChooseUs';
import Blog from '@templates/Blog';
import Footer from '@organisms/Footer';
import Cases from '@templates/Cases';
import Subscribe from '@templates/Subscribe';
import Clients from '@templates/Clients';
import CTA from '@templates/CTA';
import Technologies from '@templates/Technologies';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Cases />
        <WhyChooseUs />
        <Clients />
        <Technologies />
        <CTA />
        <Blog limit={3} />
        <Subscribe />
      </main>
      <Footer />
    </div>
  );
}
