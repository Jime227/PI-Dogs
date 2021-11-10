// const { Dog, Temperament } = require("../db");
// const { Router } = require("express");
// const axios = require("axios").default;
// const router = Router();
// const { API_KEY } = process.env;

// module.exports = async function addDog(req, res, next) {
//   const { name, weight, height, life_span, temperament, image } = req.body;

//   try {
//     const createdDog = await Dog.create({
//       name,
//       weight,
//       height,
//       life_span,
//       image,
//       temperament,
//     });
//     const temperamentsDB = await Temperament.findAll({
//       where: {
//         name: temperament,
//       },
//     });
//     createdDog.addTemperament(temperamentsDB);
//     res.json(createdDog);
//   } catch (error) {
//     next(error);
//   }
// };
const { Router } = require("express");
const router = Router();
const { Dog } = require("../db.js");

router.post("/", async (req, res, next) => {
  const { name, height, weight, life_span, image, temperaments } = req.body;

  try {
    createNewDog = await Dog.create({ name, height, weight, image, life_span });
    await createNewDog.setTemperaments(temperaments);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
