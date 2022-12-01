import express from "express";
import * as dotenv from 'dotenv'
dotenv.config()

const app = express();
const PORT = process.env.PORT ?? 3000;

app.set("view engine", "ejs");
app.set("views", "./app/views");

app.use(express.static("./public"));

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use((req, res) => {
    res.status(404).send("404");
  })


app.listen(PORT, ()=> {
    console.log(`http://localhost:${PORT} `)
})

