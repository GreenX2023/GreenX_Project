import 'reflect-metadata'
import express,{Express} from 'express'
import { buildSchema} from 'type-graphql'
import {graphqlHTTP} from 'express-graphql'
import {resolvers} from './resolvers/allResolvers'
const { mongoLocal }= require('./db/mongo')

/**
 * App
 * @type {Express}
 * @description app can use all express library methods now
 */
const app:Express = express()
//hello
const PORT = process.env.PORT || 4000

const main = async () =>{

    app.use('/graphql',graphqlHTTP({
        schema:await buildSchema({
            resolvers
        }),
        graphiql:true,

    }));

    mongoLocal()
    
    app.get("/",(_req,res)=> res.send("Hello Ozzy"))

    app.listen(PORT, () => console.log(`Server running on port : ${PORT}`))

}
try{
    main()
}catch(e){
    console.log(e);  
}
