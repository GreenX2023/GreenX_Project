const bodyParser = require('body-parser');
const express=require('express');
const app=express();
const mongoose=require('mongoose');
const {graphqlHTTP}=require('express-graphql');
const config = require('config');
// const dbLink = config.get("db.link");
const port = config.get("server.port");
const dotenv = require('dotenv');
dotenv.config();

const { mongooseConnect } = require('./db/local.conn');
const { mongooseAtlasConnect } = require('./db/atlas.conn');

const Schema = require('./schema/schema');
const resolver = require('./resolver/resolver');


//middlewares
app.use(bodyParser.json())



//local DB conection
mongooseConnect()
//Atlas DB connection
// mongooseAtlasConnect()


//setting up graphql server for my application
app.use('/graphql',graphqlHTTP({
    schema:Schema,
    graphiql:true,
    rootValue:resolver
}));


app.listen(port,()=>{
    console.log(`server on port ${port}`);
})