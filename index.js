const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "*");

  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.get("/*", async (req, res) => {
  let response = await axios.get(`http://${req.path}`, {
    headers: req.headers,
    validateStatus: function (status) {
      return (status >= 200 && status < 300) || status === 304; // Разрешаем успешные статусы и 304
    },
  });
  res.status(response.status).json(response.data);
});

app.post("/*", async (req, res) => {
  let response = await axios.post(`http://${req.path}`, req.body, {
    headers: req.headers,
    validateStatus: function (status) {
      return (status >= 200 && status < 300) || status === 304; // Разрешаем успешные статусы и 304
    },
  });
  res.status(response.status).json(response.data);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  try {
    console.log(`Redirector started on port ${PORT}.`);
  } catch (err) {
    console.error(err);
  }
});
