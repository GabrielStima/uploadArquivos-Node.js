const express = require("express");
// const { errors } = require("celebrate");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./routes");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(routes);
// app.use(errors());

module.exports = app;
