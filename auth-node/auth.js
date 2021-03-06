var express = require("express");
var router = express.Router();
var auth = require("./authController");

router.post("/signup", auth.signUpAPI);
router.post("/signin", auth.signInAPI);
router.post("/verify/email", auth.checkEmailAPI);
router.post("/verify/code", auth.verifyRandomNumber);

module.exports = router;
