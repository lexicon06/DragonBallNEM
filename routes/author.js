import express from "express";
import Author from "../models/authors.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.render("authors/index", { author: new Author() });
});

router.get("/new", (req, res) => {
    res.render("authors/new", { author: new Author() });
});

router.post("/", (req, res) => {
    const author = new Author({
        name: req.body.name,
    });

    author.save()
        .then(savedAuthor => {
            // Handle successful save
            res.redirect("/authors");
        })
        .catch(err => {
            res.render("authors/new", {
                author: author,
                errorMessage: 'Error creating Author',
            });
        });

    // Note: The following line will send the name back to the client.
    // You may want to remove it or handle it differently.
    //res.send(req.body.name);
});

export default router;
