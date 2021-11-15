require('dotenv').config();



import app from './app';


const PORT = process.env.PORT || 8083;

import  emit  from './api/events/emitter';


import { start as mongoStart } from './api/db/mongo';
import { DatabaseConnectionError } from './api/errors';


if( ! process.env.JWT_KEY)  throw new DatabaseConnectionError( 'Error starting app.' );
mongoStart();
app.listen( PORT , ( ) => {
    const emitter = new emit( 'test', function( uno: Number, dos: Number){ console.log({ uno}, {dos }) } );

    removeEmitter();

    emitter.emit("test", 1, 2, 3, 4, 5, 6, 7)
    console.log( ` app listening `);
} )