// @const for requiring files and modules
let express = require("express");
let mongoose = require("mongoose"); //ORM DATABASE
let app = express();
let path = require("path")
let items = require("./routes/api/items");




// body parser to read the body of the application
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




// @client config using react
app.use(express.static(path.join(__dirname, "client")))



// listening
app.listen(PORT, ()=>
{
    console.log(`the server started on port ${PORT} `);
})

// rgba(36,39,45,.85)