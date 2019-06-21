let mongoose = require("mongoose"); //ORM DATABASE
const schema = mongoose.Schema;

// create schema
let ItemSchema = new schema({
    user_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});


module.exports = Item = mongoose.model("item", ItemSchema);