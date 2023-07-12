const { Router } = require("express");
const axios = require("axios")
const { getDogsHandler } = require("../handlers/getDogsHandler")
const { getDogsByIdHandler } = require("../handlers/getDogsByIdHandler")
const { createDogHandler } = require("../handlers/createDogHandler")

const dogsRouter = Router();

// GET | /dogs y GET | /dogs/name?="..."
// Obtiene un arreglo de objetos, donde cada objeto es la raza de un perro.
// Si por query pasan el name de una raza, debe obtener todas aquellas razas de perros que coinciden con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
// Debe poder buscarlo independientemente de mayúsculas o minúsculas.
// Si no existe la raza, debe mostrar un mensaje adecuado.
// Debe buscar tanto los de la API como los de la base de datos.
dogsRouter.get("/", getDogsHandler)


// GET | /dogs/:idRaza
// Esta ruta obtiene el detalle de una raza específica. Es decir que devuelve un objeto con la información pedida en el detalle de un perro.
// La raza es recibida por parámetro (ID).
// Tiene que incluir los datos de los temperamentos asociadas a esta raza.
// Debe funcionar tanto para los perros de la API como para los de la base de datos.
dogsRouter.get("/:id", getDogsByIdHandler)



// POST | /dogs
// Esta ruta recibirá todos los datos necesarios para crear un nuevo perro y relacionarlo con los temperamentos asociados.
// Toda la información debe ser recibida por body.
// Debe crear la raza de perro en la base de datos, y esta debe estar relacionada con los temperamentos indicados (al menos uno).

dogsRouter.post("/", createDogHandler)



module.exports = dogsRouter;