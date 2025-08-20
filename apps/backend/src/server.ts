import app from "./app";
import {logger} from "./utils"
const PORT = 7890
const startServer = ()=>{
    app.listen(PORT, ()=>{
        logger.info(`Server is running on http://localhost:${PORT}`)
    })
}

startServer();
