const mongoose = require('mongoose');

const moveSchema = new mongoose.Schema({
    counter: { type: Number, default: 1 },
    player: { type: mongoose.Types.ObjectId, ref:"User"},
    from:   Number,
    to: Number,
}, {
  timestamps: true
});

const roundSchema = new mongoose.Schema({
  host: { type: mongoose.Types.ObjectId, ref:"Room"},
  numOfPlayers: { type: Number, default: 2, max: 4},
  gameType:{type: String, 
            default: "flowfive", 
            enum: ['flowfive','pentrategy','foursvigor'] },
  start: { type: Date, default: Date.now },
  end:  Date,
 // players:  [{ type: mongoose.Types.ObjectId, ref:"User"}],
 // players are host quests
  timer:   { type: Number, default: 0 },
  blindMode: { type: Boolean, default: false },
  tradeMode: { type: Boolean, default: false },
  isActive: { type: Boolean, default: false },
  players: [{ type: mongoose.Types.ObjectId, ref:"User"}],
  winner: { type: mongoose.Types.ObjectId, ref:"User"},
  moves: [{ type: mongoose.Types.ObjectId, ref:"Move"}],
}, {
  timestamps: true
});

roundSchema.set('toJSON', {
  transform: function(doc, ret) {
    return ret;
  }
});

// Need this for .populate
roundSchema.set('toObject', {
  transform: (doc, ret, opt) => {
   return ret;
  }
})


module.exports = mongoose.model('Round', roundSchema);
