const express = require("express");
const User = require("../models/User");
const router = express.Router();

// 🔹 Get User Details
router.get("/user/:email", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });
    if (!user) return res.status(404).json({ message: "User Not Found" });

    // Remove sensitive data
    let formattedUser = user.toObject();
    delete formattedUser.password;
    delete formattedUser._id;
    delete formattedUser.__v;

    res.json(formattedUser);
  } catch (error) {
    res.status(500).json({ message: "Error Fetching User", error });
  }
});

// 🔹 Delete Account
router.delete("/delete-user/:email", async (req, res) => {
  try {
    await User.findOneAndDelete({ email: req.params.email });
    res.json({ message: "Account Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error Deleting Account", error });
  }
});

module.exports = router;
