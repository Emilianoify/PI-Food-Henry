const {Sequelize, DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    healthScore: {
      type: DataTypes.FLOAT
    },
    steps:{
      type: DataTypes.ARRAY(DataTypes.JSON)
    },
    image:{
      type: DataTypes.STRING,
      defaultValue: "https://static.bonviveur.es/tags/recetas-cocina-internacional.jpg"
    }
  },
  {timestamps: false});
};
