const addDog = require("../controllers/dog");

const router = require("express").Router();

router.post("/", addDog);

module.exports = router;
