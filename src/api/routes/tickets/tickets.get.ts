import express, { Request, Response } from 'express';


const router = express.Router( );
import { BadRequest, DatabaseConnectionError, NotFoundError } from '../../errors';
import { currentUser,  requireAuth } from '../../middlewares';
import { Ticket } from '../../models';




router.get( '/',
currentUser,
requireAuth, 
async  ( req: Request, res: Response ) => {  


try{
    const tickets = await Ticket.find();
    return res.status( 200 ).send( {tickets} );
} catch( e ){
    console.log( { e } );

    throw new DatabaseConnectionError("We cannot complete the request");
}


return;

})

router.get( '/:ticket_id', 
currentUser,
requireAuth,
async ( req: Request, res: Response ) => {


const ticketId = req.params.ticket_id;

if( !ticketId ) throw new BadRequest("Cannot retrieve that ticket.");

try {

const ticket = await Ticket.findById( ticketId );
if( ticket ) return res.status( 200 ).send({ ticket });
throw new NotFoundError( );

} catch( e ){

throw new NotFoundError();


}

return;

}
)


export default router;
