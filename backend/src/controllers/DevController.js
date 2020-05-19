const axios = require("axios");
const parseStringAsArray = require("../utils/parseStringAsArray");
const Dev = require("../models/Dev");

module.exports = {
  async index(req, res) {
    const dev = await Dev.find();
    return res.json(dev);
  },

  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      const location = {
        type: "Point",
        coordinates: [longitude, latitude]
      };

      const apiResponse = await axios.get(
        `https://api.github.com/users/${github_username}`
      );

      const { name = login, avatar_url, bio } = apiResponse.data;

      const techsArray = parseStringAsArray(techs);

      dev = await Dev.create({
        name,
        github_username,
        avatar_url,
        bio,
        techs: techsArray,
        location
      });
    }
    return res.json(dev);
  }
};
