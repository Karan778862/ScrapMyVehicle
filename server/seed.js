import mongoose from 'mongoose';
import dotenv from 'dotenv';
import City from './models/City.js';

dotenv.config();

const cities = [
  {
    slug: 'delhi',
    cityName: 'Delhi',
    heroTitle: 'BEST CAR SCRAP DEALER IN DELHI NCR',
    heroBgImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1920&q=80',
    priceText: 'Get up to ₹50,000 extra in Delhi'
  },
  {
    slug: 'mumbai',
    cityName: 'Mumbai',
    heroTitle: 'TOP RATED VEHICLE SCRAPPING IN MUMBAI',
    heroBgImage: 'https://images.unsplash.com/photo-1522256488331-50e56037e543?auto=format&fit=crop&w=1920&q=80',
    priceText: 'Best scrap rates in Maharashtra'
  }
];

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('Connected to MongoDB. Seeding data...');
    
    // Clear existing
    await City.deleteMany({});
    
    // Insert new
    await City.insertMany(cities);
    
    console.log('✅ Seeding completed!');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Error seeding data:', err);
    process.exit(1);
  });
