import SneakersCard from "./SneakersCard";
import "../assets/css/LatestList.css";

export default function LatestList () {

  return (
    <section className="latest-list">
      <div className="container">
        <h2 className="latest-title fw-bold">Ultimi arrivi</h2>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {/* {latest.map((sneaker) => (
            <div className="col" key={sneaker.id_sneaker}>
              <SneakersCard sneaker={sneaker} />
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
}
