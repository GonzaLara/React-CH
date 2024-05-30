import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from "../assets/imagenes/logo.png";

const NavBar = () => {
    const handleNavLinkClick = (hash) => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="container-fluid header">
            <div className="row fondo p-2">
                <div className="col-md text-start">
                    <Link to="/" >
                        <img src={logo} alt="logo" />
                    </Link>
                </div>

                <div className="col d-flex align-items-center justify-content-center">
                    <ul className="nav">
                        <li className="nav-item rounded-pill">
                            <Link className="nav-link text-light" to="/#inicio" onClick={() => handleNavLinkClick("#inicio")}>Inicio</Link>
                        </li>
                        <li className="nav-item rounded-pill">
                            <Link className="nav-link text-light" to="/#tienda" onClick={() => handleNavLinkClick("#tienda")}>Tienda</Link>
                        </li>
                        <li className="nav-item rounded-pill">
                            <Link className="nav-link text-light" to="/#temporadas" onClick={() => handleNavLinkClick("#temporadas")} >Temporadas
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="col d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
        </div>
    );
};

export default NavBar;
