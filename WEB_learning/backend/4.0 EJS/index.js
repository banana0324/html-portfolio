import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

// app.post("/submit", (req, res) => {
//     res.render("index.ejs",
//     {name: req.body["name"]});
// }); 

const d = new Date();
let day = d.getDay();
let result = "";
if(day === 1 || 
   day === 2 || 
   day === 3 || 
   day === 4 || 
   day === 5 ){
    result = "weekday";
}
else if(day === 0 || 
    day === 6){
    result = "weekend";
}

app.get("/", (req, res) => {
    res.render(__dirname + "/view/index.ejs",
        {week: result}
    );
  });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});