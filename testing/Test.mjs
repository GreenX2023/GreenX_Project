// const prompt = require("prompt-sync")({ sigint: true });
import promptSync from 'prompt-sync';
const prompt = promptSync();

console.log("**************  GreenX API Testing  **************\n\n")
   console.log("1. CATEGORY TESTING")
   console.log("2. PRODUCT TESTING")
   console.log("3. USER TESTING\n")
   
   const input = prompt("Choose: ");
   console.clear()
   switch(input) { 
       case "1": { 
         console.log("1. CREATE CATEGORY TEST")
         console.log("2. CREATE SUBCATEGORY TEST")
         console.log("3. GET ALL CATEGORY TEST")
         console.log("4. GET ALL SUB CATEGORY TEST\n")
         const categoryInput = prompt("Choose: ");
         console.clear()
         switch(categoryInput){
            case "1":
               import("./category/createCategory.testing.mjs");
               break; 
            case "2":
               import("./category/createSubCategory.testing.mjs");
            break;
            case "3":
               import("./category/getCategory.testing.mjs");
            break;
            case "4":
               import("./category/getAllSubCategoryByCategoryId.testing.mjs");
            break;
            default: { 
               //statements; 
               break; 
            } 

         }
          break; 
       } 
       case "2": { 
         console.log("1. GET ALL PRODUCT TEST")
         console.log("2. GET PRODUCT BY ID TEST")
         console.log("3. GET PRODUCT BY NAME TEST")
         console.log("4. CREATE PRODUCT TEST\n")
         const productInput = prompt("Choose: ");
         console.clear()

         switch (productInput) {
            case "1":
               import("./product/getAllProduct.testing.mjs");
               break;
            case "2":
               import("./product/getProductById.testing.mjs");
               break;
            case "3":
               import("./product/getProductByName.mjs");
               break;

            case "4":
               import("./product/createProduct.testing.mjs");
               break;
            default:
               break;
         }

          break; 
       }
       default: { 
        
          break; 
       } 
    } 


