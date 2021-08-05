import express, { Request, response, Response } from 'express';
import jwt from 'jsonwebtoken';

import { currentUser }  from '../../middlewares';

const router = express.Router();



// @route POST 
// @desc sign in a user
// @access public
router.post('/', ( req: Request, res: Response ) => {

    res.send( 'User Endpoint')
    return;
})


// @route 
// @desc 
// @access 
router.get('/', currentUser, async ( req: Request, res: Response ) => {

        return res.status( 200 ).send( { user : req.currentUser || null })


    return;
})

export default router;