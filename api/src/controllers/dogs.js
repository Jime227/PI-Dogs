const axios = require("axios");
const { API_KEY } = process.env;

function getDogs(req, res) {
  axios
    .get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)

    .then((response) => {
      let dogs = response.data.map((d) => {
        return {
          name: d.name,
          id: d.id,
          height: d.height.metric,
          // height_min: d.height.metric.split(" - ")[0],
          weight: d.weight.metric,
          // weight_min: d.weight.metric.split(" - ")[0],
          life_span: d.life_span,
          temperament: d.temperament,
          img: d.image.url,
        };
      });

      const name = req.query.name;

      if (name) {
        const found = dogs.filter((d) =>
          d.name.toLowerCase().includes(name.toLowerCase())
        );

        found.length < 1
          ? res.json("Dog not found, try another one or add it to our database")
          : res.json(found);
      } else {
        res.json(dogs);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

module.exports = getDogs;
