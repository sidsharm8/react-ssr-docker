const Character = require("../models/character");
const mongoose = require("mongoose");
const axios = require("axios");
const url = require("../mongo-config/config").url;


const API_URL = "https://rickandmortyapi.com/api/character/";


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", (err) => {
  console.log("connection error:" + err);
});
db.once("open", () => {
  console.log(`Connected to MongoDB`);
  console.log("Initialising the Database");
  InitDB();
//getOtherSpecies();
//  getOtherOrigins();
});

//for testing
const getOtherSpecies = () => {
  Character.paginate( { species: { $nin: ["Human", "Mytholog" ] } }, { page: 1, limit : 600, select: 'species', }, (err, {docs, ...info}) => {
    const response = { results : docs, info };
    const species = [];
    docs.map(character => {
      if(species.indexOf(character.species) == -1){
        species.push(character.species);
      }
    });
    console.log(species)
  });
}

//for testing
const getOtherOrigins = () => {
  Character.paginate( { 'origin.name':  { $nin: ["unknown", "Post-Apocalyptic Earth" ] } }, { page: 1, limit : 600, select: 'origin', }, (err, {docs, ...info}) => {
    const response = { results : docs, info };
    const origins = [];
    docs.map(character => {
      if(origins.indexOf(character.origin.name) == -1){
        origins.push(character.origin.name);
      }
    });
    console.log(origins)
  });
}
const InitDB = (url = API_URL) => {
	const list = [];
	getData(url).then((res) => {
		res.data.results.map((args) => {
			const character = new Character( {...args} );
			character.save();
		})
		if(res.data.info.next){
			InitDB(res.data.info.next);
		}  // recursively call initdb to fill the the entire database
		else{
			console.log("Database Initialised successfully");
			process.exit();
		}
	});

}

const getData = (url) => {
	return axios.get(url);
}
