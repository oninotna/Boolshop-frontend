import { useState } from "react";
import axios from "axios";
import { usePopUpContext } from "../Contexts/popUpContext";
import { toast } from "react-toastify";
import "../assets/css/userPopUp.css"

export default function UserPopUp() {
  const { saveUserData } = usePopUpContext();
  const startingFormData = { name: "", surname: "", email: "" };
  const [formData, setFormData] = useState(startingFormData);
  const [isHide, setIsHide] = useState(() => {
    return sessionStorage.getItem("userPopUpClosed") === "true";
  });

// handlers

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveUserData(formData);
    sessionStorage.setItem("userPopUpClosed", "true");
    axios
      .post("http://localhost:3000/sneakers/popup", formData)
      .then((response) => {
        console.log(response.data);
        toast.success("Dati inviati correttamente");
        if (response.data ) {setIsHide(true)};
      })
      .catch((err) => {
        console.error(err);
        toast.error("Errore nell'immissione dei dati");
      });
  };

  const handleClose = () => {
    setIsHide(true);
    sessionStorage.setItem("userPopUpClosed", "true");
  };

  if (isHide) return null;

  return (
  <div className="modal-overlay">
    <div className="modal-container">
      <div className="container my-2">
        <h3 className="text-center">Benvenuto su zneakdrop! <br /> Registrati alla nostra newsletter e ricevi subito il 5% di sconto sul tuo primo ordine!</h3>
        <form className="row d-flex" onSubmit={handleSubmit}>
          <div className="col-4">
            <label htmlFor="name" className="form-label">Nome</label>
            <input
              className="form-control"
              type="text"
              placeholder="Inserisci il tuo nome"
              name="name"
              value={formData.name}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="col-4">
            <label htmlFor="surname" className="form-label">Cognome</label>
            <input
              className="form-control"
              type="text"
              placeholder="Inserisci il tuo cognome"
              name="surname"
              value={formData.surname}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="col-4">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              className="form-control"
              type="email"
              placeholder="Inserisci la tua email"
              name="email"
              value={formData.email}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="col-12 mt-3 d-flex justify-content-around">
            <button type="submit" className="btn btn-primary btn-xl">Conferma i tuoi dati</button>
            <button type="button" onClick={handleClose} className="btn btn-success btn-xl">
              Ho già immesso i miei dati
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
);
}
