const { Dog, Temperament } = require("../db");

module.exports = async function addDog(req, res, next) {
  const { name, weight, height, life_span, temperament, image } = req.body;

  try {
    const createdDog = await Dog.create({
      name,
      weight,
      height,
      life_span,
      image,
      temperament,
    });
    // const temperamentsDB = await Temperament.findAll({
    //   where: {
    //     name: temperament,
    //   },
    // });
    res.json(createdDog);
  } catch (error) {
    next(error);
  }
};
