const mongoose = require('mongoose');
const express = require('express');
const app = express();

mongoose.connect('mongodb+srv://admin:1234@demomongodb.s7u8vww.mongodb.net/Node-API?retryWrites=true&w=majority&appName=AtlasApp')
.then(()=>{
    console.log('Connect to MongoDB');
}).catch((error)=>{
    console.log(error);
});

