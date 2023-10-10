const express = require('express');
const mongoose = require('./MongoDB/ConnectDB');
const app = express();


app.listen(3000, ()=>{
    console.log('Listen port 3000');
})


