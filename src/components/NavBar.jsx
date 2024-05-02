import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from "../assets/imagenes/logo.png";

const NavBar = () => {
    return (
        <div className="container-fluid bg-black">
            <div className="row fondo p-3">
                <div className="col-md text-start">
                    <Link to={"/"}>
                        <img src={logo} alt="logo" />
                    </Link>
                </div>

                <div className="col d-flex align-items-center justify-content-center">
                    <ul className="nav">
                        <li className="nav-item rounded-pill">
                            <NavLink className="nav-link text-light" to={"/"}>Inicio</NavLink>
                        </li>
                        <li className="nav-item rounded-pill">
                            <NavLink className="nav-link text-light" >Tienda</NavLink>
                        </li>
                        <li className="nav-item rounded-pill">
                            <NavLink className="nav-link text-light">Temporadas</NavLink>
                        </li>
                        <li className="nav-item rounded-pill">
                            <NavLink className="nav-link text-light">Noticias</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="col d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar;
