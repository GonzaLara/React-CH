import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import trash from "../assets/imagenes/trash3.svg";


const Cart = () => {
    const { cart, removeItem, clear, countProducts, finalProducts } = useContext(CartContext);
    if (countProducts() == 0) {
        return (
            <div className="container my-5">
                <div className="row detail">
                    <div className="col text-center">
                        <div className="alert alert-primary" role="alert">
                            <h3>No hay productos</h3>
                            <Link to={"/"} className="btn bg-warning text-uppercase border border-secondary my-5">Volver al Inicio</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container my-5">
            <div className="row detail">
                <div className="col">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td colSpan={6} className="text-end"><button className="btn bg-warning text-uppercase border border-secondary" onClick={clear}>Vaciar Carrito</button></td>
                            </tr>

                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td><img src={item.imagen} alt={item.nombre} width={120} /></td>
                                    <td className="align-middle text-start">{item.nombre}</td>
                                    <td className="align-middle text-center">${item.precio}</td>
                                    <td className="align-middle text-center">x{item.quantity}</td>
                                    <td className="align-middle text-center">${item.quantity * item.precio}</td>
                                    <td className="align-middle text-end"><img onClick={() => { removeItem(item.id) }} src={trash} width={32} alt="quitar" title="Quitar Producto" /></td>
                                </tr>
                            ))}
                            <tr>
                                <td className="text-center" colSpan={4}><b>Total</b></td>
                                <td className="text-center"><b>${finalProducts()}</b></td>
                                <td className="text-end"><Link to={"/checkout"} className="btn bg-warning text-uppercase border border-secondary">Checkout</Link></td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
export default Cart;