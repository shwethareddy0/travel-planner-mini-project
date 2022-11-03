const Traveller = require("./Traveller");
const Trips = require("./Trips");
const Location = require("./Location");

Traveller.belongsToMany(Location, { through: Trips, unique: false });
Location.belongsToMany(Traveller, { through: Trips, unique: false });

module.exports = { Traveller, Location, Trips };
