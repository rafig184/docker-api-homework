import axios from "axios";
import express, { Request, Response, NextFunction } from "express"


const app = express();
const port = 4100

app.get("/health-check", async function (req: Request, res: Response, next: NextFunction) {
    try {
        console.log("api running");
        const result = await axios.get("http://api2:4200/health-check")
        const { data } = result;
        console.log(data);
        return res.json(data)
    } catch (error) {
        return (error)
    }
})


app.listen(port, () => {
    console.log({ message: `Api is running on Port ${port}` });
})


