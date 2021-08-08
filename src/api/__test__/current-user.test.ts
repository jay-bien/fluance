import  { email, password } from './constants';
import { createUserGetCookie, getCurrentUser } from '../../test/utils';



it( 'Returns a 400 error if no cookie.',  async ( ) => {

    // func: createUserGetCookie( ) from utils
    //  args: ( email, password, expectedStatusCode )
    // rets: cookie 

    const cookie = await createUserGetCookie( email, password, 201 );
    const user = await getCurrentUser( 400 );

    return;

})

it( 'Returns a 200 and user if valid cookie.',  async ( ) => {

    // func: createUserGetCookie( ) from utils
    //  args: ( email, password, expectedStatusCode )
    // rets: cookie 

    const cookie = await createUserGetCookie( email, password, 201 );

    // func: getCurrentUser( ) from utils
    //  args: ( statusCode, cookie = null )
    // rets: { user{ ... } } || {user { null } }

    const user1 = await getCurrentUser( 200, cookie );

    console.log({ user1 });
    return;

})