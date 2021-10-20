import { PATHS } from '../../constants';
import  { email, password } from './constants';
import { createUserGetCookie } from '../../../test/utils';
import request  from 'supertest';
import app from '../../../app';
import mongoose from 'mongoose';

const payload = {

}

it( 'Returns a 401 if user is not signed in', async ( ) =>{

    const response = await request( app )
                .put( PATHS.tickets )
                .send()
    console.warn( response.body );
    expect( response.status ).toBe( 401 );
    
})

it( 'Returns a 401 if user is does not own ticket', async ( ) =>{

    const response = await request( app )
    .put( PATHS.tickets )
    .send( {} )

    expect( response.status ).toBe( 401 )

})

it( 'Returns a 400 if no new title or price', async( ) =>{

    const response = await request( app )
    .put( PATHS.tickets )
    .send( {} )

    expect( response.status ).toBe( 400 )

})

it( 'Returns a 400 if price is not convertable to float', async ( ) =>{

    const response = await request( app )
    .put( PATHS.tickets )
    .send( {} )

    expect( response.status ).toBe( 400 )

})

it( 'Returns a 404 if ticket is not found', async ( ) =>{

    const response = await request( app )
    .put( PATHS.tickets )
    .send( {} )

    expect( response.status ).toBe( 404 )

})