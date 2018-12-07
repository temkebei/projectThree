const express = require('express');
const mongoose = require('mongoose');
const db = require("./models")
const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(express.static("public"));

//'mongodb://localhost/recipe_db'
//process.env.MONGODB_URI,
mongoose.connect('mongodb://localhost/recipe_db', {
  useNewUrlParser: true
});
// mongoose.connect('mongodb://localhost/data', { useNewUrlParser: true });
// mongoose.connect('mongodb://localhost/users', { useNewUrlParser: true });
require('./routes/api-routes')(app);
app.listen(PORT, function () {
  console.log(`App running on port ${PORT}`);

//   db.recipes.create({
//     image:"/image/african1.jpg",
//        recipe_name: 'Soup & Fufu',
//        ingredients:"cow skin, egussi, okra", 
//        directions: "cooked till is well done"
// }).then(function(response) {

// });
// db.recipes.create({
//   image:"/image/BaconWrapped.jpg",
//      recipe_name: 'Bacon Wrapped',
//      ingredients:"Bacon, egg, cheese", 
//      directions: "slow cook in the oven"
// }).then(function(response) {

// });
// db.recipes.create({
// image:"/image/cajun.jpg",
//    recipe_name: 'mix continental',
//    ingredients:"mixture of everything", 
//    directions: "cooked till is well done"
// }).then(function(response) {

// });
// db.recipes.create({
// image:"/image/african.jpg",
//    recipe_name: 'fried plantain and lamb',
//    ingredients:"plantian, lamb,spices", 
//    directions: "cooked till is well done"
// }).then(function(response) {

// });
// db.recipes.create({
// image:"/image/HotSpinachDip.jpg",
//    recipe_name: 'Spinach Dip',
//    ingredients:"mix everything", 
//    directions: "cooked till is well done"
// }).then(function(response) {

// });
// db.recipes.create({
// image:"/image/steak.jpg",
//    recipe_name: 'Steak',
//    ingredients:"wonderful and delicious", 
//    directions: "cooked till is well done"
// }).then(function(response) {

// });
// db.recipes.create({
// image:"/image/mainpage.jpg",
//    recipe_name: 'mix continental',
//    ingredients:"mixture of everything", 
//    directions: "cooked till is well done"
// }).then(function(response) {

// });
// db.recipes.create({
// image:"/image/fruits.jpg",
//    recipe_name: 'mix Fruits',
//    ingredients:"great fruit to keep you going", 
//    directions: "hand picked from the farm."
// }).then(function(response) {

// });
// db.recipes.create({
// image:"/image/diet.jpg",
//    recipe_name: 'mix healthy fruit',
//    ingredients:"mix fruits", 
//    directions: "fresh from the farm"
// }).then(function(response) {
// });
  
});