const localStrategy = require('passport-local').Strategy

function initializer(passport){
   passport.use(new localStrategy({email: 'email'}))
} 