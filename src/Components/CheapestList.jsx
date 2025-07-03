import { useEffect, useState } from "react";
import axios from "axios";
import SneakersCard from "./SneakersCard";
import "../assets/css/CheapestList.css";

export default function CheapestList() {
  const [sneakers, setSneakers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/sneakers/cheapest")
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

  // Ordina per prezzo crescente e prendi i primi 4 (se non lo fa il backend)
  const cheapestSneakers = sneakers.sort((a, b) => a.price - b.price).slice(0, 4);
  // const cheapestSneakers = sneakers;

  return (
    <section className="favorites-list">
      <div className="container">
        <h2 className="favorites-title fw-bold">I più economici</h2>

        {loading && <p>Caricamento...</p>}
        {error && <p className="text-danger">{error}</p>}

        {!loading && !error && (
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {cheapestSneakers.map((sneaker) => (
              <div className="col" key={sneaker.id}>
                <SneakersCard data={sneaker} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
