/******************************************************************************
 *  @Execution      : default node          : cmd> nodemon elasticAddData.js
 *                      
 * 
 *  @Purpose        : Elastic search add a new data 
 * 
 *  @description    : Using ElasticSearch we can search anything from ElasticSearch DataBase 
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

// add a data to the index that has already been created
client.index(
    {
        index: 'quest.pay',
        id: '1',
        type: 'checkingPurposes',
        body: {
            "DataName": "Elastic Data",
            "purpose": "CURD Operation",
            "Version": "1.1",
            "Using": "APIs"
        }
    },
    function (err, resp, status) {
        console.log("Add new data : ", resp);
    });