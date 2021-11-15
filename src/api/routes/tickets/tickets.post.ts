import express, { Request, Response } from 'express';
import { BadRequest, DatabaseConnectionError } from '../../errors';
import { currentUser,  requireAuth, validateRequest } from '../../middlewares';
import { body } from 'express-validator';
import { Ticket } from '../../models';
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

    throw new DatabaseConnectionError("We cannot complete this request.");
}


return res.status( 201 ).send( ticket )
})



export default router;