require('./config/config');
const express = require('express');

const app = express();
const bodyParser = require('body-parser');

/* Set Middlewares: */

app.use( bodyParser.urlencoded( { extended: false }));
app.use(bodyParser.json());

app.get('/user', ( req, res) => {
    res.json('I need get travel')
});

app.post('/welcome-traveler', ( req, res) => {
    let body = req.body;
    if( body.name === undefined ){
        res.status(400).json({
            msj:'the name is required',
            ok: false,
        });
    }
    else if( body.startPlace === undefined ){
        res.status(400).json({
            msj:'the place for init travel is required',
            ok: false,
        });
    }
    else if( body.travelHour === undefined ){
        res.status(400).json({
            msj:'the hour for init travel is required',
            ok: false,
        });
    }
    else if( body.numPassenger === undefined ){
        res.status(400).json({
            msj:'The number of passengers is required',
            ok: false,
        });
    }
    else if( body.endPlace === undefined ){
        res.status(400).json({
            msj:'The place for end travel is required',
            ok: false,
        });
    }
    else if( body.email === undefined ){
        res.status(400).json({
            msj:'The email is required',
            ok: false,
        });
    }
    else if( body.telNumber === undefined ){
        res.status(400).json({
            msj:'The email is required',
            ok: false,
        });
    }else {
        res.json({
            body
        })
    }
});

app.put('/travel/:id', ( req, res) => {
    let id = req.params.id;
    let body = req.body;
    if( body.name === undefined ){
        res.status(400).json({
            msj:'the name is required',
            ok: false,
        });
    }
    else if( body.startPlace === undefined ){
        res.status(400).json({
            msj:'the place for init travel is required',
            ok: false,
        });
    }
    else if( body.travelHour === undefined ){
        res.status(400).json({
            msj:'the hour for init travel is required',
            ok: false,
        });
    }
    else if( body.numPassenger === undefined ){
        res.status(400).json({
            msj:'The number of passengers is required',
            ok: false,
        });
    }
    else if( body.endPlace === undefined ){
        res.status(400).json({
            msj:'The place for end travel is required',
            ok: false,
        });
    }
    else if( body.email === undefined ){
        res.status(400).json({
            msj:'The email is required',
            ok: false,
        });
    }
    else if( body.telNumber === undefined ){
        res.status(400).json({
            msj:'The email is required',
            ok: false,
        });
    }else {
        res.json({
            body
        })

    }
});

app.delete('/travel/:id', ( req, res) => {
    let id = req.params.id;
    res.json('this is a delete travel')
});


app.listen( process.env.PORT , () => {
    console.log("listen on 3005");
})