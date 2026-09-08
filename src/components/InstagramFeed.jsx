import React from 'react';
import { Instagram, Heart, MessageCircle } from 'lucide-react';

export default function InstagramFeed() {
  // Dummy Instagram posts using available assets
  const feedItems = [
    { id: 1, image: '/images/hero_banner_bg.jpg', likes: 124, comments: 12 },
    { id: 2, image: '/images/why_choose_vehicles.jpg', likes: 89, comments: 5 },
    { id: 3, image: '/images/all_vehicles.jpg', likes: 210, comments: 18 },
    { id: 4, image: '/faq/1.png', likes: 156, comments: 9 },
  ];

  return (
    <section className="instagram-feed-section">
      <div className="container">
        <div className="instagram-header">
          <div className="instagram-title-area">
            <Instagram size={28} className="instagram-icon" />
            <h2 className="instagram-heading">Follow Us on Instagram</h2>
          </div>
          <a 
            href="https://www.instagram.com/scrapmyvehicles.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-instagram-follow"
          >
            @scrapmyvehicles.in
          </a>
        </div>

        <div className="instagram-grid">
          {feedItems.map((item) => (
            <a 
              key={item.id} 
              href="https://www.instagram.com/scrapmyvehicles.in" 
              target="_blank" 
              rel="noopener noreferrer"
              className="instagram-post"
            >
              <img src={item.image} alt="Instagram feed post" className="instagram-post-img" />
              <div className="instagram-post-overlay">
                <div className="instagram-stats">
                  <div className="stat-item">
                    <Heart size={20} fill="white" />
                    <span>{item.likes}</span>
                  </div>
                  <div className="stat-item">
                    <MessageCircle size={20} fill="white" />
                    <span>{item.comments}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
