const express = require('express');
const cookieParser = require('cookie-parser');
const url = require("./mongo-config/config").url;
const indexRouter = require('./routes/index');
const characterRouter = require('./routes/character');
const authRouter = require('./routes/auth');
const mongoose = require("mongoose");
const passport = require("passport");
const cookieSession = require("cookie-session");
const cors = require("cors");
const app = express();

app.use(cors());

//app.set('trust proxy', 1) // trust first proxy
app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: ["tempkey"]
}));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", (err) => {
  console.log("connection error:" + err);
});
db.once("open", () => {
  console.log(`Connected to MongoDB`);
});


app.use('/', indexRouter);
app.use('/character', characterRouter);
app.use('/auth', authRouter);

app.listen(5000, () => {
    console.log("API server listening on port 5000");
})
module.exports = app;
