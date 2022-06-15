import React,{useContext, useState} from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";


export const Card = ({nombre, theid}) =>{ 
    const {actions}=useContext(Context);
    const [heart,setHeart] = useState(<i className="fa-regular fa-heart"></i>)
    const [color, setColor] = useState("btn btn-outline-warning");

    function addFavorite(nombre){
        setHeart(<i className="fa-solid fa-heart"></i>);
        if (color==="btn btn-outline-warning") setColor("btn btn-warning");
        else setColor("btn btn-outline-warning");
        actions.addFavorite(nombre);
    }
    //debemos conseguir modificar 1 solo corazon y no el de todas las fichas
    //debemos conseguir guardar en store un [] con los datos de los favoritos
    return (
	<div className="d-flex">
        <div className="m-3">
		<div className="card" style={{width: "18rem"}}>
        <img src="https://picsum.photos/id/870/400/200?grayscale&blur=2" className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
            <p className="card-text"></p>
            <div className="d-flex justify-content-between">
                <Link to={"/single/"+theid}>
                <div className="p-0 bd-highlight">
                <span href="#" className="btn btn-primary">Learn More</span>
                </div>
                </Link>
                <div className="p-0 bd-highlight">
                    <span href="#" className={color} onClick={()=>addFavorite(nombre)}>{heart}</span>
                </div>
            </div>
        </div>
        </div>	
	    </div>
    </div>
);
};