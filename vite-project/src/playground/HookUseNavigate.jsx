import React from "react";
import { Link,useNavigate } from "react-router-dom";

function HookUseNavigate(){
    const navigate = useNavigate();

    function GoRoute(){
        navigate('/useState')
    }
    return(
        <div className="container justify-content-center">
            <div className="text-center">
                <h2>Ejemplos de useNavigate</h2>
                <div className="list-group">
                    <button onClick={GoRoute} className="btn btn-danger">Ruta Navigate</button>
                    <Link to='name-route'>Ruta de ejemplo</Link>
                <a href="/" className=" d-block mt-4 bg-secondary rounded text-white">Ir a Home</a>
                </div>
            </div>
        </div>
    )

}

export default HookUseNavigate;