import Herospace from "../Components/Herospace";
import LatestList from "../Components/LatestList";
import CheapestList from "../Components/CheapestList";
import Footer from "../Components/Footer";
import UserPopUp from "../Components/userPopUp";
import { useCompare } from "../Contexts/CompareContext";
import { Link } from "react-router-dom";

export default function HomePage() {
  const { compareList } = useCompare();
  return (
    <div>
      <Herospace />
      <LatestList />
      <CheapestList />
      <Footer />
      <UserPopUp />
      {compareList.length >= 2 && (
        <Link to="/compare" className="btn btn-primary fixed-compare-button">
          Vai al Confronto ({compareList.length})
        </Link>
      )}
    </div>
  );
}
