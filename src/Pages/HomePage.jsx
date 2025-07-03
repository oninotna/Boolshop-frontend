import Herospace from "../Components/Herospace";
import LatestList from "../Components/LatestList";
import CheapestList from "../Components/CheapestList";
import Footer from "../Components/Footer";

export default function HomePage() {
  return (
    <div>
      <Herospace />
      <LatestList />
      <CheapestList />
      <Footer />
    </div>
  );
}
