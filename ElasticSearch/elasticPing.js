/******************************************************************************
 *  @Execution      : default node          : cmd> nodemon elasticPing.js
 *                      
 * 
 *  @Purpose        : Elastic search ping the data from Index
 * 
 *  @description    : Using ElasticSearch we can search anything from DataBase 
 * 
 *  @overview       : ElasticSearch connections
 *  @author         : Bhupendra Singh <bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 08-jun-2019
 *
 ******************************************************************************/
/**
 * @requires files
 */
var client = require('./elastic');

// ping the client to be sure Elasticsearch is up
client.cluster.health({},
  function (err, resp, status) {
    if (err) {
      console.error('Elasticsearch cluster is down!');
    }
    console.log("-- Client Health --ok : ", resp);
  });
