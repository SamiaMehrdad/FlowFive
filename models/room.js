const mongoose = require('mongoose');


const roomSchema = new mongoose.Schema({
  owner: { type: mongoose.Types.ObjectId, ref:"User"},  
  message: { type: String, default: "Come to my play room" },
  ip: String, // ip of room owner device
  access: { type: String, 
            unique:true, 
            sparse: true},  //access code to send over email, 12 digits number
  status:{  type: String, enum: ['close','wait','run'], default: 'close'},
  class: {  type: String, 
            enum: ['private', 'public','audience','develop','unknown'], 
            default: 'private'},
  acceptAudience: { type: String, 
                    enum: ['friends', 'all','none',], 
                    default: 'friends'},
  audienceChat: { type: Boolean,
                  default: true },
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
