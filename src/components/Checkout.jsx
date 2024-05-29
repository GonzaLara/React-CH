import { useContext, useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Checkout = () => {
    const { cart, clear, countProducts, finalProducts } = useContext(CartContext);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");
    const [error, setError] = useState("");

    const generarOrden = () => {
        if (nombre == "") {
            return false
        } else if (email == "") {
            return false
        } else if (telefono == "") {
            return false
        }

        const buyer = { nombre: nombre, email: email, telefono: telefono };
        const items = cart.map(item => ({ id: item.id, title: item.nombre, price: item.precio }));
        const date = new Date();
        const currentDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

        const order = { buyer: buyer, items: items, date: currentDate, total: finalProducts() };

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(data => {
            setOrderId(data.id);
            setNombre("");
            setEmail("");
            setTelefono("");
            clear();
        });
    }

    if (countProducts() == 0 && !orderId) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <div className="alert alert-primary" role="alert">
                            <h3>No hay productos</h3>
                            <Link to={"/"} className="btn text-white bg-dark my-5">Volver al Inicio</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container my-5">
            {!orderId ?
                <div className="row">
                    <div className="col">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Nombre</label>
                                <input type="email" className="form-control" onInput={(e) => { setNombre(e.target.value) }} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input type="text" className="form-control" onInput={(e) => { setEmail(e.target.value) }} />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Telefono</label>
                                <input type="text" className="form-control" onInput={(e) => { setTelefono(e.target.value) }} />
                            </div>
                            <button type="button" className="btn text-white bg-black" onClick={generarOrden}>Generar Orden</button>
                        </form>
                    </div>

                    <div className="col">
                        <table className="table">
                            <tbody>
                                {cart.map(item => (
                                    <tr key={item.id}>
                                        <td><img src={item.imagen} alt={item.nombre} width={80} /></td>
                                        <td>{item.nombre}</td>
                                        <td>x{item.quantity}</td>
                                        <td className="text-end">${item.precio}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan={2}><b>Total</b></td>
                                    <td className="text-end"><b>${finalProducts()}</b></td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div> : ""}

            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <div className="alert alert-primary" role="alert">Tu ID de compra es: <b>{orderId}</b></div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;