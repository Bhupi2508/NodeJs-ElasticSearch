/******************************************************************************
 *  @Execution      : default node          : cmd> nodemon elasticDeleteIndex.js
 *                      
 * 
 *  @Purpose        : Elastic search de;lete data 
 * 
 *  @description    : Using ElasticSearch we can search anything from DataBase 
 * 
 *  @overview       : ElasticSearch connections
 *  @author         : Bhupendra Singh <bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 13-jun-2019
 *
 ******************************************************************************/
/**
 * @requires files
 */
var client = require('./elastic');

//delete the index tjhat is already present
client.indices.delete(
    {
        index: 'project'
    },
    function (err, resp, status) {
        console.log("delete : ", resp);
    });