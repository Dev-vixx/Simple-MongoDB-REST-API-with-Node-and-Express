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




// @client config
app.use(express.static(path.join(__dirname, "Client")))



// listening
app.listen(PORT, ()=>
{
    console.log(`the server started on port ${PORT} `);
})



// <video loop="" preload="" autoplay="" muted="" style="width: 1462px; height: 770px; margin-top: 0px; margin-left: -98px;">
// 		<source src="https://sonetel.com/wp-content/uploads/2014/11/Second-20-1.m4v" type="video/mp4; codecs=avc1.42E01E,mp4a.40.2">
// 		<source src="https://sonetel.com/wp-content/uploads/2014/11/Second-20-1.webmsd.webm" type="video/webm; codecs=vp8,vorbis">
// 		<source src="https://sonetel.com/wp-content/uploads/2014/11/Second-20-1.oggtheora.ogv" type="video/ogg; codecs=theora,vorbis">
// 	</video>
// rgba(36,39,45,.85)