/******************************************************************************
 *  @Execution      : default node          : cmd> nodemon elastic.js
 *                      
 * 
 *  @Purpose        : Elastic search 
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
 * @requires, the Elasticsearch librray
 */
var elasticsearch = require('elasticsearch');

// instantiate an Elasticsearch client
var client = new elasticsearch.Client(
    {
        host: 'localhost:9200',
        log: 'trace',
        keepAlive: false
    }
);

console.log('#####################################################################################');
console.log('##############                 Elastic Search Connected                ##############');
console.log('#####################################################################################');

/**
 * @exports client
 */
module.exports = client;  