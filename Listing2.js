var unirest = require("unirest")
var jp = require('jsonpath');
var req =  unirest("GET", "http://localhost:3000/authors")

req.headers({
    "cache-control": "no-cache",
})

req.end(function(res){
    var authors = res.body;
    var authorsFirstTen = jp.query(cities, '$[:10]');
    var authorsFirstTenNames = jp.query(cities, '$[:10].name');
    expect(authorsFirstTen.length).to.eql(10);
    expect(authorsFirstTenNames.length).to.eql(10);
    expect(citiesFirstThreeNames).to.eql(['Rancho Palos Verdes',
    'San Pedro', 'Rosarito'
    ]);
    done();
    if (res.error) throw new Error (res.error)
    console.log(res.body)
})
