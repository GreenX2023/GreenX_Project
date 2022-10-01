// const config = require('config');
// const dbLink = config.get("db.local_link");
const mongoose=require('mongoose');
const UserModel = require('../Models/User.model');
const greenxDummyData=require('../db/greenxDummy.json');
const CategoryModel = require('../Models/Category.model');
// require('dotenv').config();


// console.log(process.env.LOCAL_MONGO_URL);

// console.log(`Db link : ${process.env.ATLAS_MONGO_URL}`);

exports.mongooseConnect=()=>{
    mongoose.connect("mongodb://0.0.0.0:27017/DummygraphqlGreenx",{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        
    }).then(()=>{
        console.log(`Local DB CONNECTED`);
    }).catch((err)=>{
        console.log(err);
        console.log(`Local DB NOT CONNECTED`);
    });
}  

exports.dummyData=async()=>{
    UserModel.insertMany([
        greenxDummyData.users.user1,
        greenxDummyData.users.user2,
        greenxDummyData.users.user3
    ]).then(function(){
        console.log("Users created successfully")  // Success
    }).catch(function(error){
        console.log(error)      // Failure
    });

    CategoryModel.insertMany([
        greenxDummyData.category.category1,
        greenxDummyData.category.category2,
        greenxDummyData.category.category3
    ]).then(function(){
        console.log("Categories created successfully")  // Success
    }).catch(function(error){
        console.log(error)      // Failure
    });
}

//Run dummyData function only first time to populate local database with dummy data
// dummyData()
