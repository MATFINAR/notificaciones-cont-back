import app from "./app/app.js";
import { config } from "dotenv";

config();

const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`el back está corriendo en el puerto ${port}`)
})