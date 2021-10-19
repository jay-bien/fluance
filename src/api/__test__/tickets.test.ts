
import { PATHS } from '../constants';
import  { email, password } from './constants';
import { createUserGetCookie, getCurrentUser, signOut } from '../../test/utils';
import request  from 'supertest';
import app from '../../app';


it('has a route handler listening at api path/tickets for ', async ( ) => {

    const response = await request( app )
        .post( PATHS.tickets )
        .send("")
        
    expect( response.status ).not.toEqual( 404 )
})
it('cannot be accessed if user is not signed in', async ( ) => {

    const response = await request( app )
    .post( PATHS.tickets )
    .send({})
    
    expect( response.status ).toBe( 401 )
    return

})
it('returns an error if price is invalid', async ( ) => {
    const cookie = await createUserGetCookie( "jay@gmail.com", "lkhjsaddkl", 201 );

    
    const response = await request( app )
        .post( PATHS.tickets )
        .set('Cookie', cookie )
        .send({
            title: "Title Valid",
            price: ''
        });

        console.warn({response})
        
    expect( response.status ).toBe( 400 )
    return;
})
it('returns an error if title is invalid', async ( ) => {

    const cookie = await createUserGetCookie( "jay@gmail.com", "lkhjsaddkl", 201 );

    
    const response = await request( app )
        .post( PATHS.tickets )
        .set('Cookie', cookie )
        .send({
            title: "",
            price: 18
        });

    console.warn({response})

        
    expect( response.status ).toBe( 400 )
    return;
})
it('', async ( ) => {
    return;

})
it('', async ( ) => {
    return;

})