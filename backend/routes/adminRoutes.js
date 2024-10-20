const express = require("express");
const {resolveQuery} = require("../controllers/queryController");
const authMiddleware = require("../middlewares/authMiddleware");
const {addFlight} = require('../controllers/flightController');

const router = express.Router();

router.put('/resolveQuery/:queryId', authMiddleware, resolveQuery);
router.post('/addFlight', addFlight);

module.exports = router;