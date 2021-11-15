import express, { Request, Response } from 'express';
import { BadRequest, DatabaseConnectionError, NotFoundError, NotAuthorizedError } from '../../errors';
import { currentUser,  requireAuth, validateRequest } from '../../middlewares';
import { body } from 'express-validator';
import { Ticket } from '../../models';
const router = express.Router( );



router.put('/:ticket_id', 
        [
            currentUser,
            requireAuth,
            body( 'title' )
                .not()
                .isEmpty()
                .withMessage("Title must be provided."),
            body( 'price' )
                .not()
                .isEmpty()
                .isInt({ gt: 0 })
                .withMessage("Price above 0 must be provided."),
            validateRequest
        ],
         async ( req:Request, res: Response ) => {


        const ticketId = req.params.ticket_id;
        const { title, price } = req.body;



        let ticket = null;

        try{
            ticket = await Ticket.findById( ticketId );
        } catch( e ){
            throw new BadRequest( "" )
        }



        if( String( ticket.created_by )  !==  String( req.currentUser!.id ) ) {
            throw new NotAuthorizedError()
        };

        if( ! ticket ) throw new NotFoundError();
    
        ticket.set({ title, price })

        await ticket.save()


        return  res.status( 200 ).send( { ticket });

})


export default router;