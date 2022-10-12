import mongoose from 'mongoose'

// mongodb+srv://ozzy:ozzy@ozzy-cluster.llaahyp.mongodb.net/green?retryWrites=true&w=majority

// exports.mongoLocal = async () =>{
//     try{
//         mongoose.connect('mongodb+srv://ozzy:ozzy@ozzy-cluster.llaahyp.mongodb.net/?retryWrites=true&w=majority',{
//             useNewUrlParser:true,
//             useUnifiedTopology:true,
            
//         });
//         console.log("DB connected!");
        

//     }catch(e){
//         console.log(e);
//         process.exit(1);
//     }
// }

exports.mongoLocal=()=>{
    mongoose.connect('mongodb://ozzy:ozzy@ac-qnff1hf-shard-00-00.llaahyp.mongodb.net:27017,ac-qnff1hf-shard-00-01.llaahyp.mongodb.net:27017,ac-qnff1hf-shard-00-02.llaahyp.mongodb.net:27017/greenx?ssl=true&replicaSet=atlas-7lxkwp-shard-0&authSource=admin&retryWrites=true&w=majority').then(()=>{
        console.log(`Atlas DB CONNECTED`);
    }).catch((err)=>{
        console.log(err);
        console.log(`Atlas DB NOT CONNECTED`);
    });
    
}  