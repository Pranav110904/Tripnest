const express = require("express");
const {registerUser, loginUser, forgotPassword} = require("../controllers/userController");
const {submitQuery, resolveQuery} = require("../controllers/queryController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post('/signup', registerUser);
router.post('/login', loginUser);
router.put('/changePassword', authMiddleware, forgotPassword);
router.post('/submitQuery', authMiddleware, submitQuery);
// router.put('/resolveQuery/:queryId', authMiddleware, resolveQuery);

module.exports = router;