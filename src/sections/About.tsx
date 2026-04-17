import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Gem, Heart, Award } from 'lucide-react';

export function About() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const values = [
    {
      icon: Gem,
      title: 'Materiales Premium',
      description:
        'Utilizamos oro de 18k y piedras seleccionadas cuidadosamente para garantizar la máxima calidad en cada pieza.',
    },
    {
      icon: Heart,
      title: 'Hecho con Amor',
      description:
        'Cada joya es elaborada artesanalmente con atención al detalle y pasión por la excelencia.',
    },
    {
      icon: Award,
      title: 'Garantía de Por Vida',
      description:
        'Confiamos tanto en nuestra calidad que ofrecemos garantía de por vida en todas nuestras piezas.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-neutral-50">
      <div className="container-luxury">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div
              className={`relative transition-all duration-700 delay-200 ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-8'
              }`}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="/about-image.jpg"
                  alt="Sobre An Era"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-amber-500/30 -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-amber-500/10 -z-10" />
            </div>

            {/* Content */}
            <div
              className={`transition-all duration-700 delay-400 ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-8'
              }`}
            >
              <p className="font-sans text-xs tracking-[0.4em] uppercase text-neutral-500 mb-4">
                Nuestra Historia
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-black mb-6">
                An Era
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed mb-8">
                <p>
                  Nacimos con una visión clara: crear joyería que trascienda el
                  tiempo, piezas que cuenten historias y acompañen momentos
                  inolvidables.
                </p>
                <p>
                  Cada diseño de An Era está pensado para la mujer moderna que
                  busca elegancia atemporal. No seguimos tendencias pasajeras;
                  creamos piezas que serán tan relevantes dentro de 50 años como
                  lo son hoy.
                </p>
                <p>
                  Nuestra joyería no es solo un accesorio, es una expresión de
                  quién eres. Porque creemos que cada mujer merece brillar con
                  luz propia.
                </p>
              </div>

              {/* Values */}
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div
                    key={value.title}
                    className={`flex gap-4 transition-all duration-500 ${
                      isVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${600 + index * 100}ms` }}
                  >
                    <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-black mb-1">
                        {value.title}
                      </h3>
                      <p className="font-sans text-sm text-neutral-500 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
