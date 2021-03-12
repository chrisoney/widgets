
const { User } = require('./db/models');

const loginUser = (req, res, user) => {
  console.log("here?")
  req.session.auth = {
    userId: user.id,
  };
};

const logoutUser = (req, res) => {
  delete req.session.auth;
};

const requireAuth = (req, res, next) => {
  if (!res.locals.authenticated) {
    return res.redirect('/users/login?redir=true');
  }
  return next();
};

const restoreUser = async (req, res, next) => {
  // Log the session object to the console
  // to assist with debugging.
  // console.log(req.session);
  if (req.session.auth) {
    const { userId } = req.session.auth;
    try {
      console.log("here now");
      const user = await User.findByPk(userId);
      console.log('after');
      if (user) {
        res.locals.authenticated = true;
        res.locals.user = user;
        next();
      }
    } catch (err) {
      res.locals.authenticated = false;
      next(err);
    }
  } else {
    res.locals.authenticated = false;
    next();
  }
};

module.exports = {
  loginUser,
  logoutUser,
  requireAuth,
  restoreUser,
};