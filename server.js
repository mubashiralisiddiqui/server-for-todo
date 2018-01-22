import router from "./src/routes";
import express from "express"
import bodyParser from "body-parser";
import mongoose from "mongoose";
const app = express();

const port = process.env.PORT || 4000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', router)
//  mongoose.connect('mongodb://mubashirali:heroku123@ds139844.mlab.com:39844/patientmanagement')
// mongodb://mubashirali:db123@ds039145.mlab.com:39145/todo
mongoose.connect('mongodb://mubashirali:db123@ds039145.mlab.com:39145/todo')

app.listen(port, () => {
    console.log("server is runnig on", port)
})