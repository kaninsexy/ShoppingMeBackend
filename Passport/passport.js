const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const db = require('../models');

const option = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET,
};

const jwtStrategy = new Strategy(option, async (payload, done) => {
  const idFromToken = payload.id;
  const user = await db.User.findOne({ where: { id: idFromToken } });

  if (user) {
    done(null, user);
  } else {
    done(null, false);
  }
});

passport.use('jwt', jwtStrategy);
