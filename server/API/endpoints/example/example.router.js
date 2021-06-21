const { Router } = require("express");

const router = Router();

router.get("/", (req, res) =>
  res.send("Response: GET /api/exampleRoute")
);


module.exports = router;
