const {verifySignUp} = require("../middleware");
const controller = require("../controllers/auth.controller");

module.exports = function(app){
    app.use((req,res,next)=>{
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    app.get("/test/all", controller.accessAll);
    app.get("/test/user",controller.signin);
};