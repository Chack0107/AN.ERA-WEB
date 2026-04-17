import { Toaster } from '@/components/ui/sonner';
import { CartProvider } from '@/hooks/useCart';
import { Header } from '@/sections/Header';
import { Hero } from '@/sections/Hero';
import { Categories } from '@/sections/Categories';
import { Products } from '@/sections/Products';
import { CartDrawer } from '@/sections/CartDrawer';
import { About } from '@/sections/About';
import { Trust } from '@/sections/Trust';
import { Testimonials } from '@/sections/Testimonials';
import { Instagram } from '@/sections/Instagram';
import { CTA } from '@/sections/CTA';
import { Footer } from '@/sections/Footer';
import { WhatsAppFloat } from '@/sections/WhatsAppFloat';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Categories />
          <Products />
          <About />
          <Trust />
          <Testimonials />
          <Instagram />
          <CTA />
        </main>
        <Footer />
        <CartDrawer />
        <WhatsAppFloat />
        <Toaster position="bottom-right" richColors />
      </div>
    </CartProvider>
  );
}

export default App;
