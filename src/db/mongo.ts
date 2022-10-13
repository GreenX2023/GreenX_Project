import mongoose from 'mongoose'
import dotenv from "dotenv";
dotenv.config();
const dbLink:string = process.env.ATLAS_MONGO_URL!

// mongodb+srv://ozzy:ozzy@ozzy-cluster.llaahyp.mongodb.net/green?retryWrites=true&w=majority

exports.mongoLocal=()=>{
    mongoose.connect(dbLink).then(()=>{
        console.log(`Atlas DB CONNECTED`);
    }).catch((err)=>{
        console.log(err);
        console.log(`Atlas DB NOT CONNECTED`);
    });
    
}  