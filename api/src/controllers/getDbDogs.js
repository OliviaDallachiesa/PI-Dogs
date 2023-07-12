require('dotenv').config();
const { Dog, Temperament } = require('../db');


const getDbDogs = async () => {
     const dbDogs = await Dog.findAll(
     {
      include: [{
        model: Temperament,
        through: "dog_temperament",
        as: "dogTemperament"
      }],
    })

    console.log(dbDogs)
  
    const infoDogs = dbDogs?.map((dbDog) => {
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
    })
  
    return infoDogs;
  }

module.exports = { getDbDogs };