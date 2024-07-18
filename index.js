import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/",(req,res) =>{
    res.render("index.ejs");
})

app.get("/about",(req,res) =>{
    res.render("about.ejs");
})

app.get("/blog",(req,res) =>{
    res.render("blog.ejs");
})

app.get("/projects",(req,res) =>{
    res.render("projects.ejs");
})

app.listen(port,() =>{
    console.log(`Server is running on port ${port}`);
});

