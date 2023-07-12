const { getApiDogs } = require("./getApiDogs")
const { getDbDogs } = require("./getDbDogs")
const axios = require('axios');

const getDogs = async () => { 
        let apiDogs = await getApiDogs();
        let dbDogs = await getDbDogs();
    
        // Traemos las razas tanto de la API como de la DB y las concatenamos en un solo array de objetos
        // let allDogs = apiDogs.concat(dbDogs);
        let allDogs = [...apiDogs, ...dbDogs]; //copia de ambos controladores dentro de la variable dogs

        return allDogs;
      
}


module.exports = {
    getDogs,
}