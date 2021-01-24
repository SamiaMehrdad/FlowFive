const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const moveSchema = new mongoose.Schema({
    player: { type: mongoose.Types.ObjectId, ref:"User"},
    from:   number,
    to: number,
}, {
  timestamps: true
});

const roundSchema = new mongoose.Schema({
  title: String,
  Host: { type: mongoose.Types.ObjectId, ref:"User"}
  Start: Date,
  End:  Date,
  Players:  [{ type: mongoose.Types.ObjectId, ref:"User"}],
  Timer:   Number,
  Version: Number,
  isActive: Boolean,
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
