const config = require('config');
const dbLink = config.get("db.local_link");
const mongoose=require('mongoose');


exports.mongooseConnect=()=>{
    mongoose.connect(dbLink,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        
    }).then(()=>{
        console.log(`Local DB CONNECTED`);
    }).catch((err)=>{
        console.log(err);
        console.log(`Local DB NOT CONNECTED`);
    });
}  

