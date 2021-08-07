import app  from '../app';
import request from 'supertest';
import { PATHS } from '../api/constants'

export const createUserGetCookie = async ( email: string, password: string, expectCode: number ): Promise< string[] > => {
    const response = await request( app )
        .post( PATHS.signup )
        .send( { email, password } )
        .expect( expectCode )
        const cookie = response.get('Set-Cookie');
        
        return cookie;
}


export const signInTest = async ( email: string, password: string, expectCode: number ) : Promise< string[] > => {
    const response = await request( app )
    .post( PATHS.signin )
    .send(
        {
            email, 
            password
        }
    )
    .expect( expectCode );

    const cookie = response.get('Set-Cookie')

    // console.log( { cookie  } );
    return cookie;
}