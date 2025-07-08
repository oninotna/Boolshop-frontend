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
  const [h1text, setH1text] = useState("Catalogo sneakears");
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    setLoading(true);

    const params = new URLSearchParams();
    if (search.length) params.append("search", search);
    if (sortOrder) params.append("name", sortOrder);

    axios
      .get(`http://localhost:3000/sneakers?${params.toString()}`)
      .then((response) => {
        setSneakers(response.data);
        setH1text(search.length ? "Risultati ricerca" : "Catalogo sneakers");
        setError(null);
      })
      .catch((err) => {
        console.error("Errore durante il fetch:", err);
        setError("Impossibile caricare i dati.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [submit, sortOrder]);

  return (
    <>
      <div className="container-fluid">
        <h2 className="latest-title fw-bold mt-5">{h1text}</h2>
        <div className="mb-4">
          <label htmlFor="sortOrder" className="me-2 fw-semibold">
            Ordina per nome:
          </label>
          <select
            id="sortOrder"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="form-select d-inline w-auto"
            disabled={loading}
          >
            <option value="">Predefinito</option>
            <option value="ASC">A-Z</option>
            <option value="DESC">Z-A</option>
          </select>
        </div>

        {/* <p className="latest-subtitle fst-italic text-secondary mb-5">
          Scopri tutti i nostri prodotti
        </p> */}
        {/* <h1 className="my-3 text-center">{h1text}</h1> */}

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
