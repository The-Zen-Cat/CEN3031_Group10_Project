const mongoose = require('mongoose');

const resourceModel = mongoose.Schema(
  {
    name: { type: String, required: true },
    isFood: Boolean,
    isShelter: Boolean,
    isClothing: Boolean,
    isHealthcare: Boolean,
    openHours: [String],
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
    photoURL: String,
    websiteURL: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Resource_Model', resourceModel);