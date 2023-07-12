require("dotenv").config
const { API_URL, API_KEY } = process.env
const axios = require("axios")
const { Dog, Temperament } = require("../db");

const getDogsById = async (id) => {
    try {      

        const dbDog = await Dog.findByPk(id, { 
        //se busca en el modelo Dog por medio de la PK que incluya el modelo temperamente con alias "dogTemperament" con atributo "name" y 
        // que me arroje el array con esos atributos que quiero obtener (name)
            include: {
                model: Temperament,
                as: "dogTemperament",
                attributes: ["name"],
                through:{
                    attributes:[],
                },
            },

        });

        if(dbDog){
            return {
                id: dbDog.id,
                name: dbDog.name,
                image: dbDog.image,
                heightMin: dbDog.heightMin,
                heightMax: dbDog.heightMax,
                weightMin: dbDog.weightMin,
                weightMax: dbDog.weightMax,
                height: `${dbDog.heightMin} - ${dbDog.heightMax }`,
                weight: `${dbDog.weightMin} - ${dbDog.weightMax}`,
                lifeSpan: dbDog.lifeSpan,
                temperaments: dbDog.dogTemperament.map(temp => temp.name).join(", "), //unimos los temperaments por medio de una ",",
                dogFrom: dbDog.dogFrom 
                }
        } else {
        // si no hay en db, buscamos en la API
        const { data } = await axios.get(
        `https://api.thedogapi.com/v1/breeds/${id}`
        );

        if(!data.temperament){
        data.temperament = "No temperaments for this dog :("
        }

        let image = '';
        if (data.reference_image_id) {
          image = `https://cdn2.thedogapi.com/images/${data.reference_image_id}.jpg`;
        }
        
        let apiDog = {
            id: data.id,
            name: data.name,
            height: data.height.metric,
            weight: data.weight.metric,
            lifeSpan: data.life_span,
            image: image,
            temperament: data.temperament, // deberia venir un string
            dogFrom : "api"
        }
        
        return apiDog;

        
    }
    
    } catch (error) {
        throw new Error(error.message);
        }
}

module.exports = {
    getDogsById,
}