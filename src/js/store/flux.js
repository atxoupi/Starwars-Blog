const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters:[],
			planets:[],
			favorites:[],
			dataSingle: {}
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				fetch("https://www.swapi.tech/api/people/")
				.then((Response)=>Response.json())
				.then((data)=> setStore({characters : data.results}))
			},
			loadSomePlanet: () => {
				fetch("https://www.swapi.tech/api/planets/")
				.then((Response)=>Response.json())
				.then((data)=> setStore({planets : data.results}))
			},
			addFavorite: (nombre) => {
				let newarr=getStore().favorites;
				newarr.push(nombre);
				setStore({favorites: newarr});
			},
			addPerson: (theid) => {
				fetch("https://www.swapi.tech/api/people/"+theid)
				.then((Response)=>Response.json())
				.then((data)=> setStore({dataSingle : data.result.properties}))
			},
			addPlanet: (theid) => {
				fetch("https://www.swapi.tech/api/planets/"+theid)
				.then((Response)=>Response.json())
				.then((data)=> setStore({dataSingle : data.result.properties}))
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
