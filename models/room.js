const mongoose = require('mongoose');


const roomSchema = new mongoose.Schema({
  owner: { type: mongoose.Types.ObjectId, ref:"User"},  
  title: String,
  ip: String,
  access: {type:Number, unique:true},  //access code to send over email
  status:{ type: String, enum['off','accept','wait','run']},
  class: { type: String, enum ['private', 'public','audience','develop']},
}, {
  timestamps: true
});

roomSchema.set('toJSON', {
  transform: function(doc, ret) {
    return ret;
  }
});

// Need this for .populate
roomSchema.set('toObject', {
  transform: (doc, ret, opt) => {
   return ret;
  }
})


module.exports = mongoose.model('Room', roomSchema);
