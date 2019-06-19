let mongoose = require("mongoose"); //ORM DATABASE
const schema = mongoose.Schema;

// create schema
let ItemSchema = new schema({
    name: {
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now
    }
});


module.exports = Item = mongoose.model("item", ItemSchema);