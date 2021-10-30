const router = require("express").Router();
const getTemperaments = require("../controllers/temperament");

router.get("/", getTemperaments);
module.exports = router;
