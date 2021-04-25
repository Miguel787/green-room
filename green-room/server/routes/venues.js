const router = require("express").Router();
const fs = require("fs");

const path = require("path").resolve(__dirname, "../data");

const yelp = require("yelp-fusion");

const apiKey = process.env.REACT_APP_BEARER_TOKEN;

("use strict");

const searchRequest = {
  term: "live music",
  location: "new orleans",
};

const client = yelp.client(apiKey);
router.get("/", async (req, res) => {
  const response = await client.search(searchRequest);
  res.json(response.jsonBody.businesses);
});

module.exports = router;
