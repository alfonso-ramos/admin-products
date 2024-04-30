import express  from "express";
import colors from 'colors';
import { router } from "./router";
import db from "./config/db";

// Conectar a base de datos
async function conectDB() {
    try{
        await db.authenticate()
        db.sync()
        console.log(colors.bgBlue.white( 'Conecxion exitosa a la base de datos'))
    } catch(error) {
        console.log(error)
        console.log(colors.bgRed.white('Ocurrio un error al conectar a la base de datos'))
    }
}
conectDB()




const server = express()
server.use('/api/products', router)



export default server
