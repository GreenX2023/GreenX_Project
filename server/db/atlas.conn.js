const config = require('config');
// const dbLink = config.get("db.link");
const mongoose=require('mongoose');



exports.mongooseAtlasConnect=()=>{
    mongoose.connect('mongodb+srv://greenx:greenx@cluster0.rjngeit.mongodb.net/?retryWrites=true&w=majority',{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        
    }).then(()=>{
        console.log(`Atlas DB CONNECTED`);
    }).catch((err)=>{
        console.log(err);
        console.log(`Atlas DB NOT CONNECTED`);
    });
    
}  

