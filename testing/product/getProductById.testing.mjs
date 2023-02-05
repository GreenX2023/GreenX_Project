import chalk from 'chalk';

const getProductByIdQuery=`
query{
    getProductById(productID:"638f475e5ad5fcef2ec7a893"){
      _id
      name
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
        query:getProductByIdQuery
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