// const axios = require("axios").default;
// const Temperament = require("../db");
// const { API_KEY } = process.env;

// module.exports = async function getTemperaments(req, res) {
//   try {
//     let temp = await axios
//       .get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
//       .then((response) =>
//         response.data.map((t) => {
//           return t.temperament;
//         })
//       );
//     temp = temp.join().split(",");

//     temp = [...new Set(temp)];

//     temp = temp.map((t) => {
//       return {
//         name: t,
//       };
//     });

//     // try {
//     //   temp.map(async (data) => {
//     //     await Temperament.create({
//     //       name: data.name,
//     //     });
//     //   });
//     // } catch (error) {
//     //   res.json(error);
//     // }
//     const allTemperaments = await Temperament.bulkCreate(temp);
//     res.send(allTemperaments);
//     //res.json(temp);
//   } catch (error) {
//     res.json(error);
//   }
// };

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
    //separa y guarda lo que hay dentro de las posiciones del array
    temp = temp.join().split(",");
    temp = temp.filter((e) => e);
    //ordenar
    temp = [...new Set(temp)].sort();

    console.log(temp);
    //Guardar en la base de datos
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
