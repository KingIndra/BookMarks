const express = require("express");
const {connectDb, client} = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const os = require('os'); 

connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send(os.hostname());
});

app.use(express.json());
app.use("/api/urls", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
// app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
