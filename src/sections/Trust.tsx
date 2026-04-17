import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  ShieldCheck,
  CreditCard,
  Truck,
  MessageCircle,
  Clock,
  Package,
} from 'lucide-react';

export function Trust() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const features = [
    {
      icon: ShieldCheck,
      title: 'Garantía de Calidad',
      description: 'Todos nuestros productos cuentan con garantía de por vida contra defectos de fabricación.',
    },
    {
      icon: CreditCard,
      title: 'Pagos Seguros',
      description: 'Aceptamos transferencia bancaria, SINPE Móvil y efectivo. Próximamente tarjetas.',
    },
    {
      icon: Truck,
      title: 'Envío Express',
      description: 'Entrega en 24-48 horas en el GAM. Envío gratuito en compras mayores a ₡50,000.',
    },
    {
      icon: MessageCircle,
      title: 'Atención Personalizada',
      description: 'Estamos disponibles por WhatsApp para ayudarte con cualquier consulta.',
    },
    {
      icon: Clock,
      title: 'Entrega Puntual',
      description: 'Cumplimos con los tiempos de entrega prometidos. Tu tiempo es valioso.',
    },
    {
      icon: Package,
      title: 'Empaque de Regalo',
      description: 'Todas nuestras joyas vienen en una caja de regalo elegante y lista para sorprender.',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-luxury">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-neutral-500 mb-4">
              Por qué elegirnos
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-black">
              Confianza y Calidad
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`group p-8 border border-neutral-200 hover:border-black transition-all duration-500 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-neutral-100 group-hover:bg-black flex items-center justify-center mb-6 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-neutral-600 group-hover:text-amber-400 transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-xl text-black mb-3">
                  {feature.title}
                </h3>
                <p className="font-sans text-sm text-neutral-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
