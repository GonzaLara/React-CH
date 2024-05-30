const Carousel = () => {
    return (
        <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/fondo-1.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="/fondo-2.webp" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="/fondo-3.jpg" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            <div className="carousel-caption text-dark text-uppercase">
                <h1 className="caption-title"> Bienvenidos a <br />Siempre Simpson</h1>
                <p className="caption-text">Explora el mundo de los Simpson y sus aventuras cotidianas</p>
            </div>
        </div>
    )
}

export default Carousel;