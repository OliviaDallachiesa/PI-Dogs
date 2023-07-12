// CONTROLLERS DE GET DOG Y GET DOG BY NAME
const { getDogByName } = require("../controllers/getDogByName")
const { getDogs } = require("../controllers/getDogs")

// GET DOGS & GET DOG BY NAME
// Obtiene un arreglo de objetos, donde cada objeto es la raza de un perro.
// Si por query pasan el name de una raza, debe traer los resultados correspondientes.
// Si no existe la raza, debe mostrar un mensaje adecuado.

const getDogsHandler = async (req, res) => { 
    const { name } = req.query
    try{
        if(name){
            let dog = await getDogByName(name)
            
            // Si no existe ese perro:
            
            if(dog === undefined){
                res.status(404).send("No dog found with that name :(")
            }
            res.status(200).json(dog)
        } else {
            let allDogs = await getDogs()
            if(allDogs.length === 0){
                res.status(404).send("No dogs found :(")
            }
            res.status(200).json(allDogs)
        }
    } catch(error){
        return res.status(404).send(error.message)   
    }      
}


module.exports = {
    getDogsHandler,
}