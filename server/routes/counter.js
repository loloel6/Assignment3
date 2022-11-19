let express = require('express'); 
let router = express.Router(); 
let mongoose = require('mongoose'); 

//connect with the calories counter

let CaloriesCounter = require('../models/counter'); 
let calorieController = require('../controller/counter')
//Read operation

router.get('/',calorieController.displayCalories); 

// getting route to Adding the operation (Create)
router.get('/add',calorieController.displayAddPage); 

// post route to Adding the operation (Create)
router.post('/add',calorieController.processAddPage); 

//Edit operation (Update)
router.get('/edit/:id',calorieController.displayEditPage); 

//post edited 
router.post('/edit/:id',calorieController.processEditPage); 

//Delete operation
router.get('/delete/:id',calorieController.processDeletePage); 

module.exports=router; 