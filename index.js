
const express = require('express');
const path = require("path");
const jquery = require('jquery');
const drawCardController = require("./controllers/drawCardController.js");
require('dotenv').config();
const PORT = process.env.PORT || 5000;


var app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json()); //support json encoded
app.use(express.urlencoded({extended: true}));

app.get("/getLowCardA", drawCardController.getLowCardA);
app.get("/getLowCardB", drawCardController.getLowCardB);
app.get("/getLowCardC", drawCardController.getLowCardC);

app.get("/getHighCardA", drawCardController.getHighCardA);
app.get("/getHighCardB", drawCardController.getHighCardB);
app.get("/getLowPlot", drawCardController.getLowPlot);
app.get("/getHighPlot", drawCardController.getHighPlot);
app.get("/getPlotHighCards", drawCardController.getPlotHighCards);

app.listen(PORT, function() {
  console.log ("Server listening on port " + PORT);
});