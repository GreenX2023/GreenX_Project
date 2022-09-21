const bodyParser = require('body-parser');
const express=require('express');
const app=express();
const mongoose=require('mongoose');
const {graphqlHTTP}=require('express-graphql');
const config = require('config');
const dbLink = config.get("db.link");
const port = config.get("server.port");

const UserSchema=require('./Models/User.model');
const CategorySchema=require('./Models/Category.model');
const ProductSchema=require('./Models/Product.model');
const SubCategorySchema=require('./Models/Subcategory.model');


const Schema = require('./schema/schema');
const resolver = require('./resolver/resolver');


require('dotenv').config();

//middlewares
app.use(bodyParser.json())

//DB connections
//mongodb+srv://sarthak:sunnaik05@cluster0.llq2n.mongodb.net/greenx?retryWrites=true&w=majority
// mongodb+srv://greenx:greenx@cluster0.rjngeit.mongodb.net/?retryWrites=true&w=majority
//mongodb://0.0.0.0:27017/graphqlGreenx
mongoose.connect(dbLink,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
}).then(()=>{
    console.log(`DB CONNECTED`);
}).catch((err)=>{
    console.log(err);
    console.log(`DB NOT CONNECTED`);
});



//setting up graphql server for my application
app.use('/graphql',graphqlHTTP({
    schema:Schema,
    graphiql:true,
    rootValue:resolver
}));








app.post('/api/createUser',async(req,res)=>{

    var categoryDetails = new UserSchema(req.body);
   await categoryDetails .save((err, result) => {
         if(!err){
            res.status(200).json(result)
         }
         else{
            res.json({
                message:"Error in creation of user"
            })
         }
      })

    }              
)

//create category

app.post('/api/createCategory',async(req,res)=>{

    var categoryDetails =new CategorySchema(req.body);
   await categoryDetails .save((err, result) => {
         if(!err){
            res.status(200).json(result)
         }
         else{
            res.json({
                message:"Error in create category"
            })
         }
      })

    }              
)




//create products


app.post('/api/createproduct',async(req,res)=>{

    var productDetails =new ProductSchema(req.body);
   await productDetails .save((err, result) => {
         if(!err){
            res.status(200).json(result)
         }
         else{
            res.json({
                message:"Error in create product"
            })
         }
      })

    }              
)

//create subcategory

app.post('/api/subCategoryproduct',async(req,res)=>{

    var subCategoryDetails =new SubCategorySchema(req.body);
   await subCategoryDetails .save((err, result) => {
         if(!err){
            res.status(200).json(result)
         }
         else{
            res.json({
                message:"Error in create product"
            })
         }
      })

    }              
)

app.get('/api/getcategory',async(req,res)=>{
    const result= await CategorySchema.find({}).populate('subCategoryList');
    if(result){
        return res.status(200).json(result)
    }
    else{
        return res.status(400).json({
            "message":"can't read category"
        })
    }
})



app.listen(port,()=>{
    console.log(`server on port ${port}`);
})