const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const GameSetting = new mongoose.Schema({
    Game: String,
    Time: Number,
    TimeoutKiller: Boolean,
    BlindMode: Boolean,
    TradeMode: Boolean,
}, {
  timestamps: true
});

const invitationSchema = new mongoose.Schema({
  Message: String,
  Sender: { type: mongoose.Types.ObjectId, ref:"User"},
  Parties:  [{ type: mongoose.Types.ObjectId, ref:"User"}],
  GameSetting: { type: mongoose.Types.ObjectId, ref:"GameSetting"}
}, {
  timestamps: true
});

invitationSchema.set('toJSON', {
  transform: function(doc, ret) {
    return ret;
  }
});

// Need this for .populate
invitationSchema.set('toObject', {
  transform: (doc, ret, opt) => {
   return ret;
  }
})


module.exports = mongoose.model('Invitation', roundSchema);
