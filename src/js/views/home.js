import React,{useContext} from "react";
import { Card } from "./card";
import { CardPlanet } from "./cardPlanet";
import "../../styles/home.css";
import { Context } from "../store/appContext";


export const Home = () => {
	const {store}=useContext(Context);
	console.log(store.characters);
	//console.log(store.planets);
	return (
		<div className="text-left mt-5">
			<h1 className="text-danger">Character</h1>
			<div className="d-flex p-2  m-2">
				<Card />
			</div>
			<h1 className="text-danger">Planets</h1>
			<div className="d-flex">
				<CardPlanet />
			</div>
		</div>
	);
};
