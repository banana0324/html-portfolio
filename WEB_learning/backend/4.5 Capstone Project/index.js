import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let history = [];

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/submit", (req, res) => {
    let posted = req.body["name"]+" - "+req.body["post"];
    history.push(posted);
    console.log("check : "+history);
    res.render("index.ejs",{contractOfPost:history});
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
