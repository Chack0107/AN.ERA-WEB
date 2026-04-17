import { Instagram, MessageCircle, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-neutral-950 text-white">
      {/* Main Footer */}
      <div className="container-luxury py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} className="inline-block mb-6">
              <span className="font-serif text-3xl text-white">An Era</span>
            </a>
            <p className="font-sans text-sm text-neutral-400 leading-relaxed mb-6">
              Joyería que cuenta tu historia. Piezas atemporales diseñadas para
              acompañarte en cada momento especial.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/an.era_cr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-amber-500 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/50600000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-green-500 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-neutral-500 mb-6">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Inicio', id: 'hero' },
                { label: 'Colección', id: 'products' },
                { label: 'Sobre Nosotros', id: 'about' },
                { label: 'Contacto', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="font-sans text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-neutral-500 mb-6">
              Categorías
            </h4>
            <ul className="space-y-3">
              {['Anillos', 'Collares', 'Pulseras', 'Aretes'].map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => scrollToSection('products')}
                    className="font-sans text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-neutral-500 mb-6">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/50600000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 font-sans text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  +506 0000 0000
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@anera.cr"
                  className="flex items-start gap-3 font-sans text-sm text-neutral-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  info@anera.cr
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 font-sans text-sm text-neutral-400">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  Costa Rica
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-luxury py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-xs text-neutral-500">
              © {currentYear} An Era. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <button className="font-sans text-xs text-neutral-500 hover:text-white transition-colors">
                Política de Privacidad
              </button>
              <button className="font-sans text-xs text-neutral-500 hover:text-white transition-colors">
                Términos y Condiciones
              </button>
              <button className="font-sans text-xs text-neutral-500 hover:text-white transition-colors">
                Política de Devoluciones
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
