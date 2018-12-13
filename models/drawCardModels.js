const { Pool } = require("pg");
const db_url =process.env.DATABASE_URL;

const pool = new Pool({connectiionString: db_url});

//Still working on
function getLowPlotByID(id,callback){
    var sql ="SELECT id, plotName, plotReading FROM lowPlotPoints WHERE id=$1::number";
    var params = [id];
    pool.query(sql, params, function(err,db_results){
        if(err){
            throw err;
        }else {
            //data here
            console.log(db_results);
            
            var results;
            callback(null, results);
        }
    });

}

function getHighPlotByID(id,callback){
    var sql ="SELECT id, plotName, plotReading FROM highPlotPoints WHERE id=$1::number";
    var params = [id];
    pool.query(sql, params, function(err,db_results){
        if(err){
            throw err;
        }else {
            //data here
            console.log(db_results);
            
            var results;
            callback(null, results);
        }
    });
}

function getLowCardByID(id,plotID,callback){
    var plot = getLowPlotByID(plotID,function(results){res.json(results);});

    var sql ="SELECT id, cardName, cardReading FROM lowCards WHERE id=$1::number";
    var params = [id];
    pool.query(sql, params, function(err,db_results){
        if(err){
            throw err;
        }else {
            //data here
            console.log(db_results);
            
            var results = {
                fortune: [
        
                ]
            };

            callback(null, results);
        }
    });
}

function getHighCardByID(id,plotID,callback){
    var plot = getHighPlotByID(plotID,function(results){res.json(results);});
    
    var sql ="SELECT id, cardName FROM highCards WHERE id=$1::number";
    var params = [id];
    pool.query(sql, params, function(err,db_results){
        if(err){
            throw err;
        }else {
            //data here
            console.log(db_results);
    
            var results ={
                fortune: [
                
                ]
            };
            callback(null, results);
        }
    });

}

module.exports ={
    getLowPlotByID: getLowPlotByID,
    getHighPlotByID: getHighPlotByID,
    getLowCardByID: getLowCardByID,
    getHighCardByID: getHighCardByID
}
