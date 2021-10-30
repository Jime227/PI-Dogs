const axios = require("axios").default;
const Temperament = require("../db");
// const getDogs = require('./dogs')
const { API_KEY } = process.env;

module.exports = async function getTemperaments(req, res) {
  try {
    let temp = await axios
      .get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
      .then((response) =>
        response.data.map((t) => {
          return t.temperament;
        })
      );
    temp = temp.join().split(",");

    temp = [...new Set(temp)];

    temp = temp.map((t) => {
      return {
        name: t,
      };
    });

    try {
      let temps = temp.map(async (data) => {
        await Temperament.create({
          where: {
            name: data.name,
          },
        });
      });
    } catch (error) {
      res.json(error);
    }
    res.json(temp);
  } catch (error) {
    res.json(error);
  }
};
