const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Trips extends Model {}

Trips.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  trip_budget: {
    type: DataTypes.DECIMAL,
  },
  traveller_amount: {
    type: DataTypes.INTEGER,
  },
  traveller_id: {
    type: DataTypes.INTEGER,
    unique: false,
    references: {
      model: "traveller",
      key: "id",
    },
    location_id: {
      type: DataTypes.INTEGER,
      unique: false,
      references: {
        model: "location",
        key: "id",
      },
    },
  },
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: "trips",
});

module.exports = Trips;
