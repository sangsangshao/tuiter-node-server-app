// import express from 'express'
// import examplesController from './controllers/examples-controller.js'
// import tuitsController from './controllers/tuits-controller/controller.js'
// import cors from 'cors'
//
// const app = express()
//
// app.use(cors())
// app.use(express.json())
//
// examplesController(app)
// tuitsController(app)
//
// app.listen(4000)

import mongoose from "mongoose";
import express from 'express';
import HelloController from "./controllers/hello-controller.js"
import UserController from "./controllers/users/users-controller.js"
import TuitsController from "./controllers/tuits/tuits-controller.js";
import cors from 'cors'
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://localhost:27017/tuiter'
mongoose.connect(CONNECTION_STRING);
// mongoose.connect('mongodb://localhost:27017/tuiter');




// const express = require('express')
const app = express()
app.use(cors())
app.use(express.json());
TuitsController(app);
HelloController(app)
UserController(app)

// app.get('/hello', (req, res) => {res.send('Life is good!')})
// app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.listen(process.env.PORT || 4000);