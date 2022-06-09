import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Card = () => (
	<div className="m-3">
		<div className="card" style={{width: "18rem"}}>
        <img src="https://picsum.photos/id/870/200/300?grayscale&blur=2" className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div className="d-flex flex-row">
                <Link to="/single">
                <div className="d-flex flex-row bd-highlight mb-3">
                    <div className="p-2 bd-highlight">
                    <a href="#" className="btn btn-primary">Learn More</a>
                    </div>
                </div>
                </Link>
                <div className="d-flex flex-row-reverse bd-highlight">
                <div className="p-2 bd-highlight">
                    <a href="#" className="btn btn-primary "><i className="fa-regular fa-heart"></i></a>
                </div>
                </div>
            </div>
            
        </div>
        </div>	
	</div>
);