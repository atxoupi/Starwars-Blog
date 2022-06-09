import React from "react";
import { Card } from "./card";
import "../../styles/home.css";

export const Home = () => (
	<div className="text-left mt-5">
		<h1 className="text-danger">Character</h1>
		<div className="d-flex p-2  m-2">
			<Card />
			<Card />
			<Card />
		</div>
		<h1 className="text-danger">Planets</h1>
		<div className="d-flex">
			<Card />
			<Card />
			<Card />
		</div>
	</div>
);
