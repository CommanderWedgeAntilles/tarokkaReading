const { Pool } = require("pg");
const db_url =process.env.DATABASE_URL;

const pool = new Pool({connectiionString: db_url});



function getLowPlotByID(id,callback){
    var sql ="SELECT plotName, plotReading FROM lowPlotPoints WHERE id=" + id + ";";
    console.log(sql);
    pool.query(sql, function(err, db_results){
        if(err){
            throw err;
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
    var sql ="SELECT plotName, plotReading FROM highPlotPoints WHERE id=" + id + ";";
    console.log(sql);
    pool.query(sql, function(err, db_results){
        if(err){
            throw err;
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

    var sql ="SELECT cardName, cardReading FROM lowCards WHERE id=" + id + ";";
    console.log(sql);
    pool.query(sql, function(err, db_results){
        if(err){
            throw err;
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
    
    var sql ="SELECT cardName FROM highCards WHERE id=" + id + ";";
    console.log(sql);
    pool.query(sql, function(err, db_results){
        if(err){
            throw err;
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
    var sql ="SELECT cardReading FROM plotHighCards WHERE plotID=" + plotID + " AND cardID=" + cardID +";";
    console.log(sql);
    pool.query(sql, function(err, db_results){
        if(err){
            throw err;
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
