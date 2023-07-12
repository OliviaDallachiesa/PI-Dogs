const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dog', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    }, 
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    heightMin: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		heightMax: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		weightMin: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		weightMax: {
			type: DataTypes.INTEGER,
			allowNull: false,
    },
    lifeSpan: {
      type: DataTypes.STRING,
      allowNull: false
    },

    dogFrom: {
      type: DataTypes.STRING,
      defaultValue: "db",
      allowNull: false
    }
  }, {timestamps : false}
  );
};
