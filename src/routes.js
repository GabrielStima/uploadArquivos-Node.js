const routes = require("express").Router();
const multer = require("multer");
const multerConfig = require("./config/multer");

routes.get("/", (request, response) => {
  return response.json({ hello: "World" });
});
routes.post("/", multer(multerConfig).single("file"), (request, response) => {
  console.log(request.file);
  return response.json({ hello: "World" });
});
module.exports = routes;
