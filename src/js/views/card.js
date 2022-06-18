import React,{useContext, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";




export const Card = ({nombre, theid}) =>{ 
    const {actions}=useContext(Context);
    const [heart,setHeart] = useState("fa-regular fa-heart")
    const [color, setColor] = useState("btn btn-outline-warning");
    

    function addFavorite(nombre){
        findFavorite(nombre);
        if(color==="btn btn-outline-warning"){
            actions.addFavorite(nombre);
            setColor("btn btn-warning");
        }else{
            setColor("btn btn-outline-warning");
            actions.borrarTarea(nombre);
        }
        
    }
   function findFavorite(nombre){
        if (actions.findFavorite(nombre)===true){
            setHeart("fa-regular fa-heart");
        }else {
            setHeart("fa-solid fa-heart");
        }
   }

    return (
	<div className="d-flex">
        <div className="m-3">
		<div className="card border border-warning" style={{width: "18rem"}}>
        <img src="https://picsum.photos/id/870/800/600?grayscale&blur=2" className="card-img-top" alt="..." />
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
                    <span href="#" className={color} onClick={()=>addFavorite(nombre)}><i className={heart}></i></span>
                </div>
            </div>
        </div>
        </div>	
	    </div>
    </div>
);
};