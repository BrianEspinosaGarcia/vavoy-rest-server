

process.env.PORT = process.env.PORT || 3005;


process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let urlDB;

if( process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/vavoyTravelers';
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.NODE_URLDB = urlDB;