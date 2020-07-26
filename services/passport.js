const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true,
    },

    // using promises
    // (accessToken, refreshToken, profile, done) => {
    //   // console.log('access token: ', accessToken);
    //   // console.log('refresh token: ', refreshToken);
    //   // console.log('profile: ', profile);
    //   User.findOne({ googleId: profile.id }).then((existingUser) => {
    //     if (existingUser) {
    //       // we already have a record with the given profile ID
    //       // console.log('User already present in DB ', existingUser);
    //       done(null, existingUser);
    //     } else {
    //       // we don't have a user with this ID, make a new record
    //       new User({ googleId: profile.id })
    //         .save()
    //         .then((user) => done(null, user));
    //     }
    //   });
    // },

    //using async and await
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        return done(null, existingUser);
      }

      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    },
  ),
);
