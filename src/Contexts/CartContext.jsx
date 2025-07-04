import { createContext, useContext, useState } from "react";

const CartContext = createContext();

function CartProvider({children}) {
    const [cart, setCart] = useState([]);

    const addToCart = (data) => {
        console.log(cart);
        
      setCart(
        [...cart,
        data]
      )
    };

    return <CartContext value={{cart, addToCart}}>{children}</CartContext>
};

function useCart() {
    return useContext(CartContext);
};

export {CartProvider, useCart};