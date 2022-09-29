# GreenX_Project

SERVER:

steps to start backend server :-
1. After cloning repo visit the server folder on your terminal and install node modules. 
   >> cd server
   
   >> npm i
2. Run the start script. 
   >> npm start

By default this will connect you to MongoDB atlas database and start the server on http://localhost:4000/graphql.

For Local DB :- 

In index.js file, Comment "mongooseAtlasConnect()" and un-comment "mongooseConnect()" to use local MongoDB and populate greenX Dummy data. 

//local DB conection

// mongooseConnect( )     <------------- uncomment this

//Atlas DB connection

mongooseAtlasConnect( )   <------------- comment this

