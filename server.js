var cheerio = require("cheerio");
var request = require("request");

request("https://www.nytimes.com/", function(error, response, html) {


  var $ = cheerio.load(html);

  
  var results = [];


  $("h2.story-heading").each(function(i, element) {

    var title = $(element).children().text();

    results.push({
      title: title,
  
    });
  
  
  });

  // $("p.AssetContent").each(function(j, ){
  //   var
  // })

 

  //Built an array to push my results from the summary into. Unfortunately I haven't been able to able to get the correct response back from the url.
  var summaryArr = [];


  $("p.summary").each(function(i, stuff) {

    var summary = $(stuff).children().text();

    summaryArr.push({
      summary: summary,
  
    });
  
  
  });

  //console.log(results);
  console.log(summaryArr);
});