
const express = require('express');
const Traveler =  require('../models/traveler');
const app = express();

app.get('/user/:id', ( req, res) => {
    let id = req.params.id;
    Traveler.findById( id, (err, travelerDB) => {
        if( err ) {
            return res.status(400).json({
                ok: false, 
                msj: "The user dont exist in the DB"
            });
        }
        res.json({
            ok: true,
            travelerDB
        });
    });
});

app.post('/welcome-traveler', ( req, res) => {

    let body = req.body;

    if( body.name === undefined ){
        return res.status(400).json({
            msj:'the name is required',
            typeData:"String",
            ok: false,
        });
    }
    else if( body.email === undefined ){
       return res.status(400).json({
            msj:'The email is required',
            ok: false,
        });
    }
    else if( body.telNumber === undefined ){
       return res.status(400).json({
            msj:'The email is required',
            ok: false,
        });
    }

    let traveler = new Traveler({
        name: body.name,
        email: body.email,
        startPlace: body.startPlace,
        initTravelHour: body.initTravelHour,
        endTravelHour: body.endTravelHour,
        numPassengers: body.numPassengers,
        endPlace: body. endPlace,
        initDate: body.initDate,
        endDate: body.endDate,
        telNumber: body.telNumber,
        enterpriseName: body.enterpriseName,
    });

    traveler.save( (err, travelerDB) => {
        if( err ){
            return res.status(400).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            travel: travelerDB
        });
    });

});

app.put('/travel/:id', ( req, res) => {
    let id = req.params.id;
    let body = req.body;

    if( body.name === undefined ){
        return res.status(400).json({
            msj:'the name is required',
            typeData:"String",
            ok: false,
        });
    }
    else if( body.email === undefined ){
       return res.status(400).json({
            msj:'The email is required',
            ok: false,
        });
    }
    else if( body.telNumber === undefined ){
       return res.status(400).json({
            msj:'The email is required',
            ok: false,
        });
    }

    Traveler.findByIdAndUpdate( id, body, {new: true, runValidators: true},  ( err, travelerDB) => {
        if( err ){
            return res.status(400).json({
                ok: false,
                err
            })
        }
        res.json({
            travelerDB
        });
    });
    
});

app.delete('/travel/:id', ( req, res) => {
    let id = req.params.id;
    Traveler.findByIdAndDelete( id, ( err, travelDeleted) => {
        if( err ){
            return res.status(400).json({
                ok: false,
                msj: "Fail to delete travel"
            });
        }
        res.json( {
            ok: true,
            travelDeleted
        });
    });
});

module.exports = app;