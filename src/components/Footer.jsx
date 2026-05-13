import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="saas-footer">
      <div className="footer-glow"></div>
      <div className="container">
        {/* Main Footer Grid */}
        <div className="footer-grid-saas">
          {/* Column 1: Brand */}
          <div className="footer-col brand-col">
            <Link to="/" className="brand-logo-white">
              LearnSpace<span> Digital</span>
            </Link>
            <p className="brand-paragraph">
              Empowering ambitious brands with data-backed digital strategies 
              and boundary-pushing creativity. We turn complexity into 
              competitive advantage.
            </p>
            <div className="social-glass-group">
              <a href="#" className="social-glass-item" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" className="social-glass-item" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="social-glass-item" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
              <a href="#" className="social-glass-item" aria-label="Twitter"><i className="fa-brands fa-x-twitter"></i></a>
            </div>
          </div>

          {/* Column 2: Platform */}
          <div className="footer-col">
            <h4 className="footer-heading">Platform</h4>
            <ul className="footer-link-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">Our Story</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/blog">Growth Blog</Link></li>
              <li><Link to="/contact">Case Studies</Link></li>
            </ul>
          </div>

          {/* Column 3: Expertise */}
          <div className="footer-col">
            <h4 className="footer-heading">Expertise</h4>
            <ul className="footer-link-list">
              <li><Link to="/services/seo-optimization">SEO Growth</Link></li>
              <li><Link to="/services/ppc-advertising">Paid Media</Link></li>
              <li><Link to="/services/content-marketing">Content Strategy</Link></li>
              <li><Link to="/services/web-design">Web Design & CRO</Link></li>
              <li><Link to="/services/email-marketing">Email Marketing</Link></li>
            </ul>
          </div>

          {/* Column 4: Support */}
          <div className="footer-col">
            <h4 className="footer-heading">Support</h4>
            <ul className="footer-link-list">
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions">Terms of Service</Link></li>
              <li><Link to="/cookie-policy">Cookie Policy</Link></li>
            </ul>
            <div className="footer-mini-contact">
              <p><i className="fa-solid fa-envelope"></i> hello@learnspacedigital.com</p>
              <p><i className="fa-solid fa-location-dot"></i> Hyderabad, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-bottom-saas">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright-text">&copy; {new Date().getFullYear()} LearnSpace Digital. All rights reserved.</p>
            <div className="footer-badge">
              <span>Next-Gen Marketing <i className="fa-solid fa-bolt"></i></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
