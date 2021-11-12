const { DataTypes } = require("sequelize");
//const temperament = require("../controllers/temperament");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  return sequelize.define(
    "temperament",
    {
      // id: {
      //   type: DataTypes.INTEGER,
      //   primaryKey: true,
      //   autoIncrement: true,
      // },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false, //we do not need updatedAt nor createdAt
      freezeTableName: true, //to avoid sequelize using plurals on our tables
    }
  );
};
