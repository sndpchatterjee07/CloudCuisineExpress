const express = require("express");

const cloudCuisineExpressApp = express();

const mongoose = require("mongoose");

const UserModel = require("./MODELS/Users");

/**
 * Opens Mongoose's default connection to MongoDB, see [connections docs](https://mongoosejs.com/docs/connections.html).
 * It also establishes a connection to our CloudCuisineExpress database.
 * 
 */
mongoose.connect("mongodb+srv://sandeepc:chinu030782@my-default-cluster.nopctvg.mongodb.net/CloudCuisineExpress?retryWrites=true&w=majority");


/**
 *  A GET API endpoint to retrieve all users from the MongoDB Collection CloudCuisineExpress.users.
 *  See [CloudCuisineExpress.users](https://cloud.mongodb.com/v2/650b2e7658898f5ad87068a0#/metrics/replicaSet/650b2fe053ddd1012f86b04d/explorer/CloudCuisineExpress/users/find)  
 */
cloudCuisineExpressApp.get("/getUsers", async (request, response) => {
    try {
        const users = await UserModel.find({});
        response.json(users);
    } catch (error) {
        response.json(error);
    }
});

/**
 *  Listens for incoming connections.
 */
cloudCuisineExpressApp.listen(3000, () => {
    console.log("STARTING THE SERVER...");
})
