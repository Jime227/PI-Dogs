const { Router } = require("express");

const dogsRouter = require("../routes/dogs");
const dogRouter = require("../routes/dog");
const temperamentRouter = require("../routes/temperament");
const router = Router();

router.use("/dog", dogRouter);
router.use("/dogs", dogsRouter);
router.use("/temperament", temperamentRouter);

module.exports = router;
