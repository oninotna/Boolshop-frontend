import { useCallback } from "react";
import { ToastContainer, cssTransition, toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";

import "../assets/css/Toast.css"; // Il tuo CSS personalizzato

// Creo una transizione personalizzata per l'effetto fade
const fade = cssTransition({
  enter: "fade-enter", // classe CSS per l'entrata
  exit: "fade-exit", // classe CSS per l'uscita
  duration: [300, 500], // durata (enter, exit) in millisecondi
});

// Componente principale del ToastContainer che supporta navigazione
export default function ToastWithNavigate() {
  const navigate = useNavigate(); // Hook per navigare programmaticamente
  const location = useLocation(); // Hook per ottenere l'oggetto della posizione corrente

  // Funzione che gestisce il click sul toast
  const handleToastClick = useCallback(() => {
    console.log("Toast container clicked!"); // Debug generale del click

    // Verifica se la rotta corrente è già /cart
    if (location.pathname === "/cart") {
      console.log("Sei già nella pagina del carrello.");
      // Mostra un nuovo toast per informare l'utente
      toast.info("Sei già nella pagina del carrello!", {
        autoClose: 1500, // Tempo di visualizzazione ridotto a 1.5 secondi
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      console.log("Navigating to /cart!");
      navigate("/cart"); // Naviga al carrello solo se non ci sei già
    }
  }, [navigate, location.pathname]); // Dipendenze aggiornate per includere location.pathname

  return (
    <ToastContainer
      position="bottom-right" // Posizione del toast
      toastClassName="custom-toast-margin"
      autoClose={2000} // Tempo di visualizzazione ridotto a 2 secondi
      hideProgressBar // Nasconde la barra di avanzamento
      pauseOnHover // Mantiene il toast visibile se ci passi sopra
      closeOnClick={false} // Disabilita chiusura cliccando sul contenuto (importante per il tuo onClick)
      // transition={fade} // Applichiamo l'effetto fade definito sopra
      closeButton={false} // Impostato esplicitamente a false per rimuovere la 'X'
      onClick={handleToastClick} // Gestisce il click sul toast
    />
  );
}
