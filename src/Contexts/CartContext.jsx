import { createContext, useContext, useState } from "react";

//* CREA IL CONTESTO DEL CARRELLO
const CartContext = createContext();

//* PROVIDER DEL CARRELLO CHE AVVOLGE L'APP
function CartProvider({ children }) {
  //* STATO PER TENERE GLI ARTICOLI NEL CARRELLO
  const [cart, setCart] = useState([]);

  //* FUNZIONE PER AGGIUNGERE UN ARTICOLO AL CARRELLO
  const addToCart = (data) => {
    // Cerca se esiste già l'articolo (per esempio con id e taglia)
    const index = cart.findIndex((item) => item.id === data.id && item.size === data.size);
    if (index !== -1) {
      // Se esiste, aggiorna quantità
      const updatedCart = [...cart];
      updatedCart[index].quantity += data.quantity || 1;
      setCart(updatedCart);
    } else {
      // Altrimenti aggiungi nuovo articolo
      setCart([...cart, { ...data, quantity: data.quantity || 1 }]);
    }
  };
  //* FUNZIONE PER RIMUOVERE UN ARTICOLO AL CARRELLO
  const removeFromCart = (id, size) => {
    setCart(cart.filter((item) => !(item.id === id && item.size === size)));
  };

  //* FUNZIONE PER AUMENTARE LA QUANTITà DI UN ARTICOLO AL CARRELLO
  const updateQuantity = (id, size, quantity) => {
    if (quantity < 1) return; // evita quantità negativa o zero
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.size === size) {
        return { ...item, quantity };
      }
      return item;
    });
    setCart(updatedCart);
  };

  //* FUNZIONE PER SVUOTARE IL CARRELLO
  const clearCart = () => {
    setCart([]); // resetta il carrello a vuoto
  };

  //* RITORNA IL PROVIDER CON VALORI E FUNZIONI DISPONIBILI AI COMPONENTI FIGLI

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

//* HOOK PERSONALIZZATO PER USARE IL CARRELLO NEI COMPONENTI
function useCart() {
  return useContext(CartContext);
}

//* ESPORTAZIONE DEL PROVIDER E DELLA FUNZIONE USE CART
export { CartProvider, useCart };
