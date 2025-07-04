import React, { useState, useEffect, useLayoutEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import SneakersCard from "../Components/SneakersCard";
import Footer from "../Components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { useCart } from "../Contexts/CartContext";
import { useWishList } from "../Contexts/WishListContext";

import "../assets/css/index.css";

export default function DetailPage() {
  const { slug } = useParams();
  const [sneaker, setSneaker] = useState({});
  const [relatedSneaker, setRelatedSneaker] = useState([]);
  const [sneakerImg, setSneakerImg] = useState([]);
  const [currentImg, setCurrentImg] = useState();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedQty, setSelectedQty] = useState(1);
  const [errorSize, setErrorSize] = useState(false);
  const [liked, setLiked] = useState(false);

  const { addToCart } = useCart();
  const { addToWish } = useWishList();

  useEffect(() => {
    axios.get(`http://localhost:3000/sneakers/${slug}`).then((res) => {
      const data = res.data.sneaker;
      setSneaker(data);
      setRelatedSneaker(data.related || []);
      setSneakerImg(data.images || []);
      setCurrentImg(data.images[0] || "");
      setSelectedSize("");
      setSelectedQty(1);
      setLiked(false); // reset su cambio sneaker
    });
  }, [slug]);

  // SCROLL TO TOP ON SLUG CHANGE
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  //! NON FUNZIONA

  const handleAddToCart = () => {
    if (!selectedSize) {
      setErrorSize(true);
      return;
    }
    setErrorSize(false);
    addToCart({ ...sneaker, size: selectedSize, quantity: selectedQty });
    alert("Prodotto aggiunto al carrello!");
  };

  const toggleWish = () => {
    setLiked(!liked);
    addToWish(sneaker);
  };

  return (
    <>
      <div className="detail-page-body container-fluid my-5">
        <div className="row">
          {/* Immagini secondarie */}
          <div className="col-2 d-none d-md-block">
            <div className="thumbs-scroll">
              {sneakerImg.map((img, index) => (
                <img
                  src={img}
                  key={index}
                  className="img-thumbnail mb-3 thumb-img"
                  onClick={() => setCurrentImg(img)}
                  alt={`thumb-${index}`}
                />
              ))}
            </div>
          </div>

          {/* Immagine principale */}
          <div className="col-12 col-md-5 text-center mb-4">
            <img
              src={currentImg}
              alt={`${sneaker.brand} ${sneaker.model}`}
              className="img-fluid main-img"
            />
          </div>

          {/* Dettagli */}
          <div className="col-12 col-md-5">
            <h4 className="text-uppercase text-muted">{sneaker.brand}</h4>
            <h1 className="fw-bold text-title">{sneaker.model}</h1>
            <p className="text-price">€ {sneaker.price}</p>
            <p>
              <strong className="detail-label">Colore:</strong> {sneaker.color}
            </p>
            <p>
              <strong className="detail-label">Genere:</strong> {sneaker.gender}
            </p>
            <p>
              <strong className="detail-label">Descrizione:</strong> {sneaker.description}
            </p>

            {/* Selettori */}
            <div className="d-flex flex-wrap gap-3 my-4">
              <select
                className={`form-select w-auto ${errorSize ? "border border-danger" : ""}`}
                value={selectedSize}
                onChange={(e) => {
                  setSelectedSize(e.target.value);
                  setErrorSize(false);
                }}
              >
                <option value="">Seleziona taglia</option>
                {sneaker.sizes?.map((size, idx) => (
                  <option key={idx} value={size}>
                    {size}
                  </option>
                ))}
              </select>

              <select
                className="form-select w-auto"
                value={selectedQty}
                onChange={(e) => setSelectedQty(Number(e.target.value))}
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>

            {/* Bottoni */}
            <div className="d-flex gap-3 mb-4">
              <button className="btn btn-sm btn-cart" onClick={handleAddToCart}>
                <FontAwesomeIcon icon={faCartShopping} />
              </button>

              <button
                className={`btn-like btn-sm ${liked ? "liked" : "not-liked"}`}
                onClick={toggleWish}
              >
                <FontAwesomeIcon icon={liked ? faHeartSolid : faHeartRegular} />
              </button>
            </div>
          </div>
        </div>

        {/* Prodotti correlati */}
        <section className="related-list">
          <div className="container-fluid">
            <h2 className="latest-title fw-bold">Prodotti correlati</h2>
            <p className="latest-subtitle fst-italic text-secondary">Scopri prodotti simili</p>

            <div className="row g-3 flex-nowrap">
              {relatedSneaker.map((rel) => (
                <SneakersCard data={rel} key={rel.id_sneaker} />
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
