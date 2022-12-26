import chalk from 'chalk';

const getAllSybcategoryByCategoryIdQuery=`
query{
    getAllSubCategoryByCategoryId(categoryId:"638f37a42d417ffa3b2cd7b2"){
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
`
fetch('http://localhost:3000/graphql',{
    method:"POST",
    headers:{
        "Content-type":"application/json",
        "Accept":"application/json"
    },
    body:JSON.stringify({
        query:getAllSybcategoryByCategoryIdQuery
    })
}).then(response=>{
    return response.json()
}).then(data=>{
    if(data.errors){
        console.log(chalk.red("TEST FAILED"));
    }
    else{
        console.log(chalk.green("TEST PASSED"));
    }
}
).catch(err=>{
    console.log(chalk.red("TEST FAILED"));
    console.log(err)
});
