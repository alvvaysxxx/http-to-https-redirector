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
  try {
    let response = await axios.get(`http:/${req.path}`, {
      headers: req.headers,
      validateStatus: function (status) {
        return (status >= 200 && status < 300) || status === 304; // Разрешаем успешные статусы и 304
      },
    });
    console.log(response.data);
    return res.status(200).json(response.data);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: true });
  }
});

app.post("/*", async (req, res) => {
  try {
    let response = await axios.post(`http:/${req.path}`, req.body, {
      headers: req.headers,
      validateStatus: function (status) {
        return (status >= 200 && status < 300) || status === 304; // Разрешаем успешные статусы и 304
      },
    });
    console.log(response.data);
    return res.status(200).json(response.data);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: true });
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  try {
    console.log(`Redirector started on port ${PORT}.`);
  } catch (err) {
    console.error(err);
  }
});
