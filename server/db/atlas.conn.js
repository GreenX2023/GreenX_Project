const config = require('config');
const dbLink = config.get("db.link");
const mongoose=require('mongoose');



exports.mongooseAtlasConnect=()=>{
    mongoose.connect(dbLink,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        
    }).then(()=>{
        console.log(`Atlas DB CONNECTED`);
    }).catch((err)=>{
        console.log(err);
        console.log(`Atlas DB NOT CONNECTED`);
    });
    
}  

