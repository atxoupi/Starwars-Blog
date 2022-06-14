import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const {theid} = useParams();
	const [datos, setDatos] = useState([]);
	const [datosStore, setDatosStore] = useState({});
	useEffect(()=>{
		let indice=theid.indexOf("p");
		if (indice!==-1){
			actions.addPlanet(theid.substring(0,indice));
			let planetas=["Name","Gravity","Rotation Period","Population","Diameter","Terrain"];
			setDatos(planetas);
			let datosPlanetas={
				a :store.dataSingle.name,
				b: store.dataSingle.gravity,
				c: store.dataSingle.rotation_period,
				d: store.dataSingle.population,
				e: store.dataSingle.diameter,
				f: store.dataSingle.terrain
			};
			setDatosStore(datosPlanetas);	
		}
		else {
			actions.addPerson(theid);
			let persons=["Name","Birth Year","Hair Color","Eye Color","Height","Mass"];
			setDatos(persons);
			let datosPersonas={
				a :store.dataSingle.name,
				b: store.dataSingle.birth_year,
				c: store.dataSingle.hair_color,
				d: store.dataSingle.eye_color,
				e: store.dataSingle.height,
				f: store.dataSingle.mass
			};
			setDatosStore(datosPersonas);
		} 
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
					<th className="table-danger text-danger" scope="col">{datos[0]}</th>
					<th className="table-danger text-danger" scope="col">{datos[1]}</th>
					<th className="table-danger text-danger" scope="col">{datos[2]}</th>
					<th className="table-danger text-danger" scope="col">{datos[3]}</th>
					<th className="table-danger text-danger" scope="col">{datos[4]}</th>
					<th className="table-danger text-danger" scope="col">{datos[5]}</th>
					</tr>
				</thead>
				<tbody>
					<tr className="table-warning text-danger">
					<td>{datosStore.a}</td>
					<td>{datosStore.b}</td>
					<td>{datosStore.c}</td>
					<td>{datosStore.d}</td>
					<td>{datosStore.e}</td>
					<td>{datosStore.f}</td>
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
