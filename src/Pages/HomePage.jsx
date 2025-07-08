import Herospace from "../Components/Herospace";
import LatestList from "../Components/LatestList";
import CheapestList from "../Components/CheapestList";
import Footer from "../Components/Footer";
import UserPopUp from "../Components/userPopUp";

export default function HomePage() {
  return (
    <div>
      <Herospace />
      <LatestList />
      <CheapestList />
      <Footer />
      <UserPopUp />
    </div>
  );
}
