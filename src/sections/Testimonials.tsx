import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { testimonials } from '@/data/products';
import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section className="section-padding bg-black text-white">
      <div className="container-luxury">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-white/60 mb-4">
              Testimonios
            </p>
            <h2 className="font-serif text-4xl md:text-5xl">
              Lo que dicen nuestros clientes
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 hover:bg-white/10 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Quote Icon */}
                <Quote className="absolute top-4 right-4 w-8 h-8 text-amber-500/30" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-500 text-amber-500"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="font-sans text-sm text-white/80 leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-yellow-400 rounded-full flex items-center justify-center">
                    <span className="font-serif text-black font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <span className="font-sans text-sm text-white/90">
                    {testimonial.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
