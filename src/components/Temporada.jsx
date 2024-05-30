import Temp33 from "../assets/imagenes/s33.webp";
import Temp34 from "../assets/imagenes/s34.webp";
import Temp35 from "../assets/imagenes/s35.webp";

const Temporada = () => {
    return (
        <div className="container-fluid">
            <div className="row text-center">
                <h2 className="text-uppercase bg-black text-light p-3">Proximamente</h2>
            </div>
            <div className="row">
                <div className="col text-center columna">
                    <img src={Temp33} alt="t33" className="img-fluid"/>
                    <h2 className="letra-temp">temporada 33</h2>
                </div>

                <div className="col text-center columna">
                    <img src={Temp34} alt="t34" className="img-fluid"/>
                    <h2 className="letra-temp">temporada 34</h2>
                </div>

                <div className="col text-center columna">
                    <img src={Temp35} alt="t35" className="img-fluid"/>
                    <h2 className="letra-temp">temporada 35</h2>
                </div>
            </div>
        </div>
    )
}

export default Temporada;
