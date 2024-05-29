import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";
import { useContext } from "react";
import cart from "../assets/imagenes/carrito.svg";
import log from "../assets/imagenes/ingreso.svg";

const CartWidget = () => {
    const { countProducts } = useContext(CartContext);
    
    return (
        <>
            <Link to={"/cart"} className="btn btn-light position-relative">
                <img src={cart} alt="carrito" width={24} />
                <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">{countProducts()}
                </span>
            </Link>

            <div className="dropdown ms-3">
                <button className="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={log} alt="loggeo" width={24} />
                </button>
                <ul className="dropdown-menu">
                    <li><button className="dropdown-item text-center" type="button">Registrarse</button></li>
                    <li><button className="dropdown-item text-center" type="button">Ingresar</button></li>
                </ul>
            </div>
        </>
    )

}

export default CartWidget;