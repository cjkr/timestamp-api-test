const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  let date = new Date();
  res.json({ unix: Math.round(date.getTime()), utc: date.toUTCString() });
});

router.get("/:time", function (req, res) {
  let time = req.params.time;
  let date;

  if (!Number.isNaN(parseInt(Number(time)))) {
    date = new Date(Number(time));
  } else {
    date = new Date(time);
  }

  if (date == "Invalid Date") {
    console.log(date, time, Number.isInteger(time));
    res.json({ error: "Invalid date" });
  } else {
    res.json({ unix: date.getTime(), utc: date.toUTCString() });
  }
});

module.exports = router;
