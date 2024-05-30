import { Link } from "react-router-dom";
import Item from "./Item";

const ItemList = ({ items }) => {
    return (
        <>
            <div className="row mt-5 mb-2">
                <div className="col">
                    <ul className="nav d-flex justify-content-center text-uppercase mb-3 text-decoration-none">
                        <li className="nav-item rounded-pill">
                            <Link to={"/"} className="nav-link text-dark">Todo</Link>
                        </li>
                        <li className="nav-item rounded-pill">
                            <Link to={"/category/mochila"} className="nav-link text-dark">Mochilas</Link>
                        </li>
                        <li className="nav-item rounded-pill">
                            <Link to={"/category/juguete"} className="nav-link text-dark">Juguetes</Link>
                        </li>
                        <li className="nav-item rounded-pill">
                            <Link to={"/category/remera"} className="nav-link text-dark">Remeras</Link>
                        </li>
                        <li className="nav-item rounded-pill">
                            <Link to={"/category/buzo"} className="nav-link text-dark">Buzos</Link>
                        </li>
                    </ul>
                </div>
            </div>
            {items.map(produ => (
                <Item key={produ.id} item={produ} />
            ))}
        </>
    )
}

export default ItemList;