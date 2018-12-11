const express = require('express');
const path = require("path");
const jquery = require('jquery');
const drawCardController = require("./controllers/drawCardController.js");

const PORT = process.env.PORT || 5000;


var app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json()); //support json encoded
app.use(express.urlencoded({extended: true}));

app.get("/lowCardA", drawCardController.getLowCardA);
app.get("/lowCardB", drawCardController.getLowCardB);
app.get("/lowCardC", drawCardController.getLowCardC);

app.get("/highCardA", drawCardController.getHighCardA);
app.get("/highCardB", drawCardController.getHighCardB);


app.get("/", function(req,res){

});

app.listen(PORT, function() {
  console.log ("Server listening on port " + PORT);
});

// var router = express.Router();
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;
