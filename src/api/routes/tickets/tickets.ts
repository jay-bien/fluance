import express, { Request, Response } from 'express';
import { BadRequest, DatabaseConnectionError } from '../../errors';
import { currentUser,  requireAuth, validateRequest } from '../../middlewares';
import { body, validationResult} from 'express-validator';
import { Ticket } from '../../models';
import { Tickets } from '..';
import { NotFoundError } from '../../errors/404';
const router = express.Router( );


router.post('/',
    currentUser,
    requireAuth,
    [
        body('title')
            .not()
            .isEmpty()
            .withMessage("Title cannot be empty"),

        body('price')
            .not()
            .isEmpty()
            .withMessage("Price cannot be empty"),
        body('price')
            .isFloat({ gt: 0})
            .withMessage("Price must be greater than 0.")
    ],
    validateRequest,    
    async ( req: Request, res: Response )=> {

    const { title, price } = req.body;
    const id = req.currentUser!.id;
    

    
    if( !title || !price ) throw new BadRequest("Must include a title and a price.");

    let ticket;
    try {
        ticket = Ticket.build( { title, price, created_by : id }  );
        await ticket.save( );
    } catch( e ){
        console.log( { e } );
        throw new DatabaseConnectionError("We cannot complete this request.");
    }

    
    
    return res.status( 201 ).send( ticket )
})


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

            console.log({ e });
            throw new NotFoundError();


        }

        return;

    }
    )


export default router;