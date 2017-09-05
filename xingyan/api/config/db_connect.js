var config=require('./db_config'),
    mysql=require('mysql'),
    pool=mysql.createPool(config.dev_db),//创建连接池
    query=function(sql,callback){
        pool.getConnection((err,connection)=>{
            if(err){
                callback(err,null,null);
            }else{
                connection.query(sql,(error,rows,fields)=>{
                    connection.release();//释放资源
                    callback(error,rows,fields);
                })
            }
        })
    }
    module.exports=query;
