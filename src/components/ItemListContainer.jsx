import abajo from "../assets/imagenes/abajo.svg";

const Lista = ({mensaje}) => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col text-center">
                    <h2 className="text-dark">{mensaje} <img className="abajo" src={abajo} alt="carrito" width={28} /></h2>
                </div>
            </div>
        </div>
    )
}

export default Lista;