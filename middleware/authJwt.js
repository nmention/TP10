const jwt = require('jsonwebtoken');
const config = require('../config/auth.config');
const db = require("../models");

verifyToken = (req,res,next) =>{
    let token = req.headers["x-access-token"];
    if(!token){
        token = req.headers["authorization"];
        if(!token){
            return res.status(403).send({

            });
        }
        token = token.split(" ")[1];
    }
    jwt.verify(token, config.secret, (err,decoded) =>{

    })
}







