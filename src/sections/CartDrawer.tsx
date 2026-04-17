import { Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { toast } from 'sonner';

export function CartDrawer() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
    isOpen,
    setIsOpen,
    clearCart,
  } = useCart();

  const formatPrice = (price: number) => {
    return `₡${price.toLocaleString()}`;
  };

  const handleCheckout = () => {
    if (items.length === 0) {
      toast.error('Tu carrito está vacío');
      return;
    }
    
    const message = items
      .map(
        (item) =>
          `${item.name} x${item.quantity} - ${formatPrice(item.price * item.quantity)}`
      )
      .join('%0A');
    
    const totalMessage = `%0A%0ATotal: ${formatPrice(totalPrice)}`;
    
    window.open(
      `https://wa.me/50600000000?text=Hola%20An%20Era,%20quiero%20realizar%20un%20pedido:%0A%0A${message}${totalMessage}`,
      '_blank'
    );
    
    toast.success('Redirigiendo a WhatsApp para completar tu pedido');
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="w-full sm:max-w-md bg-white flex flex-col">
        <SheetHeader className="border-b pb-4">
          <SheetTitle className="font-serif text-2xl flex items-center gap-3">
            <ShoppingBag className="w-5 h-5" />
            Tu Carrito
            {totalItems > 0 && (
              <span className="text-sm font-sans text-neutral-500">
                ({totalItems} {totalItems === 1 ? 'producto' : 'productos'})
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
            <ShoppingBag className="w-16 h-16 text-neutral-300 mb-4" />
            <p className="font-serif text-xl text-neutral-600 mb-2">
              Tu carrito está vacío
            </p>
            <p className="font-sans text-sm text-neutral-400">
              Explora nuestra colección y encuentra tu pieza perfecta
            </p>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-auto py-4">
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-3 bg-neutral-50"
                  >
                    {/* Image */}
                    <div className="w-20 h-20 bg-white flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-sm text-black truncate">
                        {item.name}
                      </h4>
                      <p className="font-sans text-sm text-neutral-500 mt-1">
                        {formatPrice(item.price)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-6 h-6 flex items-center justify-center border border-neutral-300 hover:border-black transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="font-sans text-sm w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-6 h-6 flex items-center justify-center border border-neutral-300 hover:border-black transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-neutral-400 hover:text-red-500 transition-colors"
                      aria-label="Eliminar producto"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t pt-4 space-y-4">
              {/* Total */}
              <div className="flex justify-between items-center">
                <span className="font-sans text-sm tracking-wide text-neutral-600">
                  Subtotal
                </span>
                <span className="font-serif text-xl text-black">
                  {formatPrice(totalPrice)}
                </span>
              </div>

              <p className="font-sans text-xs text-neutral-500">
                Envío calculado al finalizar la compra
              </p>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="w-full btn-gold flex items-center justify-center gap-2"
              >
                Comprar por WhatsApp
              </button>

              {/* Clear Cart */}
              <button
                onClick={clearCart}
                className="w-full py-2 font-sans text-xs tracking-[0.15em] uppercase text-neutral-500 hover:text-black transition-colors"
              >
                Vaciar Carrito
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
