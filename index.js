import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import PostRoutes from "./routes/posts.js";
import UserRoutes from "./routes/users.js";

import dotenv from 'dotenv';

const app = express();
dotenv.config()

app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));

app.use(cors());

// you will get errors or warnings in console if you don't add this object
app.use("/posts", PostRoutes)
app.use('/user', UserRoutes)
app.get('/', (req, res) => {
    res.send("Hello to  my memories app!")
});


const PORT = process.env.PORT;

//mongoose accepts two params URL and an object
mongoose.connect(process.env.ConnectURL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> app.listen(PORT, ()=> console.log(`Server running at port: ${PORT}`)))
.catch(error=>console.log(error.message))

mongoose.set('useFindAndModify', false);

