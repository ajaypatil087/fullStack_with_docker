const { getAllDepartment } = require("../controllers/department.controller");

module.exports = (app) => {
  const router = require("express").Router();
  router.get("/", getAllDepartment);

  app.use("/api/department", router);
};
