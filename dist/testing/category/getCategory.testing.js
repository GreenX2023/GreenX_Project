const getAllCategoryQuery = `
query{
    getAllCategory{
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
        query: getAllCategoryQuery
    })
}).then(response => {
    return response.json();
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});
//# sourceMappingURL=getCategory.testing.js.map