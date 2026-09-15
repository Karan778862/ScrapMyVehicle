import React, { useState, useEffect } from 'react';
import { PlusCircle, MapPin, Search, Trash2, ShieldCheck, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState(localStorage.getItem('admin_pwd') || '');
  const [loginError, setLoginError] = useState('');
  
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    slug: '',
    cityName: '',
    heroTitle: '',
    heroBgImage: '', // Text fallback
    priceText: ''
  });
  const [imageFile, setImageFile] = useState(null);

  // Fetch all cities on load
  const fetchCities = async () => {
    try {
      const response = await fetch('https://scrapmyvehicle.onrender.com/api/cities');
      const data = await response.json();
      setCities(data);
    } catch (err) {
      setError('Could not connect to database. Make sure Node.js server is running.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (password) {
      verifyPassword(password);
    } else {
      setLoading(false);
    }
  }, []);

  const verifyPassword = async (pwd) => {
    try {
      const response = await fetch('https://scrapmyvehicle.onrender.com/api/cities/verify-password', {
        method: 'POST',
        headers: { 'x-admin-password': pwd }
      });
      if (response.ok) {
        setIsAuthenticated(true);
        localStorage.setItem('admin_pwd', pwd);
        fetchCities();
      } else {
        localStorage.removeItem('admin_pwd');
        setPassword('');
        setLoading(false);
      }
    } catch (err) {
      setLoginError('Server connection failed. Try again.');
      setLoading(false);
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoginError('');
    setLoading(true);
    verifyPassword(password);
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_pwd');
    setIsAuthenticated(false);
    setPassword('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'cityName' && !formData.slug) {
      const autoSlug = value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
      setFormData(prev => ({ ...prev, [name]: value, slug: autoSlug }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess('');

    try {
      // Use FormData to support file uploads
      const data = new FormData();
      data.append('slug', formData.slug);
      data.append('cityName', formData.cityName);
      data.append('heroTitle', formData.heroTitle);
      data.append('priceText', formData.priceText);
      data.append('heroBgImage', formData.heroBgImage); // fallback text
      
      if (imageFile) {
        data.append('heroBgImageFile', imageFile);
      }

      const response = await fetch('https://scrapmyvehicle.onrender.com/api/cities', {
        method: 'POST',
        headers: {
          'x-admin-password': password
        },
        body: data // No Content-Type header; browser sets it automatically for FormData
      });

      const resData = await response.json();

      if (!response.ok) {
        throw new Error(resData.error || resData.message || 'Failed to add city');
      }

      setSuccess(`✅ Successfully added ${resData.cityName} page!`);
      setFormData({ slug: '', cityName: '', heroTitle: '', heroBgImage: '', priceText: '' });
      setImageFile(null);
      // Reset file input element visually
      const fileInput = document.getElementById('imageFileInput');
      if (fileInput) fileInput.value = '';

      fetchCities(); // Refresh list

      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleToggle = async (id) => {
    try {
      const res = await fetch(`https://scrapmyvehicle.onrender.com/api/cities/${id}/toggle`, { 
        method: 'PATCH',
        headers: { 'x-admin-password': password }
      });
      if (res.ok) fetchCities();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id, name) => {
    if (window.confirm(`Are you sure you want to completely delete the page for ${name}?`)) {
      try {
      const res = await fetch(`https://scrapmyvehicle.onrender.com/api/cities/${id}`, { 
        method: 'DELETE',
        headers: { 'x-admin-password': password }
      });
        if (res.ok) fetchCities();
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <div className="admin-container admin-header-flex">
          <div className="admin-header-left">
            <button onClick={() => navigate('/')} className="admin-back-btn">
              <ArrowLeft size={16} /> Back to Website
            </button>
            <h4 className="admin-page-title">
              <ShieldCheck size={24} /> Admin Portal
            </h4>
          </div>
          {isAuthenticated && (
            <button onClick={handleLogout} className="admin-back-btn" style={{ background: 'rgba(239, 68, 68, 0.2)', borderColor: 'rgba(239, 68, 68, 0.5)' }}>
              Logout
            </button>
          )}
        </div>
      </div>

      {!isAuthenticated ? (
        <div className="admin-container" style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
          <div className="admin-card" style={{ maxWidth: '400px', width: '100%' }}>
            <h4 style={{ textAlign: 'center', marginBottom: '20px' }}>Admin Login</h4>
            {loginError && <div className="admin-alert admin-alert-danger">{loginError}</div>}
            <form onSubmit={handleLoginSubmit}>
              <div className="admin-form-group">
                <label className="admin-label">Password</label>
                <input 
                  type="password" 
                  className="admin-input" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  required
                />
              </div>
              <button type="submit" className="admin-submit-btn" disabled={loading}>
                {loading ? 'Verifying...' : 'Login'}
              </button>
            </form>
          </div>
        </div>
      ) : (
      <div className="admin-container">
        <div className="admin-grid">
          
          {/* Left Column: Add New City Form */}
          <div className="admin-card">
            <h5 className="admin-card-title">
              <PlusCircle size={20} color="#2563eb" />
              Add New City Page
            </h5>
            <div className="admin-divider"></div>
            
            {error && <div className="admin-alert admin-alert-danger">{error}</div>}
            {success && <div className="admin-alert admin-alert-success">{success}</div>}

            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="admin-form-group">
                <label className="admin-label">City Name</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  name="cityName"
                  placeholder="e.g. Pune"
                  value={formData.cityName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-label">URL Slug</label>
                <div className="admin-input-group">
                  <span className="admin-input-addon">/location/</span>
                  <input 
                    type="text" 
                    className="admin-input admin-input-with-addon" 
                    name="slug"
                    placeholder="pune"
                    value={formData.slug}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="admin-form-help">This will be the web address. Keep it lowercase.</div>
              </div>

              <div className="admin-form-group">
                <label className="admin-label">Hero Headline</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  name="heroTitle"
                  placeholder="e.g. TOP RATED SCRAP DEALER IN PUNE"
                  value={formData.heroTitle}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="admin-form-group">
                <label className="admin-label">Upload Background Image (Max 2MB)</label>
                <input 
                  type="file" 
                  id="imageFileInput"
                  className="admin-input" 
                  name="heroBgImageFile"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                <div className="admin-form-help mt-2">OR Paste Image URL below if you prefer:</div>
                <input 
                  type="text" 
                  className="admin-input mt-1" 
                  name="heroBgImage"
                  placeholder="https://images.unsplash.com/..."
                  value={formData.heroBgImage}
                  onChange={handleChange}
                />
              </div>

              <div className="admin-form-group" style={{marginBottom: '24px'}}>
                <label className="admin-label">Offer Text (Optional)</label>
                <input 
                  type="text" 
                  className="admin-input" 
                  name="priceText"
                  placeholder="e.g. Get up to ₹50,000 extra in Pune"
                  value={formData.priceText}
                  onChange={handleChange}
                />
              </div>

              <button 
                type="submit" 
                className="admin-submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Saving...' : 'Publish New City Page'}
              </button>
            </form>
          </div>

          {/* Right Column: Existing Cities List */}
          <div className="admin-card">
            <div className="admin-card-header">
              <h5 className="admin-card-title m-0">
                <MapPin size={20} color="#64748b" />
                Live City Pages
              </h5>
              <div className="admin-badge-count">{cities.length} Active</div>
            </div>
            <div className="admin-divider"></div>

            {loading ? (
              <div className="admin-empty-state">Loading database...</div>
            ) : cities.length === 0 ? (
              <div className="admin-empty-state">No city pages found. Add one!</div>
            ) : (
              <div className="admin-table-container">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>City Name</th>
                      <th>URL</th>
                      <th>Status</th>
                      <th style={{textAlign: 'right'}}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cities.map((city) => (
                      <tr key={city._id} style={{ opacity: city.isActive ? 1 : 0.6 }}>
                        <td style={{fontWeight: 'bold'}}>{city.cityName}</td>
                        <td>
                          <a href={`/location/${city.slug}`} target="_blank" rel="noreferrer" className="admin-link">
                            /location/{city.slug}
                          </a>
                        </td>
                        <td>
                          {city.isActive ? (
                            <span className="admin-status-badge">Live</span>
                          ) : (
                            <span className="admin-status-badge" style={{background: '#fef3c7', color: '#b45309'}}>Paused</span>
                          )}
                        </td>
                        <td style={{textAlign: 'right'}}>
                          <div style={{display: 'flex', gap: '4px', justifyContent: 'flex-end'}}>
                            <button 
                              className="admin-icon-btn"
                              onClick={() => window.open(`/location/${city.slug}`, '_blank')}
                              title="View Page"
                            >
                              <Search size={16} />
                            </button>
                            <button 
                              className="admin-icon-btn"
                              onClick={() => handleToggle(city._id)}
                              title={city.isActive ? "Pause Page" : "Publish Page"}
                            >
                              {city.isActive ? <EyeOff size={16} color="#f59e0b" /> : <Eye size={16} color="#10b981" />}
                            </button>
                            <button 
                              className="admin-icon-btn"
                              onClick={() => handleDelete(city._id, city.cityName)}
                              title="Delete Page permanently"
                            >
                              <Trash2 size={16} color="#ef4444" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

        </div>
      </div>
      )}
    </div>
  );
}
