import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./Layout/DefaultLayout";
import HomePage from "./Pages/HomePage";
import CatalogPage from "./Pages/CatalogPage";
import NoveltyPage from "./Pages/NoveltyPage";
import WishListPage from "./Pages/WishListPage";
import CartPage from "./Pages/CartPage";
import DetailPage from "./Pages/DetailPage";
import { CartProvider } from "./Contexts/CartContext";
import { WishListProvider } from "./Contexts/WishListContext";
import { SearchProvider } from "./Contexts/SearchContext";

export default function App() {
  return (
    <>
    <SearchProvider>
      <WishListProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<DefaultLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/detailpage/:slug" element={<DetailPage />} />
                <Route path="/novelty" element={<NoveltyPage />} />
                <Route path="/wishlist" element={<WishListPage />} />
                <Route path="/cart" element={<CartPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </WishListProvider>
    </SearchProvider>
    </>
  );
}
