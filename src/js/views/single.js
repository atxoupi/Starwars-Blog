import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<>
		<div className="jumbotron">
			<div className="d-flex">
			<img className="m-2" src="https://picsum.photos/800/600/?blur" />
			<p className="lead m-2">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
			</div>
			<hr className="my-4" />
			<table className="table text-secondary">
				<thead>
					<tr>
					<th className="table-danger text-danger" scope="col">Name</th>
					<th className="table-danger text-danger" scope="col">Bith Year</th>
					<th className="table-danger text-danger" scope="col">Gender</th>
					<th className="table-danger text-danger" scope="col">Heigth</th>
					<th className="table-danger text-danger" scope="col">Skin Color</th>
					<th className="table-danger text-danger" scope="col">Eye Color</th>
					</tr>
				</thead>
				<tbody>
					<tr className="table-warning text-danger">
					<td>Luck Skywalker</td>
					<td>19BBY</td>
					<td>male</td>
					<td>172</td>
					<td>fair</td>
					<td>Blue</td>
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

Single.propTypes = {
	match: PropTypes.object
};*/
