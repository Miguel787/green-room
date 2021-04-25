const express = require("express");
require("dotenv").config();
const app = express();
const port = 8080;
const cors = require("cors");
app.use(cors());
app.use(express.json());
const venuesRoutes = require("./server/routes/venues");

app.use("/api/venues", venuesRoutes);

app.listen(port, () => {
  console.log(`Express is running on port 8080`);
});
