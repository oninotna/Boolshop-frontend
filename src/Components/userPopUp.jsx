import { useState } from "react";
import axios from "axios";
import { usePopUpContext } from "../Contexts/popUpContext";

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
        alert("Dati inviati con successo");
        if (response.data ) {setIsHide(true)};
      })
      .catch((err) => {
        console.error("Errore:");
        alert("Errore durante l'invio dei dati");
      });
  };

  const handleClose = () => {
    setIsHide(true);
    sessionStorage.setItem("userPopUpClosed", "true");
  };

  if (isHide) return null;

  return (
    <div className="my-5">
      <div className="container my-2">
        <h2 className="text-center">Inserisci i tuoi dati</h2>
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
          <div className="col-12 mt-3 d-flex justify-content-around ">
            <button type="submit" className="btn btn-primary btn-xl">Conferma i tuoi dati</button>
            <button type="button" onClick={handleClose} className="btn btn-success btn-xl">
              Ho già immesso i miei dati
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
