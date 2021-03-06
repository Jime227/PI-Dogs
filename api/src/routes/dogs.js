const router = require("express").Router();
const axios = require("axios");
const { API_KEY } = process.env;
const { getDogs } = require("../controllers/dogs");
const { Dog } = require("../db");

router.get("/", getDogs);

router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;

    if (typeof id === "string" && id.length > 8) {
      let dogDetails = await Dog.findByPk(id);
      res.json({
        name: dogDetails.name,
        id: dogDetails.id,
        height: dogDetails.height,
        // height_min: d.height.metric.split(" - ")[0],
        weight: dogDetails.weight,
        // weight_min: d.weight.metric.split(" - ")[0],
        life_span: dogDetails.life_span,
        temperament: dogDetails.temperament,
        image: dogDetails.image,
      });
    } else {
      let dog = await axios.get(
        `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
      );

      let dogDetails = dog.data.find((d) => d.id === parseInt(id));
      return res.json({
        name: dogDetails.name,
        id: dogDetails.id,
        height: dogDetails.height.metric,
        // height_min: d.height.metric.split(" - ")[0],
        weight: dogDetails.weight.metric.split(" - ")[0],
        // weight_min: d.weight.metric.split(" - ")[0],
        life_span: dogDetails.life_span,
        temperament: dogDetails.temperament,
        img: dogDetails.image.url,
      });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
