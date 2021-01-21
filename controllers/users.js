const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

module.exports = {
  signup,
  login,
  checkEmail,
};

async function signup(req, res) {
  const user = new User(req.body);
  try {
    await user.save();
    const token = createJWT(user);
    res.json({ token });
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}

async function login(req, res) {
  console.log(req.body)
  try {
    const user = await User.findOne({email: req.body.email});
    console.log(user, ' this user', !user, !!user)
    if (!user) return res.status(401).json({err: 'controllers.users-->bad credentials, not exists'});
    user.comparePassword(req.body.pw, (err, isMatch) => {
      
      if (isMatch) {
        const token = createJWT(user);
        res.json({token});
      } else {
        return res.status(401).json({ err: 'controllers.users--> bad credentials, in not match'});
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

async function checkEmail(req, res) {
  console.log(req.body);
  try {
    const user = await User.findOne({email: req.body.email});
    console.log(user, 'MSK: this user is ', !!user)
 //   if (!user) return res.status(401).json({err: 'bad credentials'});

  } catch (err) {
    return res.status(401).json(err);
  }
}
/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    {user}, // data payload
    SECRET,
    {expiresIn: '24h'}
  );
}
