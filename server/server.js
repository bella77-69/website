const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const commentRoute = require("./routes/commentsRoute");
const app = express();


app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", commentRoute);


const PORT = process.env.PORT || 8000;
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/api", (req, res) => {
  res.sendFile
});

app.listen(PORT, (req, res) => {
  console.log(`Server connected to port: ${PORT}`);
});