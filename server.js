var cheerio = require("cheerio");
var request = require("request");

request("https://www.mlb.com/news/t-238068548", function(error, response, html) {


  var $ = cheerio.load(html);

  
  var results = [];


  $("h2.article-item_headline").each(function(i, element) {

    var link = $(element).children().attr("href");
    var title = $(element).children().text();

    results.push({
      title: title,
      link: link
    });
  });

  console.log(results);
});