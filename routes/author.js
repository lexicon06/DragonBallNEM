import express from "express";

import Author from "../models/authors.js"

const router = express.Router();

router.get("/", (req, res) => {
    res.render("authors/index", { author: new Author() });
});
router.get("/new", (req,res) => {
    res.render("authors/new", { author: new Author() });
})


router.post("/", (req,res) =>{
    const author = new Author({
        name: req.body.name
    });
    
    author.save((err,author) => {
        if(err){
            res.render("/v1/authors/new",{
                author: author,
                errorMessage: 'Error creating Author'
            })
        }else{
            //res.redirect(`v1/authors/${newAuthor.id}`)
            res.redirect("/v1/authors");
        }
    })
    
    res.send(req.body.name);
})



export default router;
