import React from "react";

function Jumbotron (){
    return(
        <div className="jumbotron m-3 bg-secondary bg-opacity-25 pt-5 pb-5 ps-3 pe-3 rounded text-start">
            <h1 className="display-4">A Warm Welcome!</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Call to action</a>
        </div>

    )
}

export default Jumbotron