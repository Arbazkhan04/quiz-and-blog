const express=require('express')
const Router=express.Router();


// calling my controller 
const {quiz,getAllQuestion,getQuestionById,updateQuiz,DeleteProductById}=require('../controller/quizManagementController')
// calling my controller 

// callig my http method 
Router.post('/quiz',quiz);
Router.get('/getAllQuestion',getAllQuestion);
Router.get('/getQuestionById/:id',getAllQuestion);
Router.post('/updateQuiz/:id',updateQuiz)
Router.delete('/DeleteProductById',DeleteProductById)
// callig my http method 

// exproting my router 
module.exports=Router