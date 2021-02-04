require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

/* Set Middlewares: */

app.use(bodyParser.json());
app.use( cors() );
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.use( require('./routes/traveler') );

mongoose.connect( process.env.NODE_URLDB , 
                  {useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology: true},
                  (err, resp) => {
                      if( err ) throw err;
                      console.log("Connect to DB succesfull");
                });


app.listen( process.env.PORT , () => {
    console.log("listen on 3005");
})