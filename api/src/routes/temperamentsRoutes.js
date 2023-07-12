const { Router } = require("express");
const { getTemperamentsHandler } = require("../handlers/getTemperamentHandler")

const temperamentsRouter = Router();

temperamentsRouter.get("/", getTemperamentsHandler)

module.exports = temperamentsRouter;