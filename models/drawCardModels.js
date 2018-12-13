const { Pool } = require("pg");
const db_url =process.env.DATABASE_URL;

const pool = new Pool({connectiionString: db_url});

//Still working on
function getLowPlotByID(id,callback){
    var sql ="SELECT id, plotName, plotReading FROM lowPlotPoints WHERE id='" + id + "'";
    console.log(sql);
    pool.query(sql, function(err, db_results){
        if(err){
            throw err;
        }else {
            data here
            console.log(db_results);
            
            var results ={
                success:true,
                list:db_results.rows
            };
            callback(null, results);
        }
    });

}

function getHighPlotByID(id,callback){
    var sql ="SELECT id, plotName, plotReading FROM highPlotPoints WHERE id='" + id + "'";
    pool.query(sql, function(err, db_results){
        if(err){
            throw err;
        }else {
            data here
            console.log(db_results);
            
            var results ={
                success:true,
                list:db_results.rows
            };
            callback(null, results);
        }
    });
}

function getLowCardByID(id, callback){

    var sql ="SELECT id, cardName, cardReading FROM lowCards WHERE id='" + id + "'";
    pool.query(sql, function(err, db_results){
        if(err){
            throw err;
        }else {
            data here
            console.log(db_results);
            
            var results = {
                success:true,
                list:db_results.rows,
            };
            callback(null, results);
        }
    });
}

function getHighCardByID(id,callback){
    
    var sql ="SELECT id, cardName FROM highCards WHERE id='" + id + "'";
    pool.query(sql, function(err, db_results){
        if(err){
            throw err;
        }else {
            data here
            console.log(db_results);
    
            var results = {
                success:true,
                list:db_results.rows,
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
