import React,{ useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions}=useContext(Context);
	function borrar(nombre){
		actions.borrarTarea(nombre);
	}

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img
				 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTGRMt6zxrgfeQ2NKKwN8KnMjWzSE5iiE1mA&usqp=CAU" />
			</Link>
			<div className="ml-auto">
				{/* <Link to="/demo"> */}
					<div className="dropdown ">
					<button className="btn btn-outline-warning dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites  
						<span className="border border-ligth border-2 m-3 px-1 rounded	">{store.favorites.length}</span>
					</button>
					<ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">
						{store.favorites.map((item,key)=>{return(
							<li className="d-flex justify-content-between" key={key}>{item}<button type="button" className="btn btn-outline-danger" onClick={()=>borrar(item)}> <i className="fa-solid fa-trash-can" ></i></button></li>
						);})}
					</ul>
					</div>
				{/* </Link> */}
			</div>
		</nav>
	);
};
//onClick={actions.borrarTarea(item)}