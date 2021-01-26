require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

/* Set Middlewares: */

app.use( bodyParser.urlencoded( { extended: false }));
app.use(bodyParser.json());
app.use( require('./routes/traveler') );
app.use( cors() );

mongoose.connect( process.env.NODE_URLDB , 
                  {useNewUrlParser:true, useCreateIndex:true, useUnifiedTopology: true},
                  (err, resp) => {
                      if( err ) throw err;
                      console.log("Connecto to DB succesfull");
                });


app.listen( process.env.PORT , () => {
    console.log("listen on 3005");
})