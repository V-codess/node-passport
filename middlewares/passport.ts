import express from "express";
const passport = require('passport')
const session = require('express-session')
const app = express();

app.use(session({
    secret: "secret",
    resave: false ,
    saveUninitialized: true ,
}));
app.use(passport.initialize());
app.use(passport.session());
