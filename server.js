import express from "express";
import expressEjsLayouts from "express-ejs-layouts";

import path from 'path';
import {fileURLToPath} from 'url';
import index from "./routes/index.js";

import config from "./env.js";

import mongoose from "mongoose";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


const app = express();

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressEjsLayouts)
app.use(express.static('public'))


app.use('/v1/', index);

mongoose.connect(config.MONGODB_URI);

mongoose.connection.on('connected', () => {
    

    app.listen(config.PORT, ()=>{
        console.log(`server is running http://localhost:${config.PORT}`);
        });

});

