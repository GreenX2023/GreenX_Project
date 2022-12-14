const {buildSchema} = require('graphql');

const Schema=buildSchema(`

    enum role{
        admin
        user
    }

    type user{
        Role:role
        name:String
        email:String
        password:String
        contactnum:String
        Bio:String
        address:String
        products:[product]
        bookmarks:[product]
    }

    type category{
        _id:String
        name:String
        subCategoryList:[category]
        productList:[product]
    } 
    type product{
        _id:String
        name:String
        price:Int
        description:String
        quantity:String
        images:String
        location:String
        categoryID:String
        sellerID:String   
    }
    input createProductInput{
        categoryID:String!
        sellerID:String!
        name:String!
        price:Int!
        description:String
        quantity:String
        images:String!
        location:String!
    }
    input updateProductInput{     
        categoryID:String
        sellerID:String
        name:String
        price:Int
        description:String
        quantity:String!
        images:String
        location:String
    }

    

    type Query{
       getAllCategory:[category]
       getAllSubcategory:[category]
       getAllProducts:[product]
       getProductByCategoryID(categoryID:String):[product]   
       getProductBySubCategoryID(subcategoryID:String):[product]
       getProductById(productID:String):[product]
       getProductByName(productName:String):[product]
       getSellerProducts(sellerID:String):[product]
       getBookmarksForUser(sellerID:String):[product]
    }

    input updateprofile{
        name:String
        email:String
        password:String
        contactnum:String
        Bio:String
        address:String
    }
    
    type deleteproduct{
        acknowledged:Boolean
        deletedCount:Int
    }

    type Mutation{
        createCategory(name:String!,categoryID:String):category
        createProduct(input:createProductInput):product
        updateProduct(input:updateProductInput,_id:String):product
        updateBookmarksAdd(_id:String,productId:String):user
        updateBookmarksremove(_id:String,productId:String):user
        updateProfile(_id:String,input:updateprofile):user
        deleteProduct(userID:String,productID:String):deleteproduct
    }
`);

module.exports=Schema;

// type Mutation{
//     createSubCategory(name:String!,categoryID:String):subcategory
//     createProduct(input:createProductInput):product
//     updateProduct(input:updateProductInput,_id:String):product
//     updateBookmarksAdd(_id:String,productId:String):user
//     updateBookmarksremove(_id:String,productId:String):user
//     updateProfile(_id:String,input:updateprofile):user
//     deleteProduct(userID:String,productID:String):deleteproduct
// }
// type Query{
//     getAllCategory:[category]
//     getAllProducts:[product]
//     getAllSubcategory:[subcategory]
//     getSubcategoryByCategoryId(categoryID:String):[subcategory]
//     getProductByCategoryID(categoryID:String):[product]   
//     getProductBySubCategoryID(subcategoryID:String):[product]
//     getProductById(productID:String):[product]
//     getProductByName(productName:String):[product]
//     getSellerProducts(sellerID:String):[product]
//     getBookmarksForUser(sellerID:String):[product]
//  }