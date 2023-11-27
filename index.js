const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const db = require("./config/DB");
const app = express();

app.get("/", async (req, res) => {
  try {
    await db.authenticate();
    res.send("connection established successfully!..");
  } catch (e) {
    console.log(e.message);
  }
});
app.use("/users", require("./routes/user"));
app.listen(5000, () => {
  console.log("server started...");
});
