import express, { Request, Response } from 'express';


const router = express.Router();



router.delete( '/', ( req: Request, res: Response ) => {


    return res.status( 200 ).send({"Delete"})
})