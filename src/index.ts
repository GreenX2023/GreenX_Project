import 'reflect-metadata'
import express,{Express} from 'express'
import { buildSchema} from 'type-graphql'
import {graphqlHTTP} from 'express-graphql'
import cors from "cors";
import {resolvers} from './resolvers/allResolvers'
const { mongoLocal }= require('./db/mongo')

//js doc

const app:Express = express()

const PORT = process.env.PORT || 4000

app.use(cors({ origin: ['http://localhost:3000','https://greenx-ts-app.netlify.app/'], credentials: true }));

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
