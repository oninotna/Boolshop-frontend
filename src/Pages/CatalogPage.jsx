import { useEffect, useState } from "react";
import axios from "axios";
import SneakersCard from "../Components/SneakersCard";

export default function CatalogPage () {
  const [sneakers, setSneakers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    axios
      .get("http://localhost:3000/sneakers")
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
      <div className="container-fluid">
        <h1 className="my-3 text-center">sono la pagina dei prodotti</h1>

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
};