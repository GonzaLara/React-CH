import { Link } from "react-router-dom";

const Carousel = () => {
    return (
        <div className="container-fluid bg-white mt-2">
            <div className="row">
                <div className="col-md-10 mx-auto">
                    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="3000">
                                <img src="/fondo-1.jpg" className="d-block w-100" alt="slide 1" />
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                                <img src="/fondo-2.webp" className="d-block w-100" alt="slide 2" />
                            </div>
                            <div className="carousel-item" data-bs-interval="3000">
                                <img src="/fondo-3.jpg" className="d-block w-100" alt="slide 3" />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon btn btn-dark" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon btn btn-dark" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col colum">
                    <ul className="nav text-uppercase mb-3 text-decoration-none">
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
        </div>
    )
}

export default Carousel;