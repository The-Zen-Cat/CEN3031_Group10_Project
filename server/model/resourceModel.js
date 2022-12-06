const mongoose = require('mongoose');

const resourceModel = mongoose.Schema(
  {
    name: { type: String, required: true },
    isFood: Boolean,
    isShelter: Boolean,
    isClothing: Boolean,
    isHealthcare: Boolean,
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
    photoURL: String,
    URL: String,
    mapsID: String
  },
  { collection: 'real_resources' },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Resource_Model', resourceModel);
