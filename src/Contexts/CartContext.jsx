import { createContext, useContext, useState } from "react";


const CartContext = createContext();


function CartProvider({ children }) {

  const [cart, setCart] = useState([]);


  const addToCart = (data) => {
    // Cerca se esiste già l'articolo (per esempio con id e taglia)
    const index = cart.findIndex((item) => item.id_sneaker === data.id_sneaker && item.size === data.size);
    if (index !== -1) {
      // Se esiste, aggiorna quantità
      const updatedCart = [...cart];
      updatedCart[index].quantity += data.quantity || 1;
      setCart(updatedCart);
    } else {
      // Altrimenti aggiungi nuovo articolo
      setCart([...cart, { ...data, quantity: data.quantity || 1 }]);
      console.log(data);
      
    }
  };
  //* FUNZIONE PER RIMUOVERE UN ARTICOLO AL CARRELLO
  const removeFromCart = (id_sneaker, size) => {
    setCart(cart.filter((item) => !(item.id_sneaker === id_sneaker && item.size === size)));
  };

  //* FUNZIONE PER AUMENTARE LA QUANTITà DI UN ARTICOLO AL CARRELLO
  const updateQuantity = (id_sneaker, size, quantity) => {
    if (quantity < 1) return; // evita quantità negativa o zero
    const updatedCart = cart.map((item) => {
      if (item.id_sneaker === id_sneaker && item.size === size) {
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
