import chalk from 'chalk';

const getAllProductQuery=`
query{
    getAllProducts{
      _id
      name
      categoryID
      description
      images
      location
      price
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
        query:getAllProductQuery
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
