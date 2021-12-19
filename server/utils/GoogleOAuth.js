import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth2';
import dotenv from "dotenv";
dotenv.config();

//Google Auth Strategy
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL,
    passReqToCallback   : true
  },
    function(request, accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
));

//Serialize the user
passport.serializeUser(function(user, done) {
    return done(null, user);
});
  
//Deserialize the user
passport.deserializeUser(function(user, done) {
    return done(null, user);
});