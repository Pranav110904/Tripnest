const express = require("express");

const {registerUser, loginUser, forgotPassword} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post('/signup', registerUser);
router.post('/login', loginUser);
router.put('/changePassword', authMiddleware, forgotPassword);

module.exports = router;