/******************************************************************************
 *  @Execution      : default node          : cmd> nodemon elasticDeleteData.js
 *                      
 * 
 *  @Purpose        : Elastic search Delete data 
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

//Delele the data from index
client.delete(
  {
    index: 'project',
    id: '1',
    type: 'constituencies'
  },
  function (err, resp, status) {
    console.log("Delete data from index : ", resp);
  });