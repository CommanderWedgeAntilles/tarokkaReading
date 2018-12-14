const { Pool } = require("pg");
const db_url = process.env.DATABASE_URL;
console.log(db_url);

const pool = new Pool({connectionString: db_url});



function getLowPlotByID(id,callback){
    var sql ="SELECT plotName, plotReading FROM lowPlotPoints WHERE id=$1;";
    console.log(sql);
    var params =[id];
    pool.query(sql, params, function(err, db_results){
        if(err){
            console.log("In error");
            console.log(err);
            callback(err,null);
        }else {
            //data here;
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
    var sql ="SELECT plotName, plotReading FROM highPlotPoints WHERE id=$1;";
    console.log(sql);
    var params =[id];
    pool.query(sql, params, function(err, db_results){
        if(err){
            callback(err,null);
        }else {
            //data here
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

    var sql ="SELECT cardName, cardReading FROM lowCards WHERE id=$1;";
    console.log(sql);
    var params =[id];
    pool.query(sql, params, function(err, db_results){
        if(err){
            callback(err,null);
        }else {
            //data here
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
    
    var sql ="SELECT cardName FROM highCards WHERE id=$1;";
    console.log(sql);
    var params = [id];
    pool.query(sql, params, function(err, db_results){
        if(err){
            callback(err,null);
        }else {
            //data here
            console.log(db_results);
    
            var results = {
                success:true,
                list:db_results.rows,
            };
            callback(null, results);
        }
    });

}

function getPlotHighCardsByIDs(highCardID,callback){
    var sql ="SELECT plotID, cardReading FROM plotHighCards WHERE highCardID=$1;";
    console.log(sql);
    var params = [highCardID];
    console.log(params);
    pool.query(sql, params, function(err, db_results){
        if(err){
            callback(err,null);
        }else {
            //data here
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
    getHighCardByID: getHighCardByID,
    getPlotHighCardsByIDs: getPlotHighCardsByIDs
}
