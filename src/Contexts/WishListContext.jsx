import { createContext, useContext, useState } from "react";

const WishListContext = createContext();

function WishListProvider({ children }) {
  const [wishList, setWishList] = useState([]);

  const addToWish = (data) => {
    console.log(wishList);

    setWishList([...wishList, data]);
  };

  return (
    <WishListContext value={{ wishList, addToWish }}>
      {children}
    </WishListContext>
  );
}

function useWishList() {
  return useContext(WishListContext);
}

export { WishListProvider, useWishList };
