let express = require('express'); 
let router = express.Router(); 
let mongoose = require('mongoose'); 
//connect with the calories counter
let CaloriesCounter = require('../models/counter'); 

//showing the calories
module.exports.displayCalories = (req,res,next)=>{
    CaloriesCounter.find((err, caloriesCounter)=>{
        if(err){
            return console.error(err); 
        }
        else
        {
            res.render('calorieFolder/counter', {
            title: 'Calories Counter',
            caloriesList:caloriesCounter})
        }
    });
}

//display the add page
module.exports.displayAddPage = (req,res,next)=> {
    res.render('calorieFolder/add',{title:"Add Food"})
}

//process the add page
module.exports.processAddPage = (req,res,next)=> {
    let newFood = CaloriesCounter ({
        "nameOfFood": req.body.nameOfFood,
        "qtyInGrams": req.body.qtyInGrams,
        "calories": req.body.calories,
        "typeOfNutriet": req.body.typeOfNutriet
    });
    CaloriesCounter.create(newFood,(err,CaloriesCounter) => {
        if (err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/caloriesCounter')
        }
    })
}

//shows the edit page
module.exports.displayEditPage = (req,res,next)=> {
    let id = req.params.id; 
    CaloriesCounter.findById(id,(err,foodToEdit)=> {
        if (err){
            console.log(err);
            res.end(err);
        }
        else{
            res.render('calorieFolder/edit',{title: 'This is the edit page', caloriesCounter:foodToEdit}); 
        }
    });
}

module.exports.processEditPage = (req,res,next)=> {
    let id =req.params.id;
    let updatedFood = CaloriesCounter({
        "_id":id,
        "nameOfFood": req.body.nameOfFood,
        "qtyInGrams": req.body.qtyInGrams,
        "calories": req.body.calories,
        "typeOfNutriet": req.body.typeOfNutriet
    }); 
    CaloriesCounter.updateOne({_id:id}, updatedFood, (err)=>{
        if (err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/caloriesCounter')
        }
    })
}

module.exports.processDeletePage = (req,res,next)=> {
    let id = req.params.id; 
    CaloriesCounter.deleteOne({_id:id}, (err)=> {
        if (err){
            console.log(err);
            res.end(err);
        }
        else{
            res.redirect('/caloriesCounter')
        }
    })
}