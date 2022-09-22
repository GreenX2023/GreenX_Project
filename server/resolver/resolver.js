
const UserSchema=require('../Models/User.model');
const CategorySchema=require('../Models/Category.model');
const ProductSchema=require('../Models/Product.model');
const SubCategorySchema=require('../Models/Subcategory.model');
const {ObjectId} = require('mongodb'); 
const greenx = require('../module/greenx.js');
const mongoose=require('mongoose');


const resolver={

    getAllCategory: greenx.getAllCategory,

    getAllProducts: greenx.getAllProducts,

    getAllSubcategory:async()=>{
        const result=await SubCategorySchema.find({});
        if(result){
            return result;
        }
        else{
            console.log('Error in getting products')
        }
    },
    getSubcategoryByCategoryId:async(args)=>{
        const result=await SubCategorySchema.find({categoryID:args.categoryID})
        if(result){
            return result;
        }
        else{
            console.log('No Subcategory found')
        }
    },

    getProductByCategoryID:async(args)=>{
        const category=await CategorySchema.find({_id:args.categoryID});
        // return category[0].subCategoryList;
        const subcategory=await SubCategorySchema.find({_id:category[0].subCategoryList}).populate('productList');
        // console.log(subcategory[1].productList)
        let productlist=[];
        const product = subcategory.map(function (x, index, array) {
            productlist=[
                ...productlist,
                ...x.productList
            ]
         
        });
        return productlist
    }
   ,

    getProductBySubCategoryID:async(args)=>{
       const result= await ProductSchema.find({subcategoryID:args.subcategoryID});
       if(result){
        return result;
      }
      else{
         console.log('No product found in subcategory')
      }
        
    },

    getProductById:greenx.getProductById,

    getProductByName:greenx.getProductByName,

    getSellerProducts:greenx.getSellerProducts,

    getBookmarksForUser:greenx.getBookmarksForUser,

    createSubCategory:async(args)=>{
        var subCategoryDetails =new SubCategorySchema({name:args.name,categoryID:args.categoryID}); 
        await subCategoryDetails.save();
        let catid = subCategoryDetails.categoryID;
        let subcatid = subCategoryDetails._id;
        let doc = await CategorySchema.findOneAndUpdate({_id:catid},{ "$push": { "subCategoryList": subcatid } }, {
            new: true
          });
        return subCategoryDetails;
    },
    createProduct:async(args)=>{
        var productdetails= new ProductSchema(args.input);
        await productdetails.save();
        let sellerId=productdetails.sellerID;
        let productid=productdetails._id;
        let subcatid = productdetails.subcategoryID;
        let doc = await UserSchema.findOneAndUpdate({_id:sellerId},{ "$push": { "products": productid } }, {
            new: true
          });
        let doc2 = await SubCategorySchema.findOneAndUpdate({_id:subcatid},{ "$push": { "productList": productid } }, {
            new: true
          });

        return productdetails
    },
    updateProduct:async(args)=>{
        const {subcategoryID,sellerID,name,price,description,quantity,images,location}=args.input
        const updateproductdetails=await ProductSchema.findByIdAndUpdate({_id:args._id},{
            subcategoryID,
            sellerID,
            name,
            price,
            description,
            quantity,
            images,
            location
        } ,{ returnOriginal: false })
        return updateproductdetails
    },
    updateBookmarksAdd: greenx.updateBookmarksAdd,

    updateBookmarksremove: greenx.updateBookmarksremove,
    // async(args)=>{
    //     let wishlistproduct = new ObjectId(`${args.productId}`); 
    //     let doc = await UserSchema.findOneAndUpdate({_id:args._id},{ "$pull": { "bookmarks": wishlistproduct } }, {
    //         new: true
    //       });  
    //  return doc

    // },
    updateProfile:async(args)=>{
        const {name,email,password,contactnum,Bio,address}=args.input
        let doc=await UserSchema.findByIdAndUpdate({_id:args._id},{
            name,
            email,
            password,
            contactnum,
            Bio,
            address
        },{ returnOriginal: false })
        return doc
    },
    deleteProduct:async(args)=>{
        const result=await ProductSchema.find({_id:args.productID})
        const deleteproduct=await ProductSchema.deleteOne({_id:args.productID});
        let product = new ObjectId(`${args.productID}`); 

        let doc = await UserSchema.findOneAndUpdate({_id:args.userID},{ "$pull": { "bookmarks":product } }, {
            new: true
          });  

        let doc1 = await UserSchema.findOneAndUpdate({_id:args.userID},{ "$pull": { "products": product } }, {
            new: true
          });  

       let doc2 = await SubCategorySchema.findOneAndUpdate({_id:result[0].subcategoryID},{ "$pull": { "productList": product } }, {
            new: true
          });  

        return deleteproduct
    }
}

module.exports=resolver;