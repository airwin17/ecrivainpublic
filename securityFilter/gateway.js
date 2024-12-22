const express=require("express");
let router = express.Router();
const controller= require("../controller/controller.js");
const securityFilterChain= require("./securityFilterChain");
router.use(express.json());
router.route("/state")
.get(controller.getState);
router.route("/switch").post(securityFilterChain.auth,controller.switchState);
router.route("/login").post(securityFilterChain.login);
module.exports=router;