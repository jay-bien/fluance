import express from 'express';



const app = express();

const PORT = process.env.PORT || 8083;


import { Signin, Signout, Signup, User } from './api';
app.listen( PORT , ( ) => {
    console.log( ` app listening `);
} )
app.use( '/signin', Signin );
app.use( '/signout', Signout );
app.use( '/signup', Signup );
app.use( '/user', User );