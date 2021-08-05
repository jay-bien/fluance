import request  from 'supertest';
import app from '../../app';
import { PATHS } from '../constants';


it( 'Returns a 400 error if password or email are empty.',  async ( ) => {

  

})
it( 'Returns a 400 error if email or password is invalid.' , async ( ) => {

    

} )


it( 'Returns a 400 error if email is not found.', async ( ) => {
   
})

it( 'Returns a 200 when email and password are valid.',  async ( ) => {
    return request( app )
        .post( PATHS.signin  )
})
it( 'Sets a cookie on successful signin.',  async ( ) => {
    return request( app )
        .post( PATHS.signin  )
})