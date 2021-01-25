const mongoose = require('mongoose');

const moveSchema = new mongoose.Schema({
    player: { type: mongoose.Types.ObjectId, ref:"User"},
    from:   Number,
    to: Number,
}, {
  timestamps: true
});

const roundSchema = new mongoose.Schema({
  title: String,
  host: { type: mongoose.Types.ObjectId, ref:"User"},
  start: { type: Date, default: Date.now },
  end:  Date,
  players:  [{ type: mongoose.Types.ObjectId, ref:"User"}],
  timer:   { type: Number, default: 0 },
  version: { type: Number, default: 0 },
  isActive: { type: Boolean, default: false },
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
