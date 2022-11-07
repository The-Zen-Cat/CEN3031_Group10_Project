const mongoose = require('mongoose');

const resourceModel = mongoose.Schema(
  {
    name: { type: String, required: true },
    isFood: Boolean,
    isShelter: Boolean,
    isClothing: Boolean,
    isHealthcare: Boolean,
    //can add things like Boolean has breakfast, lunch, dinner hours etc. and have hours specific to those
    opentime: String,
    closetime: String,
    addressStreet: { type: String, required: true },
    addressCity: { type: String, required: true },
    addressState: { type: String, required: true },
    addressZip: { type: Number, required: true },
    phoneNumber: String,
    acceptsMinors: Boolean,
    acceptsAdults: Boolean,
    acceptsMen: Boolean,
    acceptsWomen: Boolean,
    isReligious: Boolean,
    description: String,
    photoURL: String //will need to find a place to stash some photos and link - might be a bit tricky
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Resource_Model', resourceModel);
