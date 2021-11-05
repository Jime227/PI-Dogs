const axios = require("axios");
const { API_KEY } = process.env;
const { Dog, Temperament } = require("../db");

async function getDogs(req, res) {
  try {
    let dogs = [];
    let apiDogs = await axios
      .get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
      .then((response) => {
        dogs = response.data.map((d) => {
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
      });

    let dbDogs = await Dog.findAll({
      include: {
        model: Temperament,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });

    let allDogs = dogs.concat(dbDogs);

    const name = req.query.name;

    if (name) {
      const found = dogs.filter((d) =>
        d.name.toLowerCase().includes(name.toLowerCase())
      );

      found.length < 1
        ? res.json("Dog not found, try another one or add it to our database")
        : res.json(found);
    } else {
      res.json(allDogs);
    }
  } catch (error) {
    console.log(error);
  }
}
// async function getDog(req, res) {
//   const id = req.params;
//   console.log(id);
//   console.log("hello");
//   try {
//     let dogs = await axios.get(
//       `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
//     );
//     console.log(dogs);
//     let query = await dogs.findByPk(id, {
//       include: [Temperament],

//       // traes los perros con findByPk
//       //en otra variable unis los arrays
//       //renderizas el completo
//     });
//     if (query) {
//       res.json(query);
//     } else {
//       res.status(404).json("Not found");
//     }
//   } catch (error) {
//     res.status(500).json({ error });
//   }
// }
module.exports = {
  getDogs,
};
