const { Students } = require("../models");

exports.getAllStudents = async (req, res) => {
  try {
    const result = await Students.findAll();
    if (result) {
      return res.status(200).send(result);
    }
    return res.status(400).send("Can't find Students");
  } catch (er) {
    console.error(er);
  }
};
