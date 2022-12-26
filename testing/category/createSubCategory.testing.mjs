import chalk from 'chalk';

const createSubCategoryQuery=`
mutation{
    createSubCategory(name:"kulad maare 2.0",parentCat:"638f37a42d417ffa3b2cd7b2",description:"this is kulaad and the character must be morew than 2 characters"){
      _id
     name
     description
     image
     productList{
         name
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
        query:createSubCategoryQuery
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
