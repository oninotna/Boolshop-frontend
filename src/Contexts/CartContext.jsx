import { createContext, useContext, useState } from "react";

const CartContext = createContext();

function cartProvider({children}) {
    const [cart, setCart] = useState([]);

    const addToCart = (data) => {
      setCart(
        ...cart,
        data
      )
    };

    return <CartContext value={}>{children}</CartContext>
};

function useCart() {
    return useContext(CartContext);
};

export {cartProvider, useCart};