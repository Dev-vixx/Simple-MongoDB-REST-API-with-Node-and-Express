let express = require("express");
let mongoose = require("mongoose"); //ORM DATABASE
let app = express();
let items = require("./routes/api/items");
// body parser
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// calling the db config
const db = require("./config/keys").mongoURI;
// connect to mongo using mongoose
    mongoose
    .connect(db, { useNewUrlParser: true })
    .then(()=>console.log("Mongodb has connected..."))
    .catch(err => console.log(`opps ${err} occured`))

    // route dir
app.use("/api/items", items)
// port config
const PORT = process.env.PORT || 5000;


// listening
app.listen(PORT, ()=>
{
    console.log(`the server started on port ${PORT}`);
})
