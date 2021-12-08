const express = require('express');
const routes = express.Router();
routes.get('/',(request,response)=>{
    response.send("Welcome to the Home Page");
});
routes.post('/register', async (request,response)=>{
    let userObject = request.body;
    const userOperations = require('../db/services/userOperations');
    let result = await userOperations.register(userObject);
    // response.json({message:result});
    if(result && result._id){
        response.status(200).json({message:'Record added successfully'});
    }
    else{
        response.status(200).json({message:'Record not added'});
    }
});
routes.post('/login', async (request,response)=>{
    let userObject = request.body;
    const userOperations = require('../db/services/userOperations');
    let result = await userOperations.login(userObject);
    // response.json({message:result});
    if(result && result._id){
        if(result.role==="admin")
        {
            response.status(200).json({message:'Welcome Admin '+result.name});
        }
        else{
            response.status(200).json({message:'Welcome '+result.name});
        }
    }
    else{
        response.status(200).json({message:'Invalid User ID or Password'});
    }
    // response.status(200).json({message:result});
});
module.exports = routes;