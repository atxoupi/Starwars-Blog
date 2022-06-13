import React,{ useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store}=useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img
				 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTGRMt6zxrgfeQ2NKKwN8KnMjWzSE5iiE1mA&usqp=CAU" />
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<div className="dropdown">
					<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						{store.favorites.map((item,key)=>{return(
							<li key={key}>{item}</li>
						);})}
					</ul>
					</div>
				</Link>
			</div>
		</nav>
	);
};
