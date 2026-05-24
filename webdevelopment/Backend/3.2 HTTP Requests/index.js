import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
res.send("<h1>Hello</h1>");
});

app.get("/home", (req, res) => {
res.send("<h1>home page</h1><p>this is the home page</p>");
});

app.get("/karnataka",(req,res)=>{
    res.send("this is karnataka state <a href='https://www.karnataka.gov.in/'>visit website</a>");
    
});
app.listen(port, () => {
console.log(`Server started on port ${port}`);
});
