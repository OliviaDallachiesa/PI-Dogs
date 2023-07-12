const { Dog, Temperament } = require("../db")

const createDog = async (name, image, heightMin, heightMax, weightMin, weightMax, lifeSpan, temperaments) => {

    // chequeamos que el client mande toda la info
    if(!name || !image || !heightMin || !heightMax || !weightMin || !weightMax || !lifeSpan || !temperaments){
        throw new Error("The information is incomplete, please check all the required fields");
    }

    const result = await Dog.findOne({ order: [["id", "DESC"]] }); // se espera buscar el perro en el modelo Dog con order descendente ("del ultimo al primero") por medio del id
    const lastID = result ? result.id : 265; //se pregunta si result existe, si existe que me de su id y sino se le proporciona 265(utlimo id de la lista)
    const count = lastID + 1; 


    // se crea el nuevo perro siguiendo el model definido de Dog
    const newDog = await Dog.create({
        id: count,
        name: name, 
        image: image, 
        heightMin: heightMin, 
        heightMax: heightMax, 
        weightMin: weightMin, 
        weightMax: weightMax, 
        lifeSpan: lifeSpan,
        dogFrom: "db"

    })
    
    // await al modelo Temperament para buscar el nombre del temperamento y agregarselo a la constante NewDog
    const temper = await Temperament.findOrCreate({ where: { name: temperaments } });
    await newDog.addDogTemperament(temper[0]);


}

module.exports = {
    createDog,
}