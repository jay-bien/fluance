import app from './app';


const PORT = process.env.PORT || 8083;


import { start as mongoStart } from './api/db/mongo';


require('dotenv').config();
mongoStart();
app.listen( PORT , ( ) => {
    console.log( ` app listening `);
} )