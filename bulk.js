/******************************************************************************
 *  @Execution      : default node          : cmd> nodemon bulk.js
 *                      
 * 
 *  @Purpose        : Elastic search Search the data from the index 
 * 
 *  @description    : Using ElasticSearch we can search anything from ElasticSearch DataBase 
 * 
 *  @overview       : ElasticSearch connections
 *  @author         : Bhupendra Singh <bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 30-sept-2019
 *
 ******************************************************************************/
/**
 * @requires files
 */
var client = require('./elastic');

// client.bulk({
//     index: 'gov',
//     type: 'constituencies',
//     body: myBody
// })

// var client = require('./connection.js');
var inputfile = require('../ElasticSearch/data.json');
var bulk = [];

var makebulk = function(constituencylist,callback){
  for (var current in constituencylist){
    bulk.push(
      { index: {_index: 'quest.entl', _type: 'applications', _id: constituencylist[current].PANO } },
      {
        'key': constituencylist[current].key,
        'name': constituencylist[current].name,
        'type': constituencylist[current].type,
        'status': constituencylist[current].status,
        // 'validvotes': constituencylist[current].ValidVotes,
        // 'regionID': constituencylist[current].RegionID,
        // 'county': constituencylist[current].County,
        // 'region': constituencylist[current].Region,
        // 'country': constituencylist[current].Country
      }
    );
  }
  callback(bulk);
}

var indexall = function(madebulk,callback) {
  client.bulk({
    maxRetries: 5,
    index: 'quest.entl',
    type: 'applications',
    body: madebulk
  },function(err,resp,status) {
      if (err) {
        console.log(err);
      }
      else {
        callback(resp.items);
      }
  })
}

makebulk(inputfile,function(response){
  console.log("Bulk content prepared");
  indexall(response,function(response){
    console.log(response);
  })
});