import { Request, Response, NextFunction } from 'express';
import { CustomError } from '../errors';

export const errorHandler = async (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
 )=> {

    
    if( error instanceof CustomError ){
    
        return res.status( error.statusCode ).send({
            errors: error.serializeErrors()
        })
    }


    
    res.status( 400 ).send([ { msg: error.message } ] )
}