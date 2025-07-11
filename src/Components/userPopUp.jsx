import { useState } from "react";
import axios from "axios";
import { usePopUpContext } from "../Contexts/popUpContext";
import "../assets/css/userPopUp.css";
import { toast } from "react-toastify";
export default function UserPopUp() {
  const { saveUserData } = usePopUpContext();
  const startingFormData = { name: "", surname: "", email: "" };
  const [formData, setFormData] = useState(startingFormData);
  const [isSuccessMessageVisible, setIsSuccessMessageVisible] = useState(false);
  const [isHide, setIsHide] = useState(() => {
    return sessionStorage.getItem("userPopUpClosed") === "true";
  });

  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveUserData(formData);

    axios
      .post("http://localhost:3000/sneakers/popup", formData)
      .then((response) => {
        if (response.data) {
          sessionStorage.setItem("userPopUpClosed", "true");
          setIsHide(true);
          setIsSuccessMessageVisible(true);
        }
      })
      .catch((err) => {
        toast.error("Errore nell'immissione dei dati");
      });
  };

  const handleClose = () => {
    setIsHide(true);
    sessionStorage.setItem("userPopUpClosed", "true");
  };

  const handleCloseSuccessMsg = () => {
    setIsSuccessMessageVisible(false);
  };

  return (
    <>
      {!isHide && (
        <div className="modal-overlay ">
          <div className="modal-container relative">
            <div className="container my-2 ">
              <h3 className="text-center">
                <span className="fs-1 fw-bold "> Benvenuto su zneakdrop!</span>
                <br /> Registrati alla nostra newsletter e resta aggiornato
                sulle nostre ultime novità!
              </h3>
              <form className="row d-flex mt-4" onSubmit={handleSubmit}>
                <div className="col-sm-12 col-md-4">
                  <label htmlFor="name" className="form-label">
                    Nome
                  </label>
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
                <div className="col-sm-12 col-md-4">
                  <label htmlFor="surname" className="form-label">
                    Cognome
                  </label>
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
                <div className="col-sm-12 col-md-4">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
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
                  <button
                    type="submit"
                    className="btn btn-xl"
                    style={{ background: "#39ff14" }}
                  >
                    Conferma i tuoi dati
                  </button>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="btn-close cst-close-button"
                  ></button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {isSuccessMessageVisible && (
        <div className="modal-overlay ">
          <div className="modal-container relative">
            <div className="container my-2 ">
              <p className="text-center">
                <span className="fs-1 fw-bold ">
                  I tuoi dati sono stati inviati correttamente! <br />
                  Riceverai presto un e-mail di conferma!
                </span>
              </p>
              <div className="d-flex justify-content-center">
                <button
                  type="button"
                  onClick={handleCloseSuccessMsg}
                  className="btn btn-xl"
                  style={{ background: "#39ff14" }}
                >
                  Chiudi
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
