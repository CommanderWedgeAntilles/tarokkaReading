const { Pool } = require("pg");
const db_url =process.env.DATABASE_URL;

const pool = new Pool({connectiionString: db_url});



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

function getPlotHighCardsByIDs(plotID,cardID,callback){
    var sql ="SELECT cardReading FROM plotHighCards WHERE plotID=$1 AND cardID=$2;";
    console.log(sql);
    var params =[plotID,cardID];
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
