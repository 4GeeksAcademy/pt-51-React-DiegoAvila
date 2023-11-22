import React from "react"; //importar react
// crear el componente JSX
// las funciones se escriben con camelCase
// los componentes se escriben con PascalCase
function NavBar(){
    return(
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand text-light" href="#">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active text-white-50" aria-current="page" href="#">Home</a>
                        <a className="nav-link text-white-50" href="#">About</a>
                        <a className="nav-link text-white-50" href="#">Services</a>
                        <a className="nav-link text-white-50" href="">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

//exportar componente

export default NavBar