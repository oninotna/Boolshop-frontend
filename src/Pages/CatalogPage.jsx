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

  const {search, submit} = useSearch();
  const [h1text, setH1text] = useState('Catalogo sneakears');
  
  useEffect(() => {
    if (search.length) {
      axios.get(`http://localhost:3000/sneakers?search=${search}`)
        .then((response) => {
            setSneakers(response.data);
            setLoading(false);
            setH1text('Risultati ricerca');
        })
        .catch((err) => {
        console.error("Errore durante il fetch:", err);
        setError("Impossibile caricare i dati.");
        setLoading(false);
      });
    }
    else {
    axios
      .get("http://localhost:3000/sneakers")
      .then((response) => {
        setSneakers(response.data);

        setLoading(false);
        setH1text('Catalogo sneakers');
      })
      .catch((err) => {
        console.error("Errore durante il fetch:", err);
        setError("Impossibile caricare i dati.");
        setLoading(false);
      });
    }
  }, [submit]);

  return (
    <>
      <div className="container-fluid">
        <h2 className="latest-title fw-bold mt-5">{h1text}</h2>
        {/* <p className="latest-subtitle fst-italic text-secondary mb-5">
          Scopri tutti i nostri prodotti
        </p> */}
        {/* <h1 className="my-3 text-center">{h1text}</h1> */}

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

      <Footer />
    </>
  );
}
