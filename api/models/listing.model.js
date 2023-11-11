import mongoose from 'mongoose';

const listingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    square: {
      type: String,
      required: true,
    },
    beds: {
      type: String,
      required: true,
    },
    baths: {
      type: String,
      required: true,
    },
    description1: {
      type: String,
      required: true,
    },
    description2: {
      type: String,
      required: true,
    },
    description3: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    map: {
      type: String,
      required: true,
    },
    is_rent: {
      type: Boolean,
      required: true,
    },
    features: {
      type: Array,
      required: false,
    },
    imageUrls: {
      type: Array,
      required: false,
    },
    userRef: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model('Listing', listingSchema);

export default Listing;
