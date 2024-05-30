const Carousel = () => {
    return (
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
            <div className="carousel-inner" id="inicio">
                <div className="carousel-item active">
                    <img src="/fondo-1.jpg" className="d-block w-100" alt="fondo1" />
                </div>
                <div className="carousel-item">
                    <img src="/fondo-2.webp" className="d-block w-100" alt="fondo2" />
                </div>
                <div className="carousel-item">
                    <img src="/fondo-3.jpg" className="d-block w-100" alt="fondo3" />
                </div>
            </div>

            <div className="carousel-caption text-dark text-uppercase">
                <h1 className="caption-title"> Bienvenidos a <br />SiempreSimpson</h1>
                <p className="caption-text">Explora el mundo de los Simpson y sus aventuras cotidianas</p>
            </div>
        </div>
    )
}

export default Carousel;