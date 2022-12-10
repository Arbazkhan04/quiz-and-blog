const express=require('express')
const Router=express.Router();


// calling my controller 
const {quiz}=require('../controller/quizManagementController')
// calling my controller 

// callig my http method 
Router.get('/quiz',quiz)
// callig my http method 

// exproting my router 
module.exports=Router