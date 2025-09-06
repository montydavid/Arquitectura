import React from "react";
function HomeHooks(){
    return(
        <div className="container justify-content-center">
            <div className="text-center">
                <h2>Ejemplos de Hooks</h2>
                <div className="list-group">
                    <a href="/useState" className="list-group-item"> Ir a useState </a>
                    <a href="/useNavigate" className="list-group-item"> Ir a useNavigate </a>
                    <a href="/useEffect" className="list-group-item"> Ir a useEffect </a>
                    <a href="/useContext" className="list-group-item"> Ir a useContext </a>
                    <a href="#" className="list-group-item"> Ir a </a>
                </div>
            </div>
        </div>
    )
}
export default HomeHooks;