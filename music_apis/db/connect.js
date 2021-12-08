// DB Connection
const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://vishakha:12345678break@cluster0.zz8ml.mongodb.net/musicdb?retryWrites=true&w=majority',
mongoose.connect(process.env.DB_URL,
{poolSize:5}, (err=>{
    if(err){
        console.log('Problem in DB Connection');
    }
    else{
        console.log('DB Connection created...');
    }
}));
module.exports = mongoose;