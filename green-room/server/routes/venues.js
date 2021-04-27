const router = require("express").Router();
const fs = require("fs");

const path = require("path").resolve(__dirname, "../data");

const yelp = require("yelp-fusion");

const apiKey = process.env.REACT_APP_BEARER_TOKEN;

("use strict");

const client = yelp.client(apiKey);
router.get("/:city", async (req, res) => {
  const searchRequest = {
    term: "live music",
    location: req.params.city,
  };
  const response = await client.search(searchRequest);
  res.json(response.jsonBody.businesses);
});

module.exports = router;
