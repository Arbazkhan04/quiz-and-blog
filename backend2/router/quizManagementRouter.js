const express=require('express')
const Router=express.Router();


// calling my controller 
const {createQuiz,getAllQuestion,getQuestionById,appendQuiz,updateQuiz,DeleteProductById}=require('../controller/quizManagementController')
// calling my controller 

// callig my http method 
Router.post('/quiz',createQuiz);
Router.get('/getAllQuestion',getAllQuestion);
Router.get('/getQuestionById/:id',getQuestionById);
Router.post('/updateQuiz/:id/:objectId',updateQuiz)
Router.post('/appendQuiz/:id',appendQuiz)
Router.delete('/DeleteProductById',DeleteProductById)
// callig my http method 

// exproting my router 
module.exports=Router