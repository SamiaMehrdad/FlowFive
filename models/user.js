const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const userSchema = new mongoose.Schema({
  name: {Type: String}, // optional real name to be searchable
  email: {type: String, 
          required: true, 
          lowercase: true, 
          unique: true,
          sparse: true },
  password: String,
  nickName: { type: String, 
              default: "Player", 
              maxlength: 12 },
  tempName: { type: String, // to be used for try unknown playing 
              maxlength: 12 },              
  avatar: { type: String, 
            default: "avatarURL" },
  color: {  type: String, 
            default: "red" },
  enroll: { type: Date, 
            default: Date.now },
  totalPlays: { type: Number, 
                default: 0, },
  totalWins: {  type: Number, 
                default: 0 },
  points: { type: Number, 
            default: 0, 
            required: true, },
  rank: { type: Number, 
          default: 0, 
          required: true, },
  role: { type: String, 
          default: "player", 
          enum: ['player','reporter','audience','admin','super'] },
  friends: [{ type: mongoose.Types.ObjectId, ref:"User"}],
  msg: { type: mongoose.Types.ObjectId, ref:"Message"},
}, {
  timestamps: true
});

userSchema.set('toJSON', {
  transform: function(doc, ret) {
    // remove the password property when serializing doc to JSON
    delete ret.password;
    return ret;
  }
});

// Need this for .populate
userSchema.set('toObject', {
  transform: (doc, ret, opt) => {
   delete ret.password;
   return ret;
  }
})

// DO NOT DEFINE instance methods with arrow functions, 
// they prevent the binding of this
userSchema.pre('save', function(next) {
  // 'this' will be set to the current document
  const user = this;
  // check to see if the user has been modified, if not proceed 
  // in the middleware chain
  if (!user.isModified('password')) return next();
  // password has been changed - salt and hash it
  bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
    if (err) return next(err);
    // replace the user provided password with the hash
    user.password = hash;
    next();
  });
});

userSchema.methods.comparePassword = function(tryPassword, cb) {

  // 'this' represents the document that you called comparePassword on
  bcrypt.compare(tryPassword, this.password, function(err, isMatch) {
    if (err) 
      return cb(err);

    cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', userSchema);
