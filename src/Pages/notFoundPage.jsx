import { Link } from "react-router-dom";
export default function NotFoundPage () 



{ return (
  <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100 text-center">
    <h1 className="display-3 fw-bold mb-3">ERR 404</h1>
    <h2 className="mb-4">La pagina cercata non è stata trovata</h2>
    <div className="col-md-4">
      <Link to="/" className="btn btn-primary btn-lg w-100">
        Ritorna alla pagina principale
      </Link>
    </div>
  </div>
);
}