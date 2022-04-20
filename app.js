const express = require("express");
const tasks = require("./routes/tasks");
const connectDB = require('./db/connect')
require('dotenv').config()

const app = express();

// middleware
app.use(express.static('./public'))
app.use(express.json());

//Routes
app.use("/api/v1/tasks", tasks);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
}

start()