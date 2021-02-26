const mongoose = require('mongoose');


const roomSchema = new mongoose.Schema({
  owner: { type: mongoose.Types.ObjectId, ref:"User"},  
  title: { type: String, default: "My play room" },
  ip: String, // ip of room owner device
  access: { type: String, 
            unique:true, 
            sparse: true},  //access code to send over email, 12 digits number
  status:{  type: String, enum: ['close','open','wait','run'], default: 'close'},
  class: {  type: String, 
            enum: ['private', 'public','audience','develop','unknown'], 
            default: 'private'},
  guests: [{ type: mongoose.Types.ObjectId, ref:"User"}],         
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
