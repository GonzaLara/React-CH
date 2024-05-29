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
        </div>
    )
}

export default Carousel;