import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { categories } from '@/data/products';

export function Categories() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const scrollToProducts = (categorySlug: string) => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Dispatch custom event to filter products
      window.dispatchEvent(new CustomEvent('filterCategory', { detail: categorySlug }));
    }
  };

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
          <div className="text-center mb-16">
            <p className="font-sans text-xs tracking-[0.4em] uppercase text-neutral-500 mb-4">
              Explora
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-black">
              Nuestras Colecciones
            </h2>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => scrollToProducts(category.slug)}
                className={`group relative aspect-[3/4] overflow-hidden transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="absolute inset-0 img-zoom">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />

                {/* Label */}
                <div className="absolute inset-0 flex items-end justify-center pb-8">
                  <span className="font-serif text-xl md:text-2xl text-white tracking-wide">
                    {category.name}
                  </span>
                </div>

                {/* Hover Line */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-white group-hover:w-16 transition-all duration-300" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
