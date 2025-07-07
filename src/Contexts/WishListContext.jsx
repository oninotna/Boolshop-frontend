import { createContext, useContext, useState } from "react";

const WishListContext = createContext();

function WishListProvider({ children }) {
  const [wishList, setWishList] = useState([]);

  const addToWish = (data) => {
    console.log(wishList);

    setWishList([...wishList, data]);
  };

  const  removeFromWish = (data) => {
     setWishList(wishList.filter((item) => item.id_sneaker !== data.id_sneaker))
  }

  return (
    <WishListContext value={{ wishList, addToWish, removeFromWish }}>
      {children}
    </WishListContext>
  );
}

function useWishList() {
  return useContext(WishListContext);
}

export { WishListProvider, useWishList };
