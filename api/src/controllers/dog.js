const { Router } = require("express");
const router = Router();
const { Dog, Temperament } = require("../db.js");

router.post("/", async (req, res, next) => {
  const { name, height, weight, life_span, image, temperament } = req.body;
  //console.log("info por body", temperament);
  try {
    let createNewDog = await Dog.create({
      name,
      height,
      weight,
      image,
      life_span,
    });
    let temp = await Temperament.findAll({
      where: { name: temperament },
    });

    createNewDog.addTemperament(temp);
    res.send("New dog add");
  } catch (error) {
    next(error);
    console.log(error);
  }
});

module.exports = router;
