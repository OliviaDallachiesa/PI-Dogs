const { getDogs } = require("./getDogs")
const axios = require('axios');

// GET DOG BY NAME
// Si por query pasan el name de una raza, debe obtener todas aquellas razas de perros que coinciden con el nombre recibido por query.

const getDogByName = async (name) => {
    // Debe poder buscarlo independientemente de mayúsculas o minúsculas.
    const allDogs = await getDogs();
    console.log(allDogs)
    let dogFound = allDogs.find(dog => dog.name == name)
    console.log(dogFound)
    return dogFound;

    

    // Debe buscar tanto los de la API como los de la base de datos.
    // usamos el controller
    

    // usamos el metodo includes para obtener todas aquellas razas de perros que coinciden con el nombre recibido por query
    
}

module.exports = {
    getDogByName
}