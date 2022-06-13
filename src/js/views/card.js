import React,{useContext, useState} from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";


export const Card = () =>{ 
    const {store}=useContext(Context);
    const [heart,setHeart] = useState(<i className="fa-regular fa-heart"></i>)
    const [color, setColor] = useState("btn btn-primary");

    function addFavorite(){
        setHeart(<i class="fa-solid fa-heart"></i>);
        setColor("btn btn-warning")
    }
    
    return (
	<div className="d-flex w-100 overflow-auto">
        {store.characters.map((item)=>{return(
        <div className="m-3" key={item.uid}>
		<div className="card" style={{width: "18rem"}}>
        <img src="https://picsum.photos/id/870/400/200?grayscale&blur=2" className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text"></p>
            <div className="d-flex justify-content-between">
                <Link to="/single">
                <div className="p-0 bd-highlight">
                <span href="#" className="btn btn-primary">Learn More</span>
                </div>
                </Link>
                <div className="p-0 bd-highlight">
                    <span href="#" className={color} onClick={addFavorite}>{heart}</span>
                </div>
            </div>
            
        </div>
        </div>	
	    </div>)})}
    </div>
);
};