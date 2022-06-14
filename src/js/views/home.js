import React,{useContext} from "react";
import { Card } from "./card";
import { CardPlanet } from "./cardPlanet";
import "../../styles/home.css";
import { Context } from "../store/appContext";


export const Home = () => {
	const {store}=useContext(Context);


	return (
		<div className="text-left mt-5">
			<h1 className="text-danger">Character</h1>
			<div className="d-flex p-2  m-2 w-100 overflow-auto">
				{store.characters.map((item)=>{return( <Card key={item.uid} nombre={item.name} theid={item.uid} />);})}
			</div>
			<h1 className="text-danger">Planets</h1>
			<div className="d-flex p-2  m-2 w-100 overflow-auto">
				{store.planets.map((item)=>{return( <Card key={item.uid} nombre={item.name} theid={item.uid+100} />);})}
			</div>
		</div>
	);
};
