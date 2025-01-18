const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const mongoose = require('mongoose');
const allRoutes=require("./routes/taskFormRoute.js")

const cors = require("cors");
app.use(cors());



main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/TaskManagementApp');
}

app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.json());


app.use("/",allRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})