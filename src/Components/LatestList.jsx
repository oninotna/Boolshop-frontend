import SneakersCard from "./SneakersCard";
import "../assets/css/LatestList.css";

export default function LatestList({ sneakers }) {
  // const sortedSneakers: x memorizzare l'array delle sneakers ordinate
  // [...sneakers] "spread operator" (...) x creare shallow copy
  // .sort(...) x ordinare l'array. Viene chiamato sulla shallow copy.
  // Al suo interno, funzione di confronto che determina l'ordine degli elementi
  // (a, b) => new Date(b.date_of_arrival) - new Date(a.date_of_arrival)
  // Sottrazione: quando sottrai due oggetti Date, JavaScript li converte automaticamente nei loro valori numerici e restituisce la differenza.
  // Se b.date_of_arrival > a allora è positivo (un risultato positivo significa che b viene prima di a)
  // Se b.date_of_arrival < a allora è negativo (un risultato negativo significa che b viene dopo di a)
  // ordiniamo in ordine decrescente di data.
  const sortedSneakers = [...sneakers].sort(
    (a, b) => new Date(b.date_of_arrival) - new Date(a.date_of_arrival)
  );
  const latest = sortedSneakers.slice(0, 4);

  return (
    <section className="latest-list">
      <div className="container">
        <h2 className="latest-title fw-bold">Ultimi arrivi</h2>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {latest.map((sneaker) => (
            <div className="col" key={sneaker.id_sneaker}>
              <SneakersCard sneaker={sneaker} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
