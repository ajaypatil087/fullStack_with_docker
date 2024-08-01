const { getAllStudents } = require("../controllers/student.controller");
module.exports = (app) => {
  const router = require("express").Router();

  router.get("/", getAllStudents);

  app.use("/api/students", router);
};
