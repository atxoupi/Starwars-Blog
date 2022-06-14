import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const {theid} = useParams();
	useEffect(()=>{
		console.log({theid});
		actions.addPerson(theid);
	},[])
	return (
		<>
		<div className="jumbotron">
			<div className="d-flex">
			<img className="m-2" src="https://picsum.photos/800/600/?blur" />
			<div className="d-flex-column">
			<h1>{store.dataSingle.name}</h1>
			<p className="lead m-2">A person within the Star Wars universe. Character created in: {store.dataSingle.created}</p></div>
			</div>
			<hr className="my-4" />
			<table className="table text-secondary">
				<thead>
					<tr>
					<th className="table-danger text-danger" scope="col">Name</th>
					<th className="table-danger text-danger" scope="col">Birth Year</th>
					<th className="table-danger text-danger" scope="col">Gender</th>
					<th className="table-danger text-danger" scope="col">Heigth</th>
					<th className="table-danger text-danger" scope="col">Hair Color</th>
					<th className="table-danger text-danger" scope="col">Eye Color</th>
					</tr>
				</thead>
				<tbody>
					<tr className="table-warning text-danger">
					<td>{store.dataSingle.name}</td>
					<td>{store.dataSingle.birth_year}</td>
					<td>{store.dataSingle.gender}</td>
					<td>{store.dataSingle.height}</td>
					<td>{store.dataSingle.hair_color}</td>
					<td>{store.dataSingle.eye_color}</td>
					</tr>
				</tbody>
			</table>
		</div>
		</>
	);}
/*		<div className="jumbotron">
			<h1 className="display-4">This will show the demo element: {store.demo[params.theid].title}</h1>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};
*/
Single.propTypes = {
	match: PropTypes.object
};
