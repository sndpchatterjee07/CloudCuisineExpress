const mongoose = require('mongoose');

/**
 * 
 * See [CloudCuisineExpress.users](https://cloud.mongodb.com/v2/650b2e7658898f5ad87068a0#/metrics/replicaSet/650b2fe053ddd1012f86b04d/explorer/CloudCuisineExpress/users/find)
 * See [Schema](https://mongoosejs.com/docs/guide.html#definition)
 */
const UserSchema = new mongoose.Schema({

    /**
     *  In our system, users can belong to one of four distinct types, each with its ownset of permissions and responsibilities:
     * 
     *   1. customer: These are the individuals who place orders and interact with our services as consumers. 
     *      They can browse menus, place orders, and provide reviews or feedback.
     *  
     *   2. kitchen_staff: Members of our kitchen team fall into this category. 
     *      They are responsible for preparing and cooking the orders placed by customers. 
     *      They have access to order details and kitchen-related functionalities.
     *
     *   3. delivery_staff: These users are tasked with delivering orders to customers. 
     *      They receive order information and use it for efficient and timely delivery.
     *      Tracking deliveries is part of their responsibilities.
     *
     *   4. admin: Administrators have the highest level of access and control over our system. 
     *      They can manage user accounts, update menus, handle customer support, and make critical system-wide changes.
     * 
     * 
     */
    userType: {
        type: String,
        required: true
    },

    userName: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }

});

/**
 *  See [Models](https://mongoosejs.com/docs/models.html#models)
 * 
 */
const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel
