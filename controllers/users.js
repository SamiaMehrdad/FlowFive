const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;
const Round = require('../models/round')

module.exports = {
  signup,
  login,
  checkEmail,
  getFriends,
  addFriend,
  removeFriend,
};

//----------------------------------------
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
//-----------------------------------------
async function login(req, res) {

    //TODO: DEBUG DUMMY REMOVE THIS
// const round = new Round ({
//     title: "Again title?",
//     host: '600cccf0947c76474f391540',
// });
//  await round.save();
//  console.log("ONE DUMMY ROUND SAVED");
 //TODO--------------------------------
  console.log ("HIT FROM -------> function ", 
                arguments.callee.toString().match(/function ([^\(]+)/)[1]);
  try {
    const user = await User.findOne({email: req.body.email});
    console.log(user, ' this user', !user, !!user)
    if (!user) return res.status(401).json({err: 'controllers.users-->user by given email not exists'});
    user.comparePassword(req.body.pw, (err, isMatch) => {
    
      if (isMatch) {
        const token = createJWT(user);
        res.json({token});
      } else {
        return res.status(401).json({ err: 'controllers.users--> password not match'});
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }


}
//------------------------------------------
async function checkEmail(req, res) {
  console.log("MSK checkEmail, req.body ----> ",req.body);
  try {
    const user = await User.findOne({email: req.body.email});
    console.log(user, '---------- MSK checkEmail: this user is ', !!user)
    return res.jason(user);
 //   if (!user) return res.status(401).json({err: 'bad credentials'});
  } catch (err) {
    return res.status(401).json(err);
  }
}

//----------------------------------------
function getFriends()
{
console.log ("HIT FROM -------> function ", 
              arguments.callee.toString().match(/function ([^\(]+)/)[1]);
}

//----------------------------------------
function addFriend()
{
console.log ("HIT FROM -------> function ", 
              arguments.callee.toString().match(/function ([^\(]+)/)[1]);
}

//----------------------------------------
function removeFriend()
{
console.log ("HIT FROM -------> function ", 
              arguments.callee.toString().match(/function ([^\(]+)/)[1]);
}

/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    {user}, // data payload
    SECRET,
    {expiresIn: '24h'}
  );
}
