import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h1>- Error404 -</h1>
                    <p>La pagina no existe</p>
                    <p className="my-5"><Link to={"/"} className="btn bg-black text-white">Volver</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Error404;