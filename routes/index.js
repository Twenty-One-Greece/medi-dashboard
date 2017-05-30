const express = require("express");
const router = express.Router();


/* GET home page. */
router.get("/super-admin/", (req, res) => res.render("super-admin"))

module.exports = router;