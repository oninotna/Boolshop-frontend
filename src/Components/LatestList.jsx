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
        setSneakers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Errore durante il fetch:", err);
        setError("Impossibile caricare i dati.");
        setLoading(false);
      });
  }, []);

 const latestSneakers = sneakers
 
  return (
    <section className="latest-list">
      <div className="container">
        <h2 className="latest-title fw-bold">Ultimi arrivi</h2>

        {loading && <p>Caricamento...</p>}
        {error && <p className="text-danger">{error}</p>}

        {!loading && !error && (
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {latestSneakers.map((sneaker) => (
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
