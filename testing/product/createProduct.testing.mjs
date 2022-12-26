import chalk from 'chalk';

const createProduct=`
mutation{
    createProduct(input:{
    name:"34cvxcvxcv",
    description:"2000 hazar  dmvfsdv sdkjndvs dvkjsjdnhviosdmvsd vskjdnviusdnvs",
    price:2003,
    quantity:"12",
    location:"rajbag tarrir cancaona goa",
    sellerID:"638f38a3d0d7eb8ea778cba3",
    categoryID:"638f37a42d417ffa3b2cd7b2"
    }){
      _id
      name
      description
      images
      location
      price
      categoryID
      quantity
      sellerID
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
        query:createProduct
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
    console.log(err)
    console.log(chalk.red("TEST FAILED"));
});
