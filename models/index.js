const Traveller = require("./Traveller");
const Trips = require("./Trips");
const Location = require("./Location");

Traveller.belongsToMany(Location, { through: Trips });
Location.belongsToMany(Traveller, { through: Trips });

module.exports = { Traveller, Location, Trips };
