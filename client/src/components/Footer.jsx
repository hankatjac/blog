import React from "react";
import Logo from "../assets/img/logo.png";

const Footer = () => {
  return (
    <section className="container">
      <footer id="footer" className="footer">
        <div className="footer-content">
          <div className="container">
            <div className="row g-5">
              <div className="col-12 col-md-4">
                <h3 className="footer-heading">About me</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam ab, perspiciatis beatae autem deleniti voluptate nulla
                  a dolores, exercitationem eveniet libero laudantium recusandae
                  officiis qui aliquid blanditiis omnis quae. Explicabo?
                </p>
                <p>
                  <a href="about.html" className="footer-link-more">
                    Learn More
                  </a>
                </p>
              </div>
              <div className="col-12 col-md-4">
                <h3 className="footer-heading">Navigation</h3>
                <ul className="footer-links list-unstyled">
                  <li>
                    <a href="index.html">
                      <i className="bi bi-chevron-right"></i> Home
                    </a>
                  </li>
                  <li>
                    <a href="index.html">
                      <i className="bi bi-chevron-right"></i> Blog
                    </a>
                  </li>
              
                  <li>
                    <a href="single-post.html">
                      <i className="bi bi-chevron-right"></i> Write
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-4">
                <h3 className="footer-heading">Categories</h3>
                <ul className="footer-links list-unstyled">
                  <li>
                    <a href="category.html">
                      <i className="bi bi-chevron-right"></i> Business
                    </a>
                  </li>
                  <li>
                    <a href="category.html">
                      <i className="bi bi-chevron-right"></i> Culture
                    </a>
                  </li>

                  <li>
                    <a href="category.html">
                      <i className="bi bi-chevron-right"></i> Technology
                    </a>
                  </li>
                  <li>
                    <a href="category.html">
                      <i className="bi bi-chevron-right"></i> Quotidian
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
