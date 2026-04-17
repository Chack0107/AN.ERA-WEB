import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { instagramImages } from '@/data/products';
import { Instagram as InstagramIcon, ExternalLink } from 'lucide-react';

export function Instagram() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-luxury">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-neutral-500 mb-4">
              Síguenos
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-black mb-4">
              @an.era_cr
            </h2>
            <a
              href="https://instagram.com/an.era_cr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm text-neutral-600 hover:text-black transition-colors underline-animation"
            >
              <InstagramIcon className="w-4 h-4" />
              Ver más en Instagram
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Instagram Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {instagramImages.map((image, index) => (
              <a
                key={index}
                href="https://instagram.com/an.era_cr"
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative aspect-square overflow-hidden transition-all duration-500 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <img
                  src={image}
                  alt={`An Era Instagram ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <InstagramIcon className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
