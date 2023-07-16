import 'reflect-metadata'
import express,{Express} from 'express'
import { buildSchema} from 'type-graphql'
import {graphqlHTTP} from 'express-graphql'
import {resolvers} from './resolvers/allResolvers'

const { mongoLocal }= require('./db/mongo')
const bodyParser = require('body-parser');
const cors=require('cors')

const app:Express = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(cors())

const main = async () =>{
    
    app.use('/graphql',graphqlHTTP({
        schema:await buildSchema({
            resolvers
        }),
        graphiql:true,
    }));

    mongoLocal()  
    app.get("/",(_req,res)=> res.send("Server is working"))
    app.listen(PORT, () => console.log(`Server running on port : ${PORT}`))

}

try{
    main()
}catch(e){
    console.log(e);  
}
