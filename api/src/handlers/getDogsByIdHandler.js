const { getDogsById } = require("../controllers/getDogsById")

const getDogsByIdHandler = async (req, res) => { 
    const { id } = req.params
    try{
        let response = await getDogsById(id)
        res.status(200).json(response)

       } catch(error){
        res.status(404).json({ error: error.message })
    }      
}

module.exports = {
    getDogsByIdHandler,
}