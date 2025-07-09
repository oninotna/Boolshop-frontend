import Herospace from "../Components/Herospace";
import LatestList from "../Components/LatestList";
import CheapestList from "../Components/CheapestList";
import Footer from "../Components/Footer";
import UserPopUp from "../Components/userPopUp";
import { useCompare } from "../Contexts/CompareContext";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScaleBalanced } from "@fortawesome/free-solid-svg-icons";

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
        <Link to="/compare" className="fixed-compare-button" title="Confronta">
          <FontAwesomeIcon icon={faScaleBalanced} className="scale-icon" />
          <span className="compare-count">{compareList.length}</span>
        </Link>
      )}
    </div>
  );
}
