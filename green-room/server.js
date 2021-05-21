const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
app.use(cors());
app.use(express.json());
const venuesRoutes = require("./server/routes/venues");

app.use("/api/venues", venuesRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", (req, res) => {
    req.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

app.listen(port, () => {
  console.log(`Express is running on port 8080`);
});
