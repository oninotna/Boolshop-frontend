import { useEffect, useState } from "react";
import axios from "axios";
import SneakersCard from "../Components/SneakersCard";
import Footer from "../Components/Footer";
import "../assets/css/index.css";
import { useSearch } from "../Contexts/SearchContext";

export default function CatalogPage() {
  const [sneakers, setSneakers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { search, submit } = useSearch();
  const [h1text, setH1text] = useState("Catalogo sneakers");
  const [order, setOrder] = useState(""); // stato per select ordinamento

  useEffect(() => {
    setLoading(true);

    let url = "http://localhost:3000/sneakers";

    const params = new URLSearchParams();
    if (search.length) params.append("search", search);

    // Gestione parametri di ordinamento (solo uno alla volta)
    if (order === "name_asc") params.append("name", "ASC");
    else if (order === "name_desc") params.append("name", "DESC");
    else if (order === "price_asc") params.append("price", "ASC");
    else if (order === "price_desc") params.append("price", "DESC");
    else if (order === "date_asc") params.append("date", "ASC");
    else if (order === "date_desc") params.append("date", "DESC");

    url += `?${params.toString()}`;

    axios
      .get(url)
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
    setOrder(e.target.value);
  };

  return (
    <>
      <div className="container-fluid">
        <h2 className="latest-title fw-bold mt-5">{h1text}</h2>

        {/* Select per ordinamento */}
        <div className="mb-4">
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
              <p
                className="text-center text-muted fs-5 mt-5"
                style={{ height: "40vh" }}
              >
                Nessun prodotto trovato per "{search}"
              </p>
            )}
          </>
        )}
      </div>

      <Footer />
    </>
  );
}
