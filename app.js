const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
 const blogRoute = require("./routes/UserRoute");
const InitiateMongoServer = require('./config/db');
const userRouter = require("./routes/UserRoute");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/blog", blogRoute);
app.use("/auth", userRouter);
app.get("/",(req,res)=>{
  res.json({
    "page":"Home Page"
  })
})

InitiateMongoServer()

const port = process.env.PORT || 2000;
app.listen(port, () => {
  console.log(`the port is running on ${port}`);
});
