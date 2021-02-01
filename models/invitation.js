const mongoose = require('mongoose');


const invitationSchema = new mongoose.Schema({
  sender: { type: mongoose.Types.ObjectId, ref:"Room"},
  gameType: {type: String, default: "flowfive"},
  message: String,
  date: Date, // if a certain time is set  to play
  
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
