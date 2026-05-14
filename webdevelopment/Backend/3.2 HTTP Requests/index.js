import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
res.send("<h1>Hello</h1>");
});

app.get("/home", (req, res) => {
res.send("<h1>home page</h1><p>this is the home page</p>");
});


app.listen(port, () => {
console.log(`Server started on port ${port}`);
});
