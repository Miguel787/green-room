const router = require("express").Router();
const fs = require("fs");
const { check, validationResult } = require("express-validator");
const path = require("path").resolve(__dirname, "../data");
const { v4: uuidv4 } = require("uuid");

router.get("/", (req, res) => {
  const venueList = (filePath) => {
    let data = fs.readFileSync(filePath);
    return JSON.parse(data);
  };
  let list = venueList(`${path}/`);
  res.send(list);
});
