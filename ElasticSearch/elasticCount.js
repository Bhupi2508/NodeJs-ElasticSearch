/******************************************************************************
 *  @Execution      : default node          : cmd> nodemon elasticCount.js
 *                      
 * 
 *  @Purpose        : Elastic search count the data
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

//count the data which is in index
client.count(
  {
    index: 'project',
    type: 'constituencies'
  },
  function (err, resp, status) {
    console.log("constituencies count : ", resp);
  });