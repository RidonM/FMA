const express = require("express");
const movieController = require("./controllers/movieController");

const app = express();

app.use("/movies", movieController);

app.listen(8585);
