const express = require("express");
const app = express();
const port = 3000;

const connectDB = require("./config/database");
connectDB();

// allow express to uae json
app.use(express.json());

// hello world
app.get("/", (req, res) => {
  //   send simple json data
  res.send({ message: "Election Target API" });
});

// create login routs
app.use("/login", require("./routes/login"));
app.use("/register", require("./routes/register"));
app.use("/profile", require("./routes/profile"));

// run server

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
