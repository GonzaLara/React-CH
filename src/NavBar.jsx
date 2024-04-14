import CartWidget from "./CartWidget";
import logo from "./assets/imagenes/logo.png";

const NavBar = () => {
    return (
        <div className="container-fluid bg-black">
            <div className="row fondo p-3">
                <div className="col-md text-start">
                    <a href="#">
                        <img src={logo} alt="titulo" />
                    </a>
                </div>

                <div className="col d-flex align-items-center justify-content-center">
                    <ul className="nav">
                        <li className="nav-item rounded-pill">
                            <a className="nav-link text-light" href="#">Inicio</a>
                        </li>
                        <li className="nav-item rounded-pill">
                            <a className="nav-link text-light" href="#">Tienda</a>
                        </li>
                        <li className="nav-item rounded-pill">
                            <a className="nav-link text-light" href="#">Temporadas</a>
                        </li>
                        <li className="nav-item rounded-pill">
                            <a className="nav-link text-light" href="#">Noticias</a>
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
