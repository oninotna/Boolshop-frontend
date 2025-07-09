import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import SneakersCard from "../Components/SneakersCard";
import Footer from "../Components/Footer";
import "../assets/css/index.css";
import "../assets/css/Compare.css";
import { useSearch } from "../Contexts/SearchContext";
import { useCompare } from "../Contexts/CompareContext";
import { Link } from "react-router-dom";

export default function CatalogPage() {
  const [sneakers, setSneakers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { search, submit } = useSearch();
  const [h1text, setH1text] = useState("Catalogo sneakers");

  const navigate = useNavigate();
  const location = useLocation();
  const { compareList } = useCompare();

  const params = new URLSearchParams(location.search);
  const order = params.get("order") || "";

  useEffect(() => {
    setLoading(true);

    const urlParams = new URLSearchParams();

    if (search.length) urlParams.append("search", search);

    if (order === "name_asc") urlParams.append("name", "ASC");
    else if (order === "name_desc") urlParams.append("name", "DESC");
    else if (order === "price_asc") urlParams.append("price", "ASC");
    else if (order === "price_desc") urlParams.append("price", "DESC");
    else if (order === "date_asc") urlParams.append("date", "ASC");
    else if (order === "date_desc") urlParams.append("date", "DESC");

    const fetchUrl = `http://localhost:3000/sneakers?${urlParams.toString()}`;

    axios
      .get(fetchUrl)
      .then((response) => {
        setSneakers(response.data);
        setH1text(search.length ? "Risultati ricerca" : "Catalogo sneakers");
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        console.error("Errore durante il fetch:", err);
        setError("Impossibile caricare i dati.");
        setLoading(false);
      });
  }, [submit, order]);

  const handleOrderChange = (e) => {
    const selected = e.target.value;
    params.set("order", selected);
    navigate({ search: params.toString() });
  };

  return (
    <>
      <div className="container-fluid">
        <h2 className="latest-title fw-bold mt-5">{h1text}</h2>
        <p className="latest-subtitle fst-italic text-secondary">Scopri il nostro catalogo!</p>

        <div className="mb-5">
          <label htmlFor="orderSelect" className="form-label fw-semibold">
            Ordina per:
          </label>
          <select
            id="orderSelect"
            className="form-select w-auto d-inline-block ms-2"
            value={order}
            onChange={handleOrderChange}
          >
            <option value="">-- Seleziona --</option>
            <option value="name_asc">Nome (A-Z)</option>
            <option value="name_desc">Nome (Z-A)</option>
            <option value="price_asc">Prezzo (crescente)</option>
            <option value="price_desc">Prezzo (decrescente)</option>
            <option value="date_asc">Data (più vecchi)</option>
            <option value="date_desc">Data (più recenti)</option>
          </select>
        </div>

        {loading && <p>Caricamento...</p>}
        {error && <p className="text-danger">{error}</p>}

        {!loading && !error && (
          <>
            {sneakers.length > 0 ? (
              <div className="row g-3">
                {sneakers.map((sneaker) => (
                  <SneakersCard data={sneaker} key={sneaker.id_sneaker} />
                ))}
              </div>
            ) : (
              <p className="text-center text-muted fs-5 mt-5" style={{ height: "40vh" }}>
                Nessun prodotto trovato per "{search}"
              </p>
            )}
          </>
        )}
        {compareList.length >= 2 && (
          <Link to="/compare" className="btn btn-secondary fixed-compare-button">
            Vai al Confronto ({compareList.length})
          </Link>
        )}
      </div>

      <Footer />
    </>
  );
}
