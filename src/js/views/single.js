import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const {theid} = useParams();
	//const [datos, setDatos] = useState([]);
	//const [datosStore, setDatosStore] = useState({});
	let indice=theid.indexOf("p");
	useEffect(()=>{
		
		if (indice!==-1){
			actions.addPlanet(theid.substring(0,indice));
			// let datosPlanetas={
			// 	a :store.dataSingle.name,
			// 	b: store.dataSingle.gravity,
			// 	c: store.dataSingle.rotation_period,
			// 	d: store.dataSingle.population,
			// 	e: store.dataSingle.diameter,
			// 	f: store.dataSingle.terrain
			// };
			// let planetas=["Name","Gravity","Rotation Period","Population","Diameter","Terrain"];
			// setDatos(planetas);
			// setDatosStore(datosPlanetas);	
		}
		else {
			actions.addPerson(theid);
			// let persons=["Name","Birth Year","Hair Color","Eye Color","Height","Mass"];
			// setDatos(persons);
			// let datosPersonas={
			// 	a :store.dataSingle.name,
			// 	b: store.dataSingle.birth_year,
			// 	c: store.dataSingle.hair_color,
			// 	d: store.dataSingle.eye_color,
			// 	e: store.dataSingle.height,
			// 	f: store.dataSingle.mass
			// };
			// setDatosStore(datosPersonas);
		} 
	},[])
	return (
		<>
		<div className="jumbotron">
			<div className="d-flex">
			<img className="m-2" src={(theid.indexOf("p")!==-1)?store.planetas[theid.substring(0,indice)]:store.personajes[theid]} />
			<div className="d-flex-column">
			<h1 id="article">{store.dataSingle.name}</h1>
			<p className="lead m-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.. Character created in: {store.dataSingle.created}</p></div>
			</div>
			<hr className="my-4" />
			{/* <table className="table text-secondary">
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
			</table> */}
			{(indice!==-1)
      			? <table className="table text-secondary">
				  <thead>
					  <tr>
					  <th className="table-danger text-danger" scope="col">Name</th>
					  <th className="table-danger text-danger" scope="col">Gravity</th>
					  <th className="table-danger text-danger" scope="col">Rotation Period</th>
					  <th className="table-danger text-danger" scope="col">Population</th>
					  <th className="table-danger text-danger" scope="col">Diameter</th>
					  <th className="table-danger text-danger" scope="col">Terrain</th>
					  </tr>
				  </thead>
				  <tbody>
					  <tr className="table-warning text-danger">
					  <td>{store.dataSingle.name}</td>
					  <td>{store.dataSingle.gravity}</td>
					  <td>{store.dataSingle.rotation_period}</td>
					  <td>{store.dataSingle.population}</td>
					  <td>{store.dataSingle.diameter}</td>
					  <td>{store.dataSingle.terrain}</td>
					  </tr>
				  </tbody>
			  </table>
      			: <table className="table text-secondary">
				  <thead>
					  <tr>
					  <th className="table-danger text-danger" scope="col">Name</th>
					  <th className="table-danger text-danger" scope="col">Birth Year</th>
					  <th className="table-danger text-danger" scope="col">Hair Color</th>
					  <th className="table-danger text-danger" scope="col">Eye Color</th>
					  <th className="table-danger text-danger" scope="col">Height</th>
					  <th className="table-danger text-danger" scope="col">Mass</th>
					  </tr>
				  </thead>
				  <tbody>
					  <tr className="table-warning text-danger">
					  <td>{store.dataSingle.name}</td>
					  <td>{store.dataSingle.birth_year}</td>
					  <td>{store.dataSingle.hair_color}</td>
					  <td>{store.dataSingle.eye_color}</td>
					  <td>{store.dataSingle.heigth}</td>
					  <td>{store.dataSingle.mass}</td>
					  </tr>
				  </tbody>
			  </table>
    }
		</div>
		</>
	);}

Single.propTypes = {
	match: PropTypes.object
};
