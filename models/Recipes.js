const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for Recipes table 
var RecipesSchema = new Schema({
    image: {
        type: String,
        trim: true,
    },
    recipe_name: {
        type: String,
        trim: true,
    },

    ingredients: {
        type: String,
        trim: true,
    },


    instructions: {
        type: String,
        trim: true,
    },

});

const Recipes = mongoose.model('Recipes', RecipesSchema);

module.exports = Recipes;