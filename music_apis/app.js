const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();  // App represents an application
app.use(cors());
app.use(express.json());
app.use('/',require('./routes/user'));
app.use('/',require('./routes/music'));
// app.get('/',(request,response)=>{
//     response.send("Hello Client, How are you ?");
// });
// app.get('/login',(request,response)=>{
//     response.send('Login Page');
// });

const server = app.listen(1234, (err)=>{
    if(err){
        console.log('Error is ',err);
    }
    else{
        console.log('Server started.... ',server.address().port);
    }
});