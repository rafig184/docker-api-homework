
import express, { Request, Response, NextFunction } from "express"


const app = express();
const port = 4200

app.get("/health-check", function (req: Request, res: Response, next: NextFunction) {
    res.send(`API IS OK ${new Date().toISOString()}`)
})



app.listen(port, () => {
    console.log({ message: `Api is running on Port ${port}` });
})

