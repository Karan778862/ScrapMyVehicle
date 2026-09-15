const checkAdminPassword = (req, res, next) => {
  const adminPassword = process.env.ADMIN_PASSWORD;
  const providedPassword = req.headers['x-admin-password'];

  if (!adminPassword) {
    console.warn('⚠️ ADMIN_PASSWORD is not set in environment variables');
    return res.status(500).json({ message: 'Server configuration error' });
  }

  if (providedPassword === adminPassword) {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized. Invalid admin password.' });
  }
};

export default checkAdminPassword;
