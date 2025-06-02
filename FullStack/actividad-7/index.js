import express from "express"
import {DOMAIN, PORT}  from "./config/config.js"
import {router} from "./routes/index.routes.js"
import { logs } from "./data/logs.js"

//import middlewares
import uniqueIdMiddleware from "./middleware/middleware/uniqueid.middleware.js"
import logMiddleware from "./middleware/logger.middleware.js"

const app = express()

// middleware
app.use(express.json())
app.use("/", express.static("public")) // pagina de bienvenida html

app.use(uniqueIdMiddleware)
app.use(logMiddleware); // registro de peticiones Http


// ruta para ver logs del sistema
app.get("/verlogs", (req, res)=>{
    res.json(logs)
})


// Rutas
app.use("/api/v1", router)


//mi pagina inicial
app.get("/", (req, res)=>{
    res.send(`bienvenidos a mi pagina de la actividad 7 en ${DOMAIN}:${PORT}`)
})

app.listen(PORT,()=>{
    console.log(`mi servidor se esta ejecutando correctamente en ${DOMAIN}:${PORT}`)
})