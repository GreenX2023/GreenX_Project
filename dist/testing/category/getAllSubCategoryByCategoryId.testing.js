"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const getAllSybcategoryByCategoryIdQuery = `
query{
    getAllSubCategoryByCategoryId(categoryId:"638f37a42d417ffa3b2cd7b1"){
        name
        _id
        description
        image
        productList{
            name
            _id
            categoryID
            description
            images
            location
            name
            price
            quantity
            sellerID
        }
    }
}
`;
fetch('http://localhost:3000/graphql', {
    method: "POST",
    headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
    },
    body: JSON.stringify({
        query: getAllSybcategoryByCategoryIdQuery
    })
}).then(response => {
    return response.json();
}).then(data => {
    if (data.errors) {
        console.log(chalk_1.default.red("TEST FAILED"));
    }
    else {
        console.log(chalk_1.default.green("TEST FAILED"));
    }
}).catch(err => {
    console.log(err);
});
//# sourceMappingURL=getAllSubCategoryByCategoryId.testing.js.map