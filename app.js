const express = require("express");
const cors = require('cors')
const mongoose = require("mongoose");
const router = require('./routes/ProductRoute')
const app = express();
app.use(express.json())
app.use(cors())
app.use("/product",router)

mongoose.connect(
  "mongodb+srv://piyas:100100aa@cluster0.ibqdp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
)
.then(()=> console.log('connection successfull'))
.catch(err=> console.log(err))

const port = process.env.PORT || 2000;
app.listen(port, () => {
  console.log(`the port is running on ${port}`);
});
