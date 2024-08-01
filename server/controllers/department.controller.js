const { Departments } = require("../models");

exports.getAllDepartment = async (req, res) => {
  try {
    const result = await Departments.findAll();
    return res.status(200).send(result);
  } catch (er) {
    console.error(er);
  }
};
