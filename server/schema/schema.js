const {buildSchema} = require('graphql');

const Schema=buildSchema(`
    type user{
        Role:String
        name:String
        email:String
        password:String
        contactnum:String
        Bio:String
        address:String
        products:[product]
        wishList:[product]
    }

    type product{
        _id:String
        subcategoryID:String
        sellerID:String
        name:String
        price:Int
        description:String
        quantity:String
        images:String
        location:String
    }

    type subcategory{
        _id:String
        name:String
        categoryID:String
        productList:[product]
    }

    type category{
        _id:String
        name:String
        subCategoryList:[subcategory]
    }

    type Query{
       getAllCategory:[category]
       getAllProducts:[product]
       getAllSubcategory:[subcategory]
       getSubcategoryByCategoryId(categoryID:String):[subcategory]
       getProductByCategoryID(categoryID:String):[product]   
       getProductBySubCategoryID(subcategoryID:String):[product]
       getProductById(productID:String):[product]
       getProductByName(productName:String):[product]
       getSellerProducts(sellerID:String):[product]
       getWishListForUser(sellerID:String):[product]
    }

    input createProductInput{
        subcategoryID:String!
        sellerID:String!
        name:String!
        price:Int!
        description:String
        quantity:String
        images:String!
        location:String!
    }

    input updateProductInput{
      
        subcategoryID:String
        sellerID:String
        name:String
        price:Int
        description:String
        quantity:String!
        images:String
        location:String
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
        createSubCategory(name:String!,categoryID:String):subcategory
        createProduct(input:createProductInput):product

        updateProduct(input:updateProductInput,_id:String):product
        updateWishListAdd(_id:String,productId:String):user
        updateWishListremove(_id:String,productId:String):user
        updateProfile(_id:String,input:updateprofile):user

        deleteProduct(userID:String,productID:String):deleteproduct
    }

    
   
`);

module.exports=Schema;