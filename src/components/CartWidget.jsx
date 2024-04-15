import cart from "../assets/imagenes/carrito.svg";
import log from "../assets/imagenes/ingreso.svg";

const CartWidget = () => {
    return (
        <>
            <button type="button" className="btn btn-light position-relative">
                <img src={cart} alt="carrito" width={24} />
                <span className="position-absolute top-0 start-0 translate-middle badge rounded-pill bg-danger">1
                </span>
            </button>

            <div class="dropdown ms-3">
                <button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={log} alt="loggeo" width={24}/>
                </button>
                <ul class="dropdown-menu">
                    <li><button class="dropdown-item text-center" type="button">Registrarse</button></li>
                    <li><button class="dropdown-item text-center" type="button">Ingresar</button></li>
                </ul>
            </div>
        </>
    )
}

export default CartWidget;