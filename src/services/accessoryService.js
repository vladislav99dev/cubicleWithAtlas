const Accessory = require("../models/Accessory");

const create = (name, description, imageUrl) => {
  return Accessory.create({ name, description, imageUrl });
};

const accessoryService = {
  create,
};

module.exports = accessoryService;
