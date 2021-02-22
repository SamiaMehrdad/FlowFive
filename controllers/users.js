const User = require('../models/user');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;


module.exports = {
  signup,
  login,
  checkEmail,
  getFriends,
  addFriend,
  removeFriend,
  searchUsers,
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


  // console.log ("HIT FROM -------> function ", 
  //               arguments.callee.toString().match(/function ([^\(]+)/)[1]);
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
    console.log(' MSK checkEmail: this user is ', !!user, user);
    if (!user) 
      return res.status(401).json({err: 'Email not registerd!'});
    return res.json(user);
    
  } catch (err) {
    console.log("MSK Email check error : --->", err);
    return res.status(401).json(err);
  }
}

//------------------------------------------
async function searchUsers(req, res) {
  //console.log("MSK searchUsers, req.body ----> ",req.body);
  try {
    const players = await User.find( {role: "player"}, 'avatar nickName points');
    console.log("ALL PLAYERS ---> ",players);
    return res.json(players);
  } catch (err) {
    console.log("MSK Email check error : --->", err);
    return res.status(401).json(err);
  }
}
//----------------------------------------
async function getFriends(req, res)
{

  try {
    // Consider example
    // const posts = await Post.find({}).populate('user').exec()
    const friends = await User.find( {_id: {$in: req.body.friends}}, 'avatar nickName');
    console.log("LIST OF FRIENDS ---> ",friends);
    return res.json(friends);
  } catch (err) {
    console.log("MSK Email check error : --->", err);
    return res.status(401).json(err);
  }             
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
