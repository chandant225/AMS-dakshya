const express = require("express");
const cors = require("cors");
require("dotenv").config();
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname,'/server/uploads')))

const userroute = require("./routes/userRoute");
const user_authroute = require("./routes/user_authRoute");
const attendanceroute = require("./routes/attendanceRoute");

app.use('/user', userroute);
app.use("/user_auth", user_authroute);
app.use('/attendance', attendanceroute);




app.listen(4000, () => {
  console.log("server is running on, http://localhost:4000");
});
