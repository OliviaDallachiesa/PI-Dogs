const { getTemperaments } = require('../controllers/getTemperaments')


const getTemperamentsHandler = async (req, res) => {
    try{
        let getTemps = await getTemperaments()
        return res.status(200).json(getTemps)
    } catch(error){
        return res.status(404).send(error.message)   
    }
}

module.exports = {
    getTemperamentsHandler,
}