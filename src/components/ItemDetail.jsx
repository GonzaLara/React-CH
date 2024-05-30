import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import ItemCount from "./ItemCount";
import { useNavigate } from "react-router-dom";

const ItemDetail = ({ item }) => {
    const {addItem} = useContext(CartContext);
    const navigate = useNavigate();

    const onAdd = (quantity) => {
        addItem(item, quantity);
        console.log("Agregaste " + quantity + " productos");
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5 offset-md-2">
                <td className="text-start"><button className="btn bg-warning text-uppercase border border-secondary" onClick={() => navigate(-1)}>Volver</button></td>
                    <img src={item.imagen} className="img-fluid" alt={item.nombre} />
                </div>
                <div className="col-md-4">
                    <h1 className="fs-3 text-uppercase">{item.nombre}</h1>
                    <p className="fs-4 fw-bold">{item.precio}$</p>
                    <p className="small">{item.descripcion}</p>
                    <p className="small">Stock: {item.stock}</p>
                    <ItemCount stock={item.stock} onAdd={onAdd} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;