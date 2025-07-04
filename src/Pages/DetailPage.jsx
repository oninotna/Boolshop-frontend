import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SneakersCard from "../Components/SneakersCard";


export default function DetailPage () {
    const {slug} = useParams()
    const [sneaker, setSneaker] = useState({});
    const [relatedSneaker, setRelatedSneaker] = useState([]);
    const [sneakerImg, setSneakerImg] = useState([]);
    const [currentImg, setCurrentImg] = useState();


    useEffect(() => {
        axios.get(`http://localhost:3000/sneakers/${slug}`)
        .then((res) => {
            setSneaker(res.data.sneaker)
            setRelatedSneaker(res.data.sneaker.related)
            setSneakerImg(res.data.sneaker.images)
            setCurrentImg(res.data.sneaker.images[0])
            console.log(res.data.sneaker.images);    
        })
    }, [slug]);

    return (
        <div className="container-fluid">
        <h1>{sneaker.brand} {sneaker.model}</h1>
        <div className="container my-5">
            <div className="row">
      <img
        src={currentImg || sneakerImg[0]}
        alt=""
        className="img-fluid mb-4 w-50"
      />
      <div className="col-4">
      <p>
        <strong className="text-danger">Prezzo:</strong> {sneaker.price}
      </p>
      <p>
        <strong className="text-danger">Colore:</strong> {sneaker.color}
      </p>
      <p>
        <strong className="text-danger">Genere:</strong> {sneaker.gender}
      </p>
      <p>
        <strong className="text-danger">Descrzione:</strong> {sneaker.description}
      </p>
      </div>
      </div>
      {sneakerImg.map((img, index) => (
        <img className="all-img me-3" src={img} onClick={() => setCurrentImg(img)} key={index} />
      ))}
        <div className="row justify-content-center my-5">
        {relatedSneaker.map(rel => <SneakersCard data={rel} key={rel.id_sneaker} />)}
        </div>
        </div>
        </div>
    );
};