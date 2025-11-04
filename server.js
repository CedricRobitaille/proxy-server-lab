const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${req.query.city}`)
  const data = await response.json();
  console.log(data);
  res.json(data)
})

app.listen(3000, () => {
  console.log("listening on port 3000");
})