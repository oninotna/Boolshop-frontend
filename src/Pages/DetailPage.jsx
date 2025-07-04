import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SneakersCard from "../Components/SneakersCard";


export default function DetailPage () {
    const {slug} = useParams()
    const [sneaker, setSneaker] = useState({});
    const [relatedSneaker, setRelatedSneaker] = useState([]);
    const [sneakerImg, setSneakerImg] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:3000/sneakers/${slug}`)
        .then((res) => {
            setSneaker(res.data.sneaker)
            setRelatedSneaker(res.data.sneaker.related)
            setSneakerImg(res.data.sneaker.images)
            console.log(res.data.sneaker);
            console.log(res.data.sneaker.related);

            
        })
    }, [slug])
    return (
        <div className="container-fluid">
        <h1>{sneaker.brand} {sneaker.model}</h1>
        <div className="container my-5">
      <h1 className="mb-4 text-white">{sneaker.model}</h1>
      <img
        src={sneakerImg[0]}
        alt=""
        className="img-fluid mb-4 w-50"
      />
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
        <div className="row justify-content-center">
        {relatedSneaker.map(rel => <SneakersCard data={rel} key={rel.id_sneaker} />)}
        </div>
        </div>
        </div>
    );
};