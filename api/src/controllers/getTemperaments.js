const { getDogs } = require("./getDogs")

const getTemperaments = async () => {
    const allDogs = await getDogs();
    let temperament = [];

    allDogs.forEach(dogs => {
        const arrayTemp = dogs.temperament?.split(', ');
        temperament =  temperament.concat(arrayTemp);
    })

    let arraySinRepetidos = temperament.filter((value, index, self) =>  self.indexOf(value) === index);
    return arraySinRepetidos.sort()
}




module.exports = {
    getTemperaments,
}