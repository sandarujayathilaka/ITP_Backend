const asyncHandler = require('express-async-handler')
const Counter = require('../models/counterModel')

//add count
const addCount = asyncHandler(async (req, res) => {
    console.log("called")
  Counter.findOne().sort({ count: -1 }).exec((err, counter) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
      return;
    }

    const highestCount = counter ? counter.count : 0;
    const newCounter = new Counter({ count: highestCount + 1 });
    newCounter.save((err, savedCounter) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
        return;
      }

      res.json({ count: savedCounter.count });
    });
  });
});


module.exports = {
    addCount,
  }
  