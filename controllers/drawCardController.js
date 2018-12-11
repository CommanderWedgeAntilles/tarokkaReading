const drawCardModels = require("../models/drawCardModels.js")

function getLowCardA(req,res){
    //get one low card from the deck
    console.log("Getting requested low card");
    var results = drawCardModels.getLowCardByID(id,1,function(results){res.json(results);});
    
  }
  function getLowCardB(req,res){
    //get one low card from the deck
    console.log("Getting requested low card");
    var results = drawCardModels.getLowCardByID(id,2,function(results){res.json(results);});
  }
  function getLowCardC(req,res){
    //get one low card from the deck
    console.log("Getting requested low card");
    var results = drawCardModels.getLowCardByID(id,3,function(results){res.json(results);});
  }

  function getHighCardA(req,res){
    //get one highcard from the deck
    var id = req.query.id;
    var results = drawCardModels.getHighCardByID(id,1,function(results){res.json(results);});
  }

  function getHighCardB(req,res){
    //get one highcard from the deck
    var id = req.query.id;
    var results = drawCardModels.getHighCardByID(id,2,function(results){res.json(results);});
  }


  module.exports = {
      getLowCardA: getLowCardA,
      getHighCardA: getHighCardA,
      getLowCardB: getLowCardB,
      getHighCardB: getHighCardB,
      getLowCardC: getLowCardC

  };