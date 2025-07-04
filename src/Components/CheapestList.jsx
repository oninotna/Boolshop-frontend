import { useEffect, useState } from "react";
import axios from "axios";
import SneakersCard from "./SneakersCard";
import "../assets/css/CheapestList.css";
import { useCart } from "../Contexts/CartContext";

export default function CheapestList() {
  const [sneakers, setSneakers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    axios
      .get("http://localhost:3000/sneakers/cheapest")
      .then((response) => {
        setSneakers(response.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Errore durante il fetch:", err);
        setError("Impossibile caricare i dati.");
        setLoading(false);
      });
  }, []);

  return (
    <section className="cheapest-list">
      <div className="container-fluid">
        <h2 className="cheapest-title fw-bold">I più economici</h2>
        <p className="cheapest-subtitle fst-italic text-secondary">
          La qualità non deve per forza costare troppo
        </p>

        {loading && <p>Caricamento...</p>}
        {error && <p className="text-danger">{error}</p>}

        {!loading && !error && (
          <div className="row g-3 flex-nowrap">
            {sneakers.map((sneaker) => (
              <SneakersCard data={sneaker} key={sneaker.id_sneaker} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
