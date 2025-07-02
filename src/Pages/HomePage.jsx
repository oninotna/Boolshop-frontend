import HeroSpace from "../Components/HeroSpace";
import SneakersCard from "../Components/SneakersCard";
import Footer from "../Components/Footer";

export default function HomePage() {
  return (
    <div>
      <HeroSpace />
      <section className="text-center">
        <h1>Ultimi arrivi</h1>
      </section>
      <section className="text-center">
        <h1>Più economiche</h1>
      </section>
      <Footer />
    </div>
  );
}
