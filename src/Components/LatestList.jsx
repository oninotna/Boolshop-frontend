import { useEffect, useState } from "react";
import axios from "axios";
import SneakersCard from "./SneakersCard";
import "../assets/css/LatestList.css";

export default function LatestList() {
  const [sneakers, setSneakers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/sneakers/latest")
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
    <section className="latest-list">
      <div className="container-fluid">
        <h2 className="latest-title fw-bold">Ultimi arrivi</h2>
        <p className="latest-subtitle fst-italic text-secondary">
          Le novità più fresche per i tuoi piedi
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
