import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="container-fluid cont-img d-flex justify-content-center align-items-center">
            <div className="row">
                <div className="col my-5 text-center">
                    <h1>¡YO NO FUI!</h1>
                    <p><b>Mmm seguro se soluciona esperando... o no</b></p>
                    <p><Link to={"/"} className="btn bg-black text-white">Volver</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Error404;