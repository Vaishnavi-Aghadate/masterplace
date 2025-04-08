
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

    {/* Middle Section - App Download */}
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

  {/* Back to Top Button
  <button 
    className="back-to-top" 
    onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
    aria-label="Back to top"
  >
    <i className="fas fa-arrow-up"></i>
  </button> */}
</footer>