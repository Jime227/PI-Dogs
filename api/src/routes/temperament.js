const router = require("express").Router();
const getTemperaments = require("../controllers/temperament");
//const { Temperament } = require("../db")

router.get("/", getTemperaments);
module.exports = router;
