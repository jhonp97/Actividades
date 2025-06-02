
/**
 *  registro de peticiones HTTP: Logger
 * 
 * crear un array vacio llamado logs en db/logs.js
 * el middleware alamacena informacion como:
 * - fecha y hora de la peticion
 * - metodo utilizado (GET, POST PUT, DELETE)
 * - URL de la peticion
 * - User-Agent de client (navegador utilizado para la peticion)
 */

import { logs } from "../data/logs.js";

const logMiddleware = (req, res, next)=>{
    const logEntry = {
        id: req.uniqueId,
        date: new Date().toISOString(),
        method: req.method,
        url: req.originalURL,
        userAgent: req.headers["user-agent"]
    }
    // console.log(logEntry)
    logs.push(logEntry); // inserto el objeto en mi DB
    next();
}

export default logMiddleware;