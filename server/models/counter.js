let mongoose = require('mongoose'); 

let countermodel = mongoose.Schema({
    nameOfFood: String,
    qtyInGrams: Number,
    calories: Number,
    typeOfNutriet: String
    }, 
    {
        collection: "caloriesCounter"
    }
);
module.exports = mongoose.model('CaloriesCounter', countermodel);

