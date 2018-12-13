const drawCardModels = require("../models/drawCardModels.js");
function getLowCardA(req,res){
    //get one low card from the deck
    console.log("Getting requested low card");
    var id = req.query.id;
    drawCardModels.getLowCardByID(id,function(error, results){res.json(results);});
    
  }
  function getLowCardB(req,res){
    //get one low card from the deck
    console.log("Getting requested low card");
    var id = req.query.id;
    drawCardModels.getLowCardByID(id,function(error, results){res.json(results);});
  }
  function getLowCardC(req,res){
    //get one low card from the deck
    console.log("Getting requested low card");
    var id = req.query.id;
    drawCardModels.getLowCardByID(id,function(error, results){res.json(results);});
  }

  function getHighCardA(req,res){
    //get one highcard from the deck
    var id = req.query.id;
    drawCardModels.getHighCardByID(id,function(error, results){res.json(results);});
  }

  function getHighCardB(req,res){
    //get one highcard from the deck
    var id = req.query.id;
    drawCardModels.getHighCardByID(id,function(error, results){res.json(results);});
  }

  function getLowPlot(req,res){
    //get one highcard from the deck
    var id = req.query.id;
    drawCardModels.getLowPlotByID(id,2,function(error, results){res.json(results);});
  }
  function getHighPlot(req,res){
    //get one highcard from the deck
    var id = req.query.id;
    drawCardModels.getHighPlotByID(id,function(error, results){res.json(results);});
  }



  module.exports = {
      getLowCardA: getLowCardA,
      getLowCardB: getLowCardB,
      getLowCardC: getLowCardC,
      getHighCardA: getHighCardA,
      getHighCardB: getHighCardB,
      getLowPlot:getLowPlot,
      getHighPlot:getHighPlot


  };