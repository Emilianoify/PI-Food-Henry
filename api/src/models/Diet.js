const { DataTypes } = require('sequelize');

module.exports = sequelize => {
    sequelize.define('diet', {
         // defino el modelo
          name: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
          }
    } ,
  {timestamps: false});
}