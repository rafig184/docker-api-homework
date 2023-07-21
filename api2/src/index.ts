import dotenv from "dotenv"
import express, { Request, Response, NextFunction } from "express"

dotenv.config()
const app = express();
// const port = 4200

app.get("/health-check", function (req: Request, res: Response, next: NextFunction) {
    res.send(`API IS OK ${new Date().toISOString()}`)
})



app.listen(process.env.PORT, () => {
    console.log({ message: `Api is running on Port ${process.env.PORT}` });
})

