import express from "express";

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

app.get("/", (req, res) => {
    res.send("<h1>Hello World！</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1><p>My name is HaoHao</p>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact</h1><p>Phone:0912345678</p>");
});