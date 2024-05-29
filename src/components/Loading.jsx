const Loading = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col text-center my-5">
                    <div className="spinner-border text-warning" role="status">
                        <span className="visually-hidden">Cargando...</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading;