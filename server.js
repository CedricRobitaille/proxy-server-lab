const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const env = require("dotenv");
env.config()

app.get("/", async (req, res) => {
  const apiResponse = await fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${req.query.city}`)
  const data = await apiResponse.json();
  console.log(data);
  res.json(data)
})

app.listen(3000, () => {
  console.log("listening on port 3000");
})