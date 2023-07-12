const { API_KEY } = process.env;
require('dotenv').config();
const axios = require('axios');

const getApiDogs = async () => {
    let { data } = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
    
    let apiDogs = data.map((dog) => {
       
        // Si no tiene temperaments, asignamos un string:
        if(!dog.temperament){
            dog.temperament = "No temperaments for this dog :("
        }

        return {
            id: dog.id,
            name: dog.name,
            height: dog.height.metric,
            weight: dog.height.metric,
            lifeSpan: dog.life_span,
            image: dog.image.url,
            temperament: dog.temperament, // deberia venir un string
            dogFrom : "api"

        }
    })

    return apiDogs;
}

//   // Verificar si no hay altura mínima especificada
      //   if (isNaN(heightMin)) {
      //   heightMin = 0; // Asignar un valor predeterminado
      // }
  
      // // Verificar si no hay altura máxima especificada
      // if (isNaN(heightMax)) {
      //   heightMax = 35; // Asignar un valor predeterminado
      // }
  
      // if (isNaN(weightMin)) {
      //   weightMin = 0; // Asignar un valor predeterminado
      // }
  
      // // Verificar si no hay altura máxima especificada
      // if (isNaN(weightMax)) {
      //   weightMax = 75; // Asignar un valor predeterminado
      // }
  



module.exports = {
    getApiDogs,
}