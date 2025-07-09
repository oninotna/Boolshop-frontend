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
import { PopUpContextProvider } from "./Contexts/popUpContext";
import NotFoundPage from "./Pages/notFoundPage";
import ComparePage from "./Pages/ComparePage";
// importazioni per il Toast
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ToastWithNavigate from "./Components/ToastWithNavigate";
import { CompareProvider } from "./Contexts/CompareContext";

export default function App() {
  return (
    <>
      <CompareProvider>
        <SearchProvider>
          <WishListProvider>
            <CartProvider>
              <PopUpContextProvider>
                <BrowserRouter>
                  <Routes>
                    <Route element={<DefaultLayout />}>
                      <Route path="/" element={<HomePage />} />
                      <Route path="*" element={<NotFoundPage />} />
                      <Route path="/catalog" element={<CatalogPage />} />
                      <Route
                        path="/detailpage/:slug"
                        element={<DetailPage />}
                      />
                      <Route path="/novelty" element={<NoveltyPage />} />
                      <Route path="/wishlist" element={<WishListPage />} />
                      <Route path="/cart" element={<CartPage />} />
                      <Route path="/compare" element={<ComparePage />} />
                    </Route>
                  </Routes>
                  <ToastWithNavigate />
                </BrowserRouter>
              </PopUpContextProvider>
            </CartProvider>
          </WishListProvider>
        </SearchProvider>
      </CompareProvider>
    </>
  );
}
