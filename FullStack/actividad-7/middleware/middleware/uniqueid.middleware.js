import { v4 as uuidv4 } from 'uuid';

const uniqueIdMiddleware =(req, res, next)=>{
    const nueviId= uuidv4()
    req.uniqueId = nueviId
    console.log(`estoy en uniqueid middleware : ${nueviId}`)
    next();
}

export default uniqueIdMiddleware