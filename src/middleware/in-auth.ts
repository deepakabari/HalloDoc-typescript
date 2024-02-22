import jwt from 'jsonwebtoken';
import httpCode from '../constants/http.constant';
import messageConstant from '../constants/message.constant';

const SECRET: string | undefined = process.env.SECRET;

export default (req: any, res: any, next: any): void => {
    const authHeader: string | undefined = req.get("Authorization");

    if (!authHeader) {
        const error: any = messageConstant.NOT_AUTHORIZED;
        error.statusCode = httpCode.UNAUTHORIZED;
        throw error;
    }

    const token: string = authHeader.split(" ")[1];
    let decodedToken: any;

    try {
        decodedToken = jwt.verify(token, SECRET);
    } catch (err) {
        err.statusCode = httpCode.INTERNAL_SERVER_ERROR;
        throw err;
    }
    
    if (!decodedToken) {
        const error: any = messageConstant.NOT_AUTHORIZED;
        error.statusCode = httpCode.UNAUTHORIZED;
        throw error;
    }

    req.userId = decodedToken.user.userId;
    next();
};
