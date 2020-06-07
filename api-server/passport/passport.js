const passport = require('passport');
const Strategy = require('passport-local').Strategy;
const User = require("../models/user");

passport.use(new Strategy({
    usernameField: 'email',
    passwordField: 'password',
    proxy: true
  },
  (username, password, done) => {
    User.findOne({ email: username }, (err, user) => {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      user.verifyPassword(password).then((match) => {
        if(!match){
          return done(null, false)
        }else{
          return done(null, user);
        }
      });
    });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

module.exports = passport;
