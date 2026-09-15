import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import City from '../models/City.js';
import checkAdminPassword from '../middleware/authMiddleware.js';

const router = express.Router();

// Ensure uploads directory exists
const uploadsDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Configure Multer for Image Upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 2 * 1024 * 1024 }, // 2MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only images are allowed'));
    }
  }
});

// GET all cities (for admin panel or sitemap)
router.get('/', async (req, res) => {
  try {
    const cities = await City.find({}).sort({ createdAt: -1 });
    res.json(cities);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// GET single city by slug (used by CityLandingPage.jsx)
router.get('/:slug', async (req, res) => {
  try {
    const city = await City.findOne({ slug: req.params.slug, isActive: true });
    
    if (!city) {
      return res.status(404).json({ message: 'City not found or is paused' });
    }
    
    res.json(city);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// POST verify password
router.post('/verify-password', checkAdminPassword, (req, res) => {
  res.json({ success: true, message: 'Password is correct' });
});

// POST new city (Admin use only) with Image Upload
router.post('/', checkAdminPassword, upload.single('heroBgImageFile'), async (req, res) => {
  try {
    const { slug, cityName, heroTitle, priceText } = req.body;
    let heroBgImage = req.body.heroBgImage || '/images/hero-bg.jpg';

    // If an image was uploaded, use the new file path
    if (req.file) {
      heroBgImage = '/uploads/' + req.file.filename;
    }

    const newCity = new City({
      slug,
      cityName,
      heroTitle,
      heroBgImage,
      priceText
    });

    const savedCity = await newCity.save();
    res.status(201).json(savedCity);
  } catch (error) {
    if (req.file) {
      // Clean up uploaded file if DB save fails
      fs.unlinkSync(req.file.path);
    }
    if (error.code === 11000) {
      return res.status(400).json({ message: 'City slug already exists' });
    }
    res.status(400).json({ message: 'Invalid data', error: error.message });
  }
});

// PATCH toggle active status
router.patch('/:id/toggle', checkAdminPassword, async (req, res) => {
  try {
    const city = await City.findById(req.params.id);
    if (!city) return res.status(404).json({ message: 'City not found' });
    
    city.isActive = !city.isActive;
    await city.save();
    res.json({ message: 'Status updated', isActive: city.isActive });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// DELETE a city
router.delete('/:id', checkAdminPassword, async (req, res) => {
  try {
    const city = await City.findById(req.params.id);
    if (!city) return res.status(404).json({ message: 'City not found' });

    // If there is an uploaded image, delete it to save space
    if (city.heroBgImage && city.heroBgImage.startsWith('/uploads/')) {
      const imagePath = path.join(process.cwd(), city.heroBgImage);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await City.findByIdAndDelete(req.params.id);
    res.json({ message: 'City deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;
