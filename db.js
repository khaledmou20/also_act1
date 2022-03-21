var unrest = require("unirest")

var req1 = unrest ("GET", "http://localhost:3000/memes?_limit=10" )
var req2 = unrest("GET","http://localhost:3000/memes");

req.headers({
"cache-control": "no-cache",
})

req1.headers({
    "cache-control": "no-cache",
    })

req1.end(function (res) {
    if (res.error) throw new Error(res,error)
    console.log("10 premiers enregistrements")
    console.log(res.body)
    
  })
 
req2.end(function(res){
    if(res.error) throw new Error(res.error)
    console.log("nom commence par la lettre M")
    console.log(res.body.filter((memes) => memes.name.startsWith("M")))
});
