import React, { useState } from "react";
import "./HomePage.css";
import vid1 from '../assets/video_1.mp4';
import vid2 from '../assets/video_2.mp4';
import vid3 from '../assets/video_3.mp4';
import vid4 from '../assets/video_4.mp4';

const HomePage = () => {
  // State for active filter
  const [activeFilter, setActiveFilter] = useState('All Properties');
  const [quickViewData, setQuickViewData] = useState(null);
  
  // Initial properties data
  const initialProperties = [
    {
      id: 1,
      type: "For Sale",
      price: "₹75,00,000",
      address: "123 Green Park, Pune",
      beds: 3,
      baths: 2,
      area: 1800,
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      type: "For Rent",
      price: "₹35,000/month",
      address: "456 Marine Drive, Mumbai",
      beds: 2,
      baths: 2,
      area: 1200,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      type: "For Sale",
      price: "₹1,20,00,000",
      address: "789 Whitefield, Bangalore",
      beds: 4,
      baths: 3,
      area: 2500,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  // Additional properties to load
  const moreProperties = [
    {
      id: 4,
      type: "For Rent",
      price: "₹45,000/month",
      address: "101 Koramangala, Bangalore",
      beds: 3,
      baths: 2,
      area: 1500,
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 5,
      type: "For Sale",
      price: "₹95,00,000",
      address: "202 Baner Road, Pune",
      beds: 3,
      baths: 3,
      area: 2000,
      image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 6,
      type: "For Rent",
      price: "₹28,000/month",
      address: "303 Andheri East, Mumbai",
      beds: 2,
      baths: 1,
      area: 1000,
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  // For Sale properties data
  const forSaleProperties = [
    {
      id: 7,
      price: "₹85,00,000",
      address: "Luxury Villa, Koregaon Park",
      beds: 4,
      baths: 3,
      area: 2800,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      status: "New Listing",
      daysOnMarket: 2,
      type: "Villa"
    },
    {
      id: 8,
      price: "₹1,20,00,000",
      address: "Modern Apartment, Baner",
      beds: 3,
      baths: 2,
      area: 2100,
      image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      status: "Trending",
      daysOnMarket: 7,
      type: "Apartment"
    },
    {
      id: 9,
      price: "₹62,00,000",
      address: "Cozy Home, Kothrud",
      beds: 2,
      baths: 2,
      area: 1500,
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      daysOnMarket: 3,
      type: "House"
    }
  ];

  const [properties, setProperties] = useState(initialProperties);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = () => {
    setProperties([...properties, ...moreProperties]);
    setHasMore(false);
  };

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const handleQuickView = (property) => {
    setQuickViewData(property);
  };

  const closeQuickView = () => {
    setQuickViewData(null);
  };

  // const handleEnquire = (propertyId) => {
  //   alert(`Enquiry sent for property ID: ${propertyId}`);
  // };

  return (
    <>
      <div className="hero-section">
        <div className="hero-content">
          <h1>Find Your Dream Home in India</h1>
          <p>PUNE • MUMBAI • DELHI • BANGALORE • HYDERABAD</p>
          <div className="filters">
            <select><option>Property Type</option></select>
            <select><option>All Cities</option></select>
            <select><option>Bedrooms</option></select>
            <select><option>Max. Price</option></select>
            <button className="search-btn" onClick={() => alert('Search functionality would go here')}>
              Search
            </button>
          </div>
          <div className="status-buttons">
            <button 
              className="status all-status"
              onClick={() => alert('Showing all statuses')}
            >
              ALL STATUS
            </button>
            <button 
              className="status for-rent"
              onClick={() => alert('Filtering for rent properties')}
            >
              FOR RENT
            </button>
            <button 
              className="status for-sell"
              onClick={() => alert('Filtering for sale properties')}
            >
              FOR SELL
            </button>
          </div>
        </div>
      </div>

      {/* Featured Homes Section */}
      <section className="featured-homes">
        <div className="featured-container">
          <div className="section-header">
            <h2>Featured Homes</h2>
            <p className="subtitle">Our new homes for sale and rent</p>
            <p className="description">
              Search homes for sale in your local area by price, amenities, or other features. 
              We'll show you the sales history and provide helpful advice.
            </p>
          </div>
          
          <div className="property-cards">
            {properties.map(property => (
              <div className="property-card" key={property.id}>
                <div className="property-badge">{property.type}</div>
                <div 
                  className="property-image" 
                  style={{backgroundImage: `url(${property.image})`}}
                  onClick={() => handleQuickView(property)}
                >
                  <div className="image-overlay"></div>
                  <button className="quick-view-btn">
                    <i className="fas fa-expand"></i> Quick View
                  </button>
                </div>
                <div className="property-details">
                  <h3>{property.price}</h3>
                  <p className="address">{property.address}</p>
                  <div className="features">
                    <span><i className="fas fa-bed"></i> {property.beds} Beds</span>
                    <span><i className="fas fa-bath"></i> {property.baths} Baths</span>
                    <span><i className="fas fa-vector-square"></i> {property.area} sq.ft</span>
                  </div>
                  <button 
                    className="view-btn"
                    onClick={() => handleEnquire(property.id)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>

          {hasMore && (
            <div className="load-more-container">
              <button className="load-more-btn" onClick={loadMore}>
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Modern Minimalist Services Section */}
      <section className="services-modern">
        <div className="modern-container">
          <div className="modern-header">
            <h2>Simplifying Real Estate</h2>
            <p className="modern-subtitle">
              Home buying can be stressful. We make it effortless.
            </p>
          </div>
          
          <div className="modern-cards">
            {/* Card 1 - Floating Design */}
            <div className="modern-card">
              <div className="modern-card-inner">
                <div className="modern-icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/1995/1995542.png" alt="Expert Agents" />
                </div>
                <div className="modern-content">
                  <h3>Expert Agents</h3>
                  <p>
                    Certified professionals with local market expertise to guide 
                    your property journey.
                  </p>
                  <div className="modern-stats">
                    <span>500+</span>
                    <span>Trusted Partners</span>
                  </div>
                </div>
              </div>
              <div className="modern-cta">
                <button 
                  className="modern-btn"
                  onClick={() => alert('Redirecting to team page')}
                >
                  Meet Our Team <span>→</span>
                </button>
              </div>
            </div>

            {/* Card 2 - Floating Design */}
            <div className="modern-card">
              <div className="modern-card-inner">
                <div className="modern-icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/3058/3058971.png" alt="Seamless Process" />
                </div>
                <div className="modern-content">
                  <h3>Seamless Process</h3>
                  <p>
                    Our streamlined approach saves you time and reduces paperwork 
                    by 60%.
                  </p>
                  <div className="modern-stats">
                    <span>7 Days</span>
                    <span>Average Closing</span>
                  </div>
                </div>
              </div>
              <div className="modern-cta">
                <button 
                  className="modern-btn"
                  onClick={() => alert('Showing process flow')}
                >
                  How It Works <span>→</span>
                </button>
              </div>
            </div>

            {/* Card 3 - Floating Design */}
            <div className="modern-card">
              <div className="modern-card-inner">
                <div className="modern-icon">
                  <img src="https://cdn-icons-png.flaticon.com/512/3058/3058032.png" alt="Smart Matching" />
                </div>
                <div className="modern-content">
                  <h3>Smart Matching</h3>
                  <p>
                    AI-powered recommendations to find properties that truly 
                    match your needs.
                  </p>
                  <div className="modern-stats">
                    <span>92%</span>
                    <span>Match Accuracy</span>
                  </div>
                </div>
              </div>
              <div className="modern-cta">
                <button 
                  className="modern-btn"
                  onClick={() => alert('Launching matching tool')}
                >
                  Try Our Tool <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advertisement Section */}
      <section className="advertisement-section">
        <div className="ad-container">
          <div className="ad-content">
            <h2>Interested in selling your home?</h2>
            <p className="ad-text">
              Buy or sell your home with our expert agents. House valuations, inspections, 
              negotiations and other premium services are included in our comprehensive packages.
            </p>
            <div className="ad-features">
              <div className="feature-item">
                <i className="fas fa-check-circle"></i>
                <span>Free property valuation</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check-circle"></i>
                <span>Professional photography</span>
              </div>
              <div className="feature-item">
                <i className="fas fa-check-circle"></i>
                <span>Dedicated agent support</span>
              </div>
            </div>
            <button 
              className="ad-contact-btn"
              onClick={() => alert('Connecting you with our agents')}
            >
              Contact us <i className="fas fa-arrow-right"></i>
            </button>
          </div>
          <div className="ad-image">
            <img 
              src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
              alt="Beautiful home for sale" 
            />
            <div className="image-overlay">
              <span>Let us handle the hard work</span>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Cities - Video Section */}
      <section className="shorts-section">
        <div className="shorts-container">
          <div className="shorts-header">
            <h2>Explore Cities</h2>
            <p className="shorts-subtitle">Discover India's real estate through local eyes</p>
          </div>
          
          <div className="shorts-description">
            <p>Find your dream neighborhood and explore it with your home purchase advisor. We're here to help you find the perfect home.</p>
          </div>

          <div className="shorts-video-grid">
            {/* Mumbai Short */}
            <div className="short-video-card" data-aos="fade-up">
              <div className="video-wrapper">
                <video 
                  poster="https://assets.mixkit.co/videos/preview/mixkit-city-traffic-at-night-3585-large.png" 
                  loop 
                  muted 
                  playsInline
                  autoPlay
                >
                  <source src={vid1} type="video/mp4" />
                </video>
                <div className="video-overlay">
                  <div className="city-tag">Mumbai</div>
                  {/* <button className="play-pause-btn">
                    <i className="fas fa-play"></i>
                  </button> */}
                </div>
              </div>
              <div className="video-stats">
                <span><i className="fas fa-eye"></i> 24.5k</span>
                <span><i className="fas fa-heart"></i> 1.2k</span>
              </div>
            </div>

            {/* Delhi Short */}
            <div className="short-video-card" data-aos="fade-up" data-aos-delay="100">
              <div className="video-wrapper">
                <video 
                 
                  loop 
                  muted 
                  playsInline
                  autoPlay
                >
                  <source src={vid2} type="video/mp4" />
                </video>
                <div className="video-overlay">
                  <div className="city-tag">Delhi</div>
                  {/* <button className="play-pause-btn"> */}
                    {/* <i className="fas fa-play"></i> */}
                  {/* </button> */}
                </div>
              </div>
              <div className="video-stats">
                <span><i className="fas fa-eye"></i> 18.3k</span>
                <span><i className="fas fa-heart"></i> 892</span>
              </div>
            </div>

            {/* Bangalore Short */}
            <div className="short-video-card" data-aos="fade-up" data-aos-delay="200">
              <div className="video-wrapper">
                <video 
                  poster="https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-modern-city-with-high-buildings-3587-large.png" 
                  loop 
                  muted 
                  playsInline
                  autoPlay
                >
                  <source src= {vid3} type="video/mp4" />
                </video>
                <div className="video-overlay">
                  <div className="city-tag">Bangalore</div>
                  {/* <button className="play-pause-btn">
                    <i className="fas fa-play"></i>
                  </button> */}
                </div>
              </div>
              <div className="video-stats">
                <span><i className="fas fa-eye"></i> 21.7k</span>
                <span><i className="fas fa-heart"></i> 1.1k</span>
              </div>
            </div>

            {/* Hyderabad Short */}
            <div className="short-video-card" data-aos="fade-up" data-aos-delay="300">
              <div className="video-wrapper">
                <video 
                  poster="https://assets.mixkit.co/videos/preview/mixkit-city-with-a-river-and-a-bridge-3586-large.png" 
                  loop 
                  muted 
                  playsInline
                  autoPlay
                >
                  <source src= {vid4} type="video/mp4" />
                </video>
                <div className="video-overlay">
                  <div className="city-tag">Hyderabad</div>
                  {/* <button className="play-pause-btn">
                    <i className="fas fa-play"></i>
                  </button> */}
                </div>
              </div>
              <div className="video-stats">
                <span><i className="fas fa-eye"></i> 15.9k</span>
                <span><i className="fas fa-heart"></i> 745</span>
              </div>
            </div>
          </div>

          <div className="shorts-cta">
            <button 
              className="shorts-btn"
              onClick={() => alert('Showing more city guides')}
            >
              <i className="fas fa-compass"></i> Explore More Cities
            </button>
          </div>
        </div>
      </section>

      {/* For Sale Properties Section */}
      <section className="for-sale-section">
        <div className="salecontainer">
          <div className="section-header" data-aos="fade-up">
            <h2 className="gradient-text">For Sale</h2>
            <p className="subtitle">Latest properties in Pune</p>
            <p className="description">
              Search homes for sale in your local area by price, amenities, or other features. 
              We'll show you the sales history and provide helpful advice.
            </p>
          </div>

          <div className="property-grid">
            {forSaleProperties.map((property) => (
              <div className="property-card" key={property.id} data-aos="flip-left">
                {property.status && (
                  <div className={`property-badge ${property.status === 'Trending' ? 'trending' : ''}`}>
                    {property.status}
                  </div>
                )}
                <div 
                  className="property-image" 
                  style={{backgroundImage: `url(${property.image})`}}
                  onClick={() => handleQuickView(property)}
                >
                  <div className="image-overlay"></div>
                  <button className="quick-view-btn">
                    <i className="fas fa-expand"></i> Quick View
                  </button>
                </div>
                <div className="property-details">
                  <h3>{property.price}</h3>
                  <p className="address">{property.address}</p>
                  <div className="features">
                    <span><i className="fas fa-bed"></i> {property.beds} Beds</span>
                    <span><i className="fas fa-bath"></i> {property.baths} Baths</span>
                    <span><i className="fas fa-vector-square"></i> {property.area} sq.ft</span>
                  </div>
                  <div className="property-footer">
                    <span className="days-on-market">
                      <i className="fas fa-clock"></i> Listed {property.daysOnMarket} days ago
                    </span>
                    <button 
                      className="enquire-btn"
                      onClick={() => handleEnquire(property.id)}
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cta-container" data-aos="zoom-in">
            <div className="cta-card">
              <div className="cta-content">
                <h3>Can't find what you're looking for?</h3>
                <p>Our property experts can help you find your dream home</p>
                <button 
                  className="cta-btn"
                  onClick={() => alert('Contacting our agent...')}
                >
                  <i className="fas fa-headset"></i> Contact Our Agent
                </button>
              </div>
              <div className="cta-image">
                <img src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Real Estate Agent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-overlay"></div>
        <div className="container">
          <div className="section-header">
            {/* <span className="section-subtitle">Client Experiences</span> */}
            <h2 className="section-title">What Our Customers Are Saying</h2>
            <p className="section-description">
              Buy or sell your home with our elite agents. Our team is knowledgeable, professional, and dedicated to your complete satisfaction!
            </p>
          </div>

          <div className="testimonials-carousel">
            {/* Testimonial Card 1 */}
            <div className="testimonial-card">
              <div className="card-inner">
                <div className="client-rating">
                  ★★★★★
                </div>
                <blockquote className="client-quote">
                  "Our agent went above and beyond to find our dream home in a competitive market. The entire process was seamless and stress-free!"
                </blockquote>
                <div className="client-info">
                  <div className="client-avatar">
                    <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="Sarah Johnson" />
                  </div>
                  <div className="client-details">
                    <h4>Sarah Johnson</h4>
                    <p>Homeowner in Beverly Hills</p>
                  </div>
                </div>
              </div>
             
            </div>

            {/* Testimonial Card 2 */}
            <div className="testimonial-card">
              <div className="card-inner">
                <div className="client-rating">
                  ★★★★★
                </div>
                <blockquote className="client-quote">
                  "Sold our property 15% above asking price in just 3 days! The marketing strategy was brilliant and the negotiations were handled perfectly."
                </blockquote>
                <div className="client-info">
                  <div className="client-avatar">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Michael Chen" />
                  </div>
                  <div className="client-details">
                    <h4>Michael Chen</h4>
                    <p>Seller in Downtown LA</p>
                  </div>
                </div>
              </div>
              
            </div>

            {/* Testimonial Card 3 */}
            <div className="testimonial-card">
              <div className="card-inner">
                <div className="client-rating">
                  ★★★★☆
                </div>
                <blockquote className="client-quote">
                  "As first-time buyers, we were nervous, but our agent educated us and found properties within our budget that matched all our needs."
                </blockquote>
                <div className="client-info">
                  <div className="client-avatar">
                    <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Jessica Martinez" />
                  </div>
                  <div className="client-details">
                    <h4>Jessica Martinez</h4>
                    <p>First-Time Buyer</p>
                  </div>
                </div>
              </div>
            
            </div>
          </div>

          <div className="testimonials-cta">
            <button className="cta-button">
              Read More Success Stories
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

            {/* Footer Section */}
<footer className="modern-footer">
  <div className="footer-container">
    {/* Top Section - Newsletter & Quick Links */}
    <div className="footer-top">
      <div className="footer-newsletter">
        <h3>Stay Updated</h3>
        <p>Subscribe to our newsletter for the latest property listings and real estate news</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Your email address" />
          <button className="subscribe-btn">
            Subscribe <i className="fas fa-paper-plane"></i>
          </button>
        </div>
        <div className="social-links">
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
        </div>
      </div>

      <div className="footer-links">
        <div className="links-column">
          <h4>Company</h4>
          <ul>
          <li><a href="#">Home</a></li>
            <li><a href="#">Properties</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact US</a></li>
            
          </ul>
        </div>

        <div className="links-column">
          <h4>Services</h4>
          <ul>
            <li>Buy Property</li>
            <li>Sell Property</li>
            <li>Rent Property</li>
            <li>Property Valuation</li>
            <li>Home Loans</li>
          </ul>
        </div>

        {/* <div className="links-column">
          <h4>Resources</h4>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Guides</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div> */}

        <div className="links-column">
          <h4>Contact</h4>
          <ul className="contact-info">
            <li><i className="fas fa-map-marker-alt"></i> 123 Real Estate, Pune, MH 411001</li>
            <li><i className="fas fa-phone-alt"></i> +91 98765 43210</li>
            <li><i className="fas fa-envelope"></i> info@realestate.com</li>
            <li><i className="fas fa-clock"></i> Mon-Sat: 9:00 AM - 7:00 PM</li>
          </ul>
        </div>
      </div>
    </div>

    Middle Section - App Download
    <div className="footer-middle">
      <div className="app-download">
        <div className="app-content">
          <h3>Download Our App</h3>
          <p>Search properties on the go with our mobile application</p>
          <div className="app-buttons">
            <a href="#" className="app-store">
              <i className="fab fa-apple"></i>
              <div>
                <span>Download on the</span>
                <span>App Store</span>
              </div>
            </a>
            <a href="#" className="play-store">
              <i className="fab fa-google-play"></i>
              <div>
                <span>Get it on</span>
                <span>Google Play</span>
              </div>
            </a>
          </div>
        </div>
        <div className="app-image">
          <img src="https://cdn-icons-png.flaticon.com/512/2583/2583344.png" alt="Mobile App" />
        </div>
      </div>
    </div>

    {/* Bottom Section - Copyright */}
    <div className="footer-bottom">
      <div className="copyright">
        © {new Date().getFullYear()} RealEstate India. All rights reserved.
      </div>
     
      <div className="payment-methods">
        <i className="fab fa-cc-visa"></i>
        <i className="fab fa-cc-mastercard"></i>
        <i className="fas fa-rupee-sign"></i>
      </div>
    </div>
  </div>
  </footer>

  {/* Back to Top Button
  <button 
    className="back-to-top" 
    onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
    aria-label="Back to top"
  >
    <i className="fas fa-arrow-up"></i>
  </button> */}



    </>
  );
};

export default HomePage;