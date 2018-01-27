## How to get up and running:

1. In a terminal run your mongodb with "mongod".  **NOTE  I have my mongo db folder set up in the root of my system as per the default for mongodb.  I do not create a separate folder in each project and use 'mongod --dbpath=./db'.  If your system is set up in this way and you cannot connect to your db without it you will need to create the folder in the necessary directory**

2. In a separate terminal, cd into the server directory and create an .env file with the following:
      PORT=3000
      MONGODB_URI='mongodb://localhost:27017/lab37'
      APP_SECRET='mySecret'
      CORS_ORIGINS='http://localhost:8080'

   Next, "npm i" to install dependencies.
   Then run the server with "nodemon index.js".

3. In another terminal, cd into the client directory and create an .env file with the following:
      SERVER_URL='http://localhost:3000'

   Next, "npm i" to install dependencies.
   Then run the app with "npm run watch".
