import { useEffect, useState } from "react";
import axios from "axios";
import SneakersCard from "../Components/SneakersCard";
import "../assets/css/index.css";

export default function CatalogPage() {
  const [sneakers, setSneakers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/sneakers")
      .then((response) => {
        setSneakers(response.data);

        setLoading(false);
      })
      .catch((err) => {
        console.error("Errore durante il fetch:", err);
        setError("Impossibile caricare i dati.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="container-fluid">
      <h2 className="latest-title fw-bold mt-5">Il nostro catalogo</h2>
      <p className="latest-subtitle fst-italic text-secondary mb-5">
        Scopri tutti i nostri prodotti
      </p>

      {loading && <p>Caricamento...</p>}
      {error && <p className="text-danger">{error}</p>}

      {!loading && !error && (
        <div className="row g-3">
          {sneakers.map((sneaker) => (
            <SneakersCard data={sneaker} key={sneaker.id_sneaker} />
          ))}
        </div>
      )}
    </div>
  );
}
