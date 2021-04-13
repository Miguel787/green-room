const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.listen(8080, () => {
  console.log(`Express is running on port 8080`);
});
