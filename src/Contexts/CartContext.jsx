import { createContext, useContext, useState } from "react";

//* CREA IL CONTESTO DEL CARRELLO
const CartContext = createContext();

//* PROVIDER DEL CARRELLO CHE AVVOLGE L'APP
function CartProvider({ children }) {
  //* STATO PER TENERE GLI ARTICOLI NEL CARRELLO
  const [cart, setCart] = useState([]);

  //* FUNZIONE PER AGGIUNGERE UN ARTICOLO AL CARRELLO
  const addToCart = (data) => {
    console.log(cart); // log per debug (opzionale)
    setCart([...cart, data]); // aggiunge l'elemento al carrello
  };

  //* FUNZIONE PER SVUOTARE IL CARRELLO
  const clearCart = () => {
    setCart([]); // resetta il carrello a vuoto
  };

  //* RITORNA IL PROVIDER CON VALORI E FUNZIONI DISPONIBILI AI COMPONENTI FIGLI
  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>{children}</CartContext.Provider>
  );
}

//* HOOK PERSONALIZZATO PER USARE IL CARRELLO NEI COMPONENTI
function useCart() {
  return useContext(CartContext);
}

//* ESPORTAZIONE DEL PROVIDER E DELLA FUNZIONE USE CART
export { CartProvider, useCart };
