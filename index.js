const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET", "POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type,Authorization"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.get("/*", async (req, res) => {
  try {
    console.log(req.headers);
    let response = await axios.get(`http://${req.path}`, {
      headers: req.headers,
    });
    res.status(response.status).json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ redirect_error: true });
  }
});

app.post("/*", async (req, res) => {
  try {
    console.log(req.headers);
    let response = await axios.post(`http://${req.path}`, req.body, {
      headers: req.headers,
    });
    res.status(response.status).json(response.data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ redirect_error: true });
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
