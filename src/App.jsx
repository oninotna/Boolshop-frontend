import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./Layout/DefaultLayout";
import HomePage from "./Pages/HomePage";
import CatalogPage from "./Pages/CatalogPage";
import NoveltyPage from "./Pages/NoveltyPage";

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/novelty" element={<NoveltyPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};