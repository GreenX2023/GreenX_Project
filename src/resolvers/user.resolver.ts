import User from "../schema/user.schema";
import { CreateUserInput} from "../schema/user.schema";
import { Query, Resolver,Mutation,Arg } from "type-graphql";
// import UserService from "../greenxServices/user.service";
// const {UserModel} = require('../models/User.model')
const {createUser,getAllUsers,getUserById} = require('../greenxServices/user.service')

@Resolver()
export default class UserResolver{

    @Mutation(()=> User)
    createUser(@Arg('input') input: CreateUserInput){
        return createUser(input)
    }

    @Query(()=>User)
    me(){
        return{
            _id:"123",
            name:"Austin",
            email:"a@gmail.com"
        };
    }
    @Query(()=>[User])
    getAllUsers(){
        return getAllUsers()
    }

    @Query(()=>User)
    getUserById(@Arg('userId') userId: String){
        return getUserById(userId)
    }
}