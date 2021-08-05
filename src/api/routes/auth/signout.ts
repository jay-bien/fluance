import express, { Request, Response } from 'express';

const router = express.Router();


// @route POST 
// @desc sign in a user
// @access public
router.post('/', ( req: Request, res: Response ) => {

    req.session = null;
    res.status( 200 ).send({})
    return;
})


// @route 
// @desc 
// @access 
router.get('/', ( req: Request, res: Response ) => {

    res.send( 'Sign Out Endpoint')
    return;
})

export default router;