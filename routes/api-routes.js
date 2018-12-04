const db = require("../models");

 
module.exports = function (app) {

  //route to get all my recipes
  app.get('/api/Recipes', function (req, res) {
    db.Recipes.find({})
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

  ///to get a single recipe
  app.get('/api/Recipes/:id', function(req,res){
    db.Recipes.find({_id:req.params.id}).then(function(data){
      res.json(data)
    }) .catch(function(error){
    res.json(error);
    });
  });
    
  //post route to post a new Recipe

  app.post('/api/Recipes', function (req, res) {
    db.Recipes.create(req.body)
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
        res.json(err);
      });
  });

//put route to update a Recipe
app.put('/api/Recipes/:id', function (req, res) {
  db.Recipes.Update({_id: req.params.id}, req.body, {returnOriginal: false})
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
});
  
//delete route to delete a one Recipe
  app.delete("/api/Recipes/:id", function (req,res){
    db.Recipes.deleteOne({_id:req.params.id}).then(function(data){
      res.json(data)
    }) .catch(function(error){
    res.json(error);
    });
  });
    
//route to post to users table 
app.post('/api/users', function (req, res) {
  console.log(req.body)
 db.users.create(req.body)
    .then(function (data) {
      res.json({"result":"success"});
    })
    .catch(function (err) {
      res.json(err);
    });
});
}