import { useState, useEffect } from 'react';
import { ShoppingBag, Menu } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Inicio', id: 'hero' },
    { label: 'Colección', id: 'products' },
    { label: 'Nosotros', id: 'about' },
    { label: 'Contacto', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container-luxury">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="flex items-center relative"
          >
            {/* Logo para when scrolled (dark/black) */}
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F71592f13a45b44818442d75ffc07da5d%2F8e96fe577a524365b840f00f3040cf07?format=webp&width=800&height=1200"
              alt="An Era Jewelry"
              className={`h-12 md:h-16 w-auto object-contain transition-opacity duration-500 ${
                isScrolled ? 'opacity-100' : 'opacity-0'
              }`}
            />
            {/* Logo para when at top (white) */}
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F71592f13a45b44818442d75ffc07da5d%2Ffbeb834184de4939b12c46f9b0abdfc7?format=webp&width=800&height=1200"
              alt="An Era Jewelry"
              className={`h-12 md:h-16 w-auto object-contain transition-opacity duration-500 absolute ${
                isScrolled ? 'opacity-0' : 'opacity-100'
              }`}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`font-sans text-xs tracking-[0.2em] uppercase underline-animation transition-colors duration-300 ${
                  isScrolled
                    ? 'text-neutral-800 hover:text-black'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Cart Button */}
            <button
              onClick={() => setIsOpen(true)}
              className={`relative p-2 transition-colors duration-300 ${
                isScrolled
                  ? 'text-neutral-800 hover:text-black'
                  : 'text-white hover:text-white/80'
              }`}
              aria-label="Abrir carrito"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-amber-500 to-yellow-400 text-black text-[10px] font-semibold rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <button
                  className={`md:hidden p-2 transition-colors duration-300 ${
                    isScrolled
                      ? 'text-neutral-800 hover:text-black'
                      : 'text-white hover:text-white/80'
                  }`}
                  aria-label="Menú"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80 bg-white">
                <div className="flex flex-col h-full pt-12">
                  <nav className="flex flex-col gap-6">
                    {navLinks.map((link) => (
                      <button
                        key={link.id}
                        onClick={() => scrollToSection(link.id)}
                        className="font-serif text-2xl text-left text-neutral-800 hover:text-black transition-colors"
                      >
                        {link.label}
                      </button>
                    ))}
                  </nav>
                  <div className="mt-auto pb-8">
                    <p className="font-sans text-xs tracking-[0.2em] text-neutral-500 uppercase">
                      Joyería que cuenta tu historia
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
