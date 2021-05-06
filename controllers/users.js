const User = require('../models/user');
const jwt = require('jsonwebtoken');
const path = require('path');
const SECRET = process.env.SECRET;


module.exports = {
  setTempUser,
  signup,
  login,
  checkEmail,
  getFriends,
  addFriend,
  removeFriend,
  searchUsers,
};

//----------------------------------------
async function setTempUser(req, res) {
  console.log("---------------------Create TEMP user--------------------------");
  try {
    let randomIndex=Math.floor( Math.random()*100000 ).toString()
        + Math.floor( Math.random()*100000 ).toString(); 

    let tempUser = new User({
      email:`${randomIndex}@2.2` ,
      tempName: `P${randomIndex}`,
    });

    tempUser.save( (err, result) =>{
      if(err)
        console.log(err);
      else
      {
      //  console.log(result);
        return res.json(result);
      }  
    })

    // const user = await User.updateOne(  {email: '2@2.2'},
    //                               {tempName: `P${randomIndex}`} ,
    //                               {upsert: true, setDefaultsOnInsert: true},
    // us=> console.log("Temp User = ", us));
                              
  //  return res.json(user);

  } catch(err){
    console.log(err)
    return res.status(401).json(err);
  }
}

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
    //console.log(user, ' this user', !user, !!user)
    if (!user) return res.status(401).json({err: 'controllers.users-->user by given email not exists'});
    user.comparePassword(req.body.pw, (err, isMatch) => {
    
      if (isMatch) {
        const token = createJWT(user);
        //remove temp user
        User.findByIdAndDelete(req.body.tempUser,(err , result)=>{
          console.log("Deleted ***");
        });
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
    //console.log(' MSK checkEmail: this user is ', !!user, user);
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
  //console.log("MSK searchUsers, req.body.partial ----> ",req.body.partial); //ok
  try {
    const regex = new RegExp( req.body.partial, 'i');
   // console.log("REGX = ",regex);
    const players = await User.find(  
                    { $or: [
                            { nickName: regex, 
                            },
                            { name: regex,
                            },
                           ] 
                           , role: "player",
                    } ,
                     'avatar nickName points name' );
    // console.log("ALL PLAYERS ---> ",players);
    return res.json(players);
  } catch (err) {
    console.log("MSK get users error : --->", err);
    return res.status(401).json(err);
  }
}
// OPT this
//----------------------------------------
async function getFriends(req, res)
{
  // find friends of given user: req.body.uid
  try {
    //const friendsIds = await User.find({_id: req.body.uid}).populate('friends').exec()
    const friendsIds = await User.find({_id: req.body.uid}, 'friends');
   // console.log("getFriends friendsIds --->", friendsIds );
    const friends = await User.find( {_id: {$in: friendsIds[0].friends}}, 'avatar nickName');
   // console.log("LIST OF FRIENDS ---> ",friends);
    return res.json(friends);
  } catch (err) {
    console.log("MSK getFriends error : --->", err);
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
function removeFriend(req, res)
{

let uid = req.body.uid;
let fid = req.body.fid;
 
User.findOne( {_id: uid}, (err, user)=>{ // No need for error checking because it is not user-called
              user.friends.splice( user.friends.indexOf(fid), 1);
              user.save(); 
            } );       
}

/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    {user}, // data payload
    SECRET,
    {expiresIn: '24h'}
  );
}
