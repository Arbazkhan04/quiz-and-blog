const express = require ('express');
const Router = express.Router();

// Accquring MiddleWares
// const {AuthorizeAdmin} = require ('../middleWare/adminAuthorization')
// Accquring MiddleWares

// Accquring Controllers
const { AdminRegister , AdminLogin} = require ('../controller/adminManagementController')
// Accquring Controllers

// Define Routers
Router.post('/AdminRegister',AdminRegister) 
Router.post('/AdminLogin',AdminLogin)
// Define Routers

//Export
module.exports=Router