const { mongooseConnect,dummyData } = require('./local.conn');

mongooseConnect()

//Run dummyData function only first time to populate local database with dummy data
dummyData()
