const { Router } = require("express");
const { Temperament } = require("../db");
const axios = require("axios").default;
const router = Router();
const { API_KEY } = process.env;

router.get("/", async (req, res, next) => {
  try {
    const dogApi = await axios.get(
      `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
    );

    let temp = await dogApi.data.map((e) => e.temperament);

    temp = temp.join().split(",");

    temp = [...new Set(temp)].sort();

    temp = temp
      .map((e) => {
        return {
          name: e,
        };
      })
      .filter((e) => e.name);

    const allTemperaments = await Temperament.bulkCreate(temp);
    res.send(allTemperaments);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
