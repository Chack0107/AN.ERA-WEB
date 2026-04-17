import { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-main.jpg"
          alt="An Era Joyería"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury text-center text-white">
        <div
          className={`transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Tagline */}
          <p className="font-sans text-xs md:text-sm tracking-[0.4em] uppercase mb-6 text-white/80">
            Timeless Pieces
          </p>

          {/* Main Title */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
            Elegancia que
            <br />
            <span className="italic">trasciende</span>
          </h1>

          {/* Subtitle */}
          <p className="font-sans text-sm md:text-base text-white/80 max-w-md mx-auto mb-10 tracking-wide">
            Joyería que cuenta tu historia. Piezas atemporales diseñadas para
            acompañarte en cada momento especial.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToProducts}
              className="btn-gold flex items-center gap-3 group"
            >
              Ver Colección
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <a
              href="https://wa.me/50600000000?text=Hola%20An%20Era,%20me%20interesa%20personalizar%20una%20joya"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline border-white text-white hover:bg-white hover:text-black"
            >
              Personalizar Joya
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/80 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
