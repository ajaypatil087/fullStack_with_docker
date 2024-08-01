const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).end("Hello from the Sever");
});

require("./routes/departments.route")(app);
require("./routes/students.route")(app);

app.listen(8080, () => {
  console.log(`server running at port ${8080}`);
});
