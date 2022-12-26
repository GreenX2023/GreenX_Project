const createCategoryQuery = `
mutation{
    createCategory(name:"agriculture pokad",description:"under this thing we will get many category abd so please be good with it"){
      _id
     name
     description
     image
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
        query: createCategoryQuery
    })
}).then(response => {
    return response.json();
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
//# sourceMappingURL=createCategory.testing.js.map