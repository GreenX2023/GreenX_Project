import Category from "../schema/category.schema";
import { Query, Resolver ,Mutation,Arg} from "type-graphql";
import CategoryService from "../greenxServices/category.service";
// import { createCategory,getAllCategory } from "../greenxServices/category.service";
let category= new CategoryService()
@Resolver()
export default class CategoryResolver{
   
    
    @Query(()=>[Category])
    getAllCategory(){
        return category.getAllCategory()  
    }

    @Mutation(()=> Category)
    createSubCategory(
        @Arg('name') name: String ,
        @Arg('parentCat') parentCat: String
        ){
        return category.createSubCategory(name,parentCat)
    }

    @Mutation(()=> Category)
    createCategory(
        @Arg('name') name: String 
        ){
        return category.createCategory(name)
    }
}