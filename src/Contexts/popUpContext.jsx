import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const PopUpContext = createContext();

function PopUpContextProvider({ children }) {
  const [userData, setUserData] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    } else {
      setShowPopUp(true);
    }
  }, []);

  const saveUserData = (data) => {
    localStorage.setItem("userData", JSON.stringify(data));
    setUserData(data);
    setShowPopUp(false);

    axios.post("http://localhost:3000/sneakers/popup", data)
      .then(() => {
        console.log("Dati utente salvati nel backend");
      })
      .catch((error) => {
        console.error("Errore durante il salvataggio:", error);
      });
  };

  return <PopUpContext.Provider value={{ userData, saveUserData, showPopUp }}>
    {children}
    </PopUpContext.Provider>;
}

function usePopUpContext() {
  return useContext(PopUpContext);
}

export { PopUpContextProvider, usePopUpContext };
