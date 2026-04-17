import { useState, useEffect } from 'react';
import { ShoppingBag, Star, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useCart } from '@/hooks/useCart';
import { products } from '@/data/products';
import type { Product } from '@/types';
import { toast } from 'sonner';

export function Products() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const { addToCart } = useCart();

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'anillos', name: 'Anillos' },
    { id: 'collares', name: 'Collares' },
    { id: 'pulseras', name: 'Pulseras' },
    { id: 'aretes', name: 'Aretes' },
  ];

  useEffect(() => {
    const handleFilterCategory = (e: CustomEvent<string>) => {
      setActiveCategory(e.detail);
    };

    window.addEventListener('filterCategory', handleFilterCategory as EventListener);
    return () => {
      window.removeEventListener('filterCategory', handleFilterCategory as EventListener);
    };
  }, []);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter((p) => p.category === activeCategory));
    }
  }, [activeCategory]);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast.success(`${product.name} agregado al carrito`, {
      description: `₡${product.price.toLocaleString()}`,
    });
  };

  const formatPrice = (price: number) => {
    return `₡${price.toLocaleString()}`;
  };

  return (
    <section id="products" className="section-padding bg-white">
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
              Catálogo
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-black mb-8">
              Nuestras Piezas
            </h2>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 md:px-6 py-2 font-sans text-xs tracking-[0.15em] uppercase transition-all duration-300 ${
                    activeCategory === cat.id
                      ? 'bg-black text-white'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`group transition-all duration-500 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-neutral-100 mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {product.isBestseller && (
                      <span className="flex items-center gap-1 px-2 py-1 bg-amber-500 text-black text-[10px] font-semibold tracking-wider uppercase">
                        <Star className="w-3 h-3" />
                        Más Vendido
                      </span>
                    )}
                    {product.isLimited && (
                      <span className="flex items-center gap-1 px-2 py-1 bg-black text-white text-[10px] font-semibold tracking-wider uppercase">
                        <Sparkles className="w-3 h-3" />
                        Edición Limitada
                      </span>
                    )}
                  </div>

                  {/* Quick Add Button */}
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="absolute bottom-0 left-0 right-0 bg-black text-white py-3 font-sans text-xs tracking-[0.2em] uppercase translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Agregar al Carrito
                  </button>
                </div>

                {/* Product Info */}
                <div className="text-center">
                  <h3 className="font-serif text-lg text-black mb-1 group-hover:text-neutral-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="font-sans text-sm text-neutral-500 tracking-wide">
                    {formatPrice(product.price)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
