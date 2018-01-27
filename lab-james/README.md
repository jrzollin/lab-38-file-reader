## How to get up and running:

1. In a terminal run your mongodb with "mongod".  **NOTE  I have my mongo db folder set up in the root of my system as per the default for mongodb.  I do not create a separate folder in each project and use 'mongod --dbpath=./db'.  If your system is set up in this way and you cannot connect to your db without it you will need to create the folder in the necessary directory**

2. In a separate terminal, cd into the server directory and create an .env file with the following:
      PORT=3000
      MONGODB_URI='mongodb://localhost:27017/lab37'
      APP_SECRET='mySecret'
      CORS_ORIGINS='http://localhost:8080'
      AWS_ACCESS_KEY_ID=*YOUR AWS KEY ID*
      AWS_SECRET_ACCESS_KEY=*YOUR AWS SECRET KEY*
      AWS_BUCKET=*YOUR AWS BUCKET*

   Next, "npm i" to install dependencies.
   Then run the server with "nodemon index.js".

3. In another terminal, cd into the client directory and create an .env file with the following:
      SERVER_URL='http://localhost:3000'

   Next, "npm i" to install dependencies.
   Then run the app with "npm run watch".


##About the App

When you start up your browser and open localhost:8080, you will see a login on the right.  Type in your username and password then click create user to start a new profile.  This will open up the List and Profile navs to you.  Currently in lists you can type in anything you want and hit add and it will display your items in a list.  In profile you can update your username and add a profile pic then save the changes to the database. Your pic will be sent to AWS s3 and stored there.
