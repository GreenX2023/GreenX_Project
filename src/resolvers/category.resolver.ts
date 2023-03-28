import Category from "../schema/category.schema";
import { Query, Resolver ,Mutation,Arg} from "type-graphql";
import CategoryService from "../greenxServices/category.service";
// import { createCategory,getAllCategory } from "../greenxServices/category.service";
let category= new CategoryService()
@Resolver()
export default class CategoryResolver{
   
    
    @Query(()=>[Category],{nullable: true})
    getAllCategory(){
        return category.getAllCategory()  
    }

    @Query(()=>[Category],{nullable: true})
    getAllSubCategoryByCategoryId(
        @Arg('categoryId') categoryId: String
    ){
        return category.getAllSubCategoryByCategoryId(categoryId)  
    }

    @Query(()=>[Category],{nullable: true})
    getCategoryById(
        @Arg('categoryId') categoryId: String
    ){
        return category.getCategoryById(categoryId)
    }

    @Query(()=>[Category],{nullable: true})
    getSubCategoryById(
        @Arg('subCategoryId') subCategoryId: String
    ){
        return category.getSubCategoryById(subCategoryId)
    }


    @Mutation(()=> Category,{nullable: true})
    createSubCategory(
        @Arg('name') name: String ,
        @Arg('parentCat') parentCat: String,
        @Arg('description') description: String,
        @Arg('image') !image:String
        ){
        return category.createSubCategory(name,parentCat,description,image)
    }

    @Mutation(()=> Category,{nullable: true})
    createCategory(
        @Arg('name') name: String ,
        @Arg('description') description: String,
        @Arg('image') image:String
        ){
        return category.createCategory(name,description,image)
    }
}