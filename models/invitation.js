const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const GameSetting = new mongoose.Schema({
    game: { type: String, default: "FlowFive" },
    time: { type: Number, default: 0 },
    timeoutKiller: { type: Boolean, default: false },
    blindMode: { type: Boolean, default: false },
    tradeMode: { type: Boolean, default: false },
}, {
  timestamps: true
});

const invitationSchema = new mongoose.Schema({
  message: String,
  sender: { type: mongoose.Types.ObjectId, ref:"User"},
  parties:  [{ type: mongoose.Types.ObjectId, ref:"User"}],
  gameSetting: { type: mongoose.Types.ObjectId, ref:"GameSetting"}
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


module.exports = mongoose.model('Invitation', invitationSchema);
