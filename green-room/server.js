const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
app.use(cors());
app.use(express.json());
const venuesRoutes = require("./server/routes/venues");

app.use("/venues", venuesRoutes);

app.listen(port, () => {
  console.log(`Express is running on port 8080`);
});
