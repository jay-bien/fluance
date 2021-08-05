import request  from 'supertest';
import app from '../../app';
import { PATHS } from '../constants';
import {} from 'jest';

const email = "jay@gmail.com";
const password = "ljsdl03l";


it( 'Returns a 400 error if no password or email',  async ( ) => {

    const res = request( app )
        .post( PATHS.signup )
        .send(
            {

            }
        );
        
        expect ( 400 )
   
        request( app )
        .post( PATHS.signup )
        .send(
            {}
        )
        .expect( 400 )


        return;

})
it( 'Returns a 400 error if email is invalid.' , async ( ) => {

    

} )
it( 'Returns a 400 error if password invalid.' , async ( ) => {

} )

it( 'Returns a 400 error if email is a duplicate.', async ( ) => {
    request( app )
        .post(  PATHS.signup )
        .send( {
            email,
            password
        } )
        .expect( 201 );
    request( app )
        .post(  PATHS.signup )
        .send( {
            email,
            password
        } )
        .expect( 400 );

        return;


})

it( 'Returns a 201 when email and password are valid.',  async ( ) => {
    return request( app )
        .post( PATHS.signup  )
})