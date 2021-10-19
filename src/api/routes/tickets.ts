import express, { Request, Response } from 'express';
import { BadRequest } from '../errors';
import { currentUser,  requireAuth } from '../middlewares';
import { body, validationResult} from 'express-validator';
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
    validationResult,    
    async ( req: Request, res: Response )=> {

    const { title, price } = req.body;
    
    if( !title || !price ) throw new BadRequest("Must include a title and a price.");
    
    return res.status( 200 ).send({})
})


export default router;