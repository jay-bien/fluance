import { Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';


interface UserPayload {
    id: string,
    email: string
}
declare global {
    namespace Express {
        interface Request {
            currentUser?: UserPayload
        }
    }
}

export const currentUser = ( req: Request, res: Response, next: NextFunction ) => {

    if( ! req.session?.jwt){
        return next();
    }
    console.log( 'try for payload')
    try{
        const payload = jwt.verify( req.session?.jwt , process.env.JWT_KEY !) as UserPayload;
        req.currentUser = payload;
        console.log({ payload});
    } catch( e ){
        console.log("Bad compare")
    }

    return next();

}