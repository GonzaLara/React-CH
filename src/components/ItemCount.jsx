import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, onAdd }) => {
    const [contador, setContador] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [visible, setVisible] = useState(true);

    const incrementar = () => {
        if (contador < itemStock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }

    const addToCart = () => {
        if (contador <= itemStock) {
            setItemStock(itemStock - contador);
            onAdd(contador);
            setContador(1);
            setVisible(false);
        }
    }

    useEffect(() => {
        setItemStock(stock);
    }, [stock])

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="btn-group" role="group">
                        <button type="button" className="btn bg-warning rounded-0" onClick={decrementar}> - </button>
                        <button type="button" className="btn bg-warning rounded-0">{contador}</button>
                        <button type="button" className="btn bg-warning rounded-0" onClick={incrementar}> + </button>
                    </div>
                </div>
            </div>
            <div className="row my-1">
                <div className="col">
                    {visible ? <button type="button" className="btn bg-warning text-uppercase border border-secondary" onClick={addToCart}>Agregar Al Carrito</button> : 
                    <Link to={"/cart"} className="btn bg-warning text-uppercase border border-secondary">Finalizar compra</Link>}
                </div>
            </div>
        </div>
    )
}

export default ItemCount;