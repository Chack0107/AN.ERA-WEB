import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';

export function CTA() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="contact" className="section-padding bg-black text-white">
      <div className="container-luxury">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-8 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="font-sans text-xs tracking-[0.15em] uppercase">
                Ediciones Limitadas Disponibles
              </span>
            </div>

            {/* Title */}
            <h2
              className={`font-serif text-4xl md:text-6xl lg:text-7xl mb-6 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Crea tu
              <br />
              <span className="italic gold-text">historia única</span>
            </h2>

            {/* Description */}
            <p
              className={`font-sans text-lg text-white/70 max-w-xl mx-auto mb-10 transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              ¿Tienes una idea especial? Podemos crear una joya personalizada
              que capture tu esencia y cuente tu historia.
            </p>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <a
                href="https://wa.me/50600000000?text=Hola%20An%20Era,%20quiero%20personalizar%20una%20joya"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold flex items-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                Contáctanos por WhatsApp
              </a>
              <a
                href="#products"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex items-center gap-2 font-sans text-sm tracking-[0.15em] uppercase text-white/80 hover:text-white transition-colors"
              >
                Ver Colección
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Trust Badges */}
            <div
              className={`mt-16 pt-10 border-t border-white/10 transition-all duration-700 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="flex flex-wrap justify-center gap-8 text-center">
                <div>
                  <p className="font-serif text-3xl text-amber-400 mb-1">500+</p>
                  <p className="font-sans text-xs tracking-[0.15em] uppercase text-white/60">
                    Clientes Felices
                  </p>
                </div>
                <div>
                  <p className="font-serif text-3xl text-amber-400 mb-1">100%</p>
                  <p className="font-sans text-xs tracking-[0.15em] uppercase text-white/60">
                    Calidad Garantizada
                  </p>
                </div>
                <div>
                  <p className="font-serif text-3xl text-amber-400 mb-1">24h</p>
                  <p className="font-sans text-xs tracking-[0.15em] uppercase text-white/60">
                    Entrega Express
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
