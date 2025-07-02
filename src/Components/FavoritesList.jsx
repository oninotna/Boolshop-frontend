import SneakersCard from "./SneakersCard";
import "../assets/css/FavoritesList.css";

export default function FavoritesList({ favorites }) {
  // seleziona massimo 4 preferiti random
  const shuffled = [...favorites].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 4);

  return (
    <section className="favorites-list">
      <div className="container">
        <h2 className="favorites-title fw-bold">I tuoi preferiti</h2>
        {selected.length === 0 ? (
          <p className="text-muted">Non hai ancora aggiunto prodotti ai preferiti.</p>
        ) : (
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {selected.map((sneaker) => (
              <div className="col" key={sneaker.id_sneaker}>
                <SneakersCard sneaker={sneaker} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
