import express, {Request, Response} from "express";
import bodyParser from "body-parser";
import database from "./connect/connect";
import dotenv from "dotenv";
import router from "./routes/passport";
import passport from "passport";

const initializePassport = require("./passport-config");
initializePassport(passport)
dotenv.config();
const port = 8080
const app = express();
app.set('view-engine', 'ejs');

app.get('/', (req: Request, res: Response)=>{
   res.render('index.ejs')
});
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router);
const startServer = async() =>{
    try {
        const url: any = process.env.URL;
        await database(url);
        app.listen(port, ()=> console.log(`Running server at ${port}`))
    } catch (error) {
        console.log(error)
    }
}

startServer()