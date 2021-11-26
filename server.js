const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
let corsOptions = {
    origin:"http://localhost:3000"
};
app.use(cors(corsOptions));
const db = require("./models");
db.sequelize.sync().then(() =>{
    console.log("Database synchronized successfully");
}).catch((error)=>{
    console.log(error);
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.get("/", (req,res) =>{
    res.json({message:"Bienvenue !"});
})
app.listen(3000, ()=>{
    console.log("Le serveur écoute sur le port 3000");
});