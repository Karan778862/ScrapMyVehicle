import mongoose from 'mongoose';

const citySchema = new mongoose.Schema({
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  cityName: {
    type: String,
    required: true,
  },
  heroTitle: {
    type: String,
    required: true,
  },
  heroBgImage: {
    type: String,
    default: '/images/hero-bg.jpg'
  },
  priceText: {
    type: String,
    default: 'Get up to ₹50,000 extra'
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

const City = mongoose.model('City', citySchema);

export default City;
