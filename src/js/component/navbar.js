import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTGRMt6zxrgfeQ2NKKwN8KnMjWzSE5iiE1mA&usqp=CAU" />
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<div className="dropdown">
					<button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						<li><a className="dropdown-item" href="#">Action</a></li>
						<li><a className="dropdown-item" href="#">Another action</a></li>
						<li><a className="dropdown-item" href="#">Something else here</a></li>
					</ul>
					</div>
				</Link>
			</div>
		</nav>
	);
};
