const UserModel = require('../models/User.model')



// export default class UserService{
//     async createUser(input: any){
//         // return UserModel.create(input);
//         const user = new UserModel(input);
//           await user.save();
//         return user
      
//     }

// }

export const createUser = async (input: any) =>{
    const user = new UserModel(input);
    await user.save();
    return user
}

export const getAllUsers = async()=>{
    const result=await UserModel.find({});
    if(result){
        return result;
    }
    else{
        console.log('Error in getting users')
    }
}

export const getUserById = async(userId: any)=>{
    const result=await  UserModel.findOne({_id:userId});
    return result;
}