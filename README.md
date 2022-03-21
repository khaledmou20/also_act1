# also_act1

1 - pour afficher 10 premiers enregistrements on utilise  _limit=10:
      var req1 = unrest ("GET", "http://localhost:3000/memes?_limit=10" )
2 - pour afficher tout les enregistrements commence par M  on utilise : 
      console.log(res.body.filter((memes) => memes.name.startsWith("M")))
      });
3 -  la ligne Numéro 6 du Listing 2 signifier que la desactivation de cache dans le serveur origin 
