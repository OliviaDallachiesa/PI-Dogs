const { createDog } = require("../controllers/postDogs")
const { Dog, Temperament } = require("../db")

const createDogHandler = async (req, res) => {
    try{
        // por params llamamos toda la info que manda el client
        const {name, image, heightMin, heightMax, weightMin, weightMax, lifeSpan, temperaments} = req.body

        // tenemos que chequear que no exista:
        const existingDog = await Dog.findOne({ where: { name: name } });
        
        if(existingDog !== null){
            res.status(404).send("This dog already exists!")
        } 
        const newDog = await createDog(name, image, heightMin, heightMax, weightMin, weightMax, lifeSpan, temperaments)
        
        res.status(201).json(newDog)
    } catch(error){
        res.status(404).json({ error: error.message })
    }
     }

module.exports = {
    createDogHandler,
}
