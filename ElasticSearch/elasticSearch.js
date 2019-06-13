/******************************************************************************
 *  @Execution      : default node          : cmd> nodemon elasticSearch.js
 *                      
 * 
 *  @Purpose        : Elastic search Search the data from the index 
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

//search data
client.search(
  {
    index: 'details',
    type: 'constituencies',
    body: {
      query: {
        match: { "First Name": "Andi" }
      },
    }
  },
  function (error, response, status) {
    if (error) {
      console.log("search error: " + error)
    }
    else {
      console.log("--- Response ---");
      console.log(response);
      console.log("\n----- full details ----- ");
      response.hits.hits.forEach(function (hit) {
        console.log("\nDetails : ", hit);
      })
    }
  });