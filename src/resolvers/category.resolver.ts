import Category from "../schema/category.schema";
import { Query, Resolver ,Mutation,Arg} from "type-graphql";
import { createCategory,getAllCategory } from "../greenxServices/category.service";

@Resolver()
export default class CategoryResolver{
    /**
    * @description gets a dummy object for testing a category resolver
    * 
    * @returns {{_id: string, name: string, productList: string[]}} dummy Category Details
    */
    @Query(()=>Category)
    myCategory(){
        return{
            _id:"123",
            name:"fruits",
            productList:[{
                name:"apple",
                price:982
            }]
        };
    }

    @Query(()=>[Category])
    getAllCategory(){
        return getAllCategory()   //populate not working
    }

    @Mutation(()=> Category)
    createCategory(
        @Arg('name') name: String ,
        @Arg('parentCat') parentCat: String
        ){
        return createCategory(name,parentCat)
    }
}