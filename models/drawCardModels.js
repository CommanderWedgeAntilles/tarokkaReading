const { Pool } = require("pg");
const db_url =process.env.DATABASE_URL;

const pool = new Pool({connectiionString: db_url});

//Still working on
function getLowPlotByID(id,callback){
    var results;
    callback(results);
}

function getHighPlotByID(id,callback){
    var results;
    callback(results);
}

function getLowCardByID(id,plotID,callback){
    var plot = getLowPlotByID(plotID,function(results){res.json(results);});
    var results = {
        fortune: [

        ]
    };
    callback(results);
}
function getHighCardByID(id,plotID,callback){
    var plot = getHighPlotByID(plotID,function(results){res.json(results);});
    var results ={
        fortune: [
        
        ]
    };
    callback(results);

}

module.exports ={
    getLowPlotByID: getLowPlotByID,
    getHighPlotByID: getHighPlotByID,
    getLowCardByID: getLowCardByID,
    getHighCardByID: getHighCardByID
}

