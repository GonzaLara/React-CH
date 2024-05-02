import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Carousel from "./Carousel";
import Temporada from "./Temporada";
import arrayProductos from "./json/productos.json"

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise(resolve => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria == id) : arrayProductos);
            }, 2000);
        });

        promesa.then(respuesta => {
            setItems(respuesta);
        })
    }, [id])

    return (
        <div className="container">
            <div className="row">
                <Carousel />
                <ItemList items={items} />
                <Temporada />
            </div>
        </div>
    )
}

export default ItemListContainer;