import React,{useContext} from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";


export const CardPlanet = () =>{ 
    const {store}=useContext(Context);
    
    return (
	<div className="d-flex w-100 overflow-auto">
        {store.planets.map((item)=>{return(
        <div className="m-3" key={item.uid}>
		<div className="card" style={{width: "18rem"}}>
        <img src="https://picsum.photos/id/870/200/300?grayscale&blur=2" className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">Poblacion: {item.population}<br></br>Período Orbital: {item.orbital_period}</p>
            <div className="d-flex justify-content-between">
                <Link to="/single">
                <div className="p-0 bd-highlight">
                <span href="#" className="btn btn-primary">Learn More</span>
                </div>
                </Link>
                <div className="p-0 bd-highlight">
                    <a href="#" className="btn btn-primary "><i className="fa-regular fa-heart"></i></a>
                </div>
            </div>
            
        </div>
        </div>	
	    </div>)})}
    </div>
);
};