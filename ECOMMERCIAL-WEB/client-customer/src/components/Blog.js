import axios from 'axios';
import React, { Component } from 'react';
import logo2 from '../../src/assets/image/c2.png'
import logo3 from '../../src/assets/image/c3.png'
import logo4 from '../../src/assets/image/c4.jpg'
import Snowfall from 'react-snowfall';
import logo5 from '../../src/assets/image/about.png'
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <main className="blogtitle">
      <h1 className="text-title">Best Part Of Every House</h1>
      <div class="blog" id="blog">
        <div class="blog-img">
          <img src={logo5} style={{ height: '500px', width: '70%', display: 'flex', marginLeft: '230px', marginTop: '30px' }} />
        </div>
        <div class="blog-text">
          <br></br>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
            Ut enim adminim veniam Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Curabitur ut iaculis arcu. Proin tincidunt, ipsum nec
            vehicula euismod, neque nibh pretium lorem, at ornare risus sem et risus. Curabitur
            pulvinar dui viverra libero lobortis in dictum velit luctus. Donec imperdiet tincidunt
            interdum</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim adminim veniam libero lobortis in dictum velit
            luctus. Donec imperdiet tincidunt interdum.</p>

          <h1 className="text-title">Rutrum Nonvopxe Sapiente Delectus Aut Bonbde </h1>
          <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut iaculis arcu. Proin tincidunt, ipsum nec vehicula euismod, neque nibh pretium lorem, at ornare risus sem et risus.</p>
          <br />
          <div id="sm-banner" class="section-p1">
            <div class="banner-box banner-box4">
            </div>
            <div class="banner-box banner-box5">

            </div>
            <div class="blog-text2">
              <br />
              <br />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut iaculis arcu. Proin tincidunt, ipsum nec vehicula euismod, neque nibh pretium lorem, at ornare risus sem et risus.</p>
              <br />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut iaculis arcu. Proin tincidunt, ipsum nec vehicula euismod neque</p>
            </div>

            <div class="blog-text2">
              <br />
              <br />
              <div class="relate">
                <h1>RELATED NEWS</h1>
              </div>
              <br />
              <br />
            </div>
            <div class="row">
              <div class="image-container">
                <div class="image-box">
                  <img src={logo2} style={{ height: '320px', width: '340px' }} />
                  <div class="image-caption">Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut iaculis arcu. Proin tincidunt, ipsum nec vehicula euismod, neque nibh pretium lorem, at ornare risus sem et risus.</div>
                </div>
              </div>

              <div class="image-container">
                <div class="image-box">
                  <img src={logo3} style={{ height: '320px', width: '340px' }} />
                  <div class="image-caption">Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut iaculis arcu. Proin tincidunt, ipsum nec vehicula euismod, neque nibh pretium lorem, at ornare risus sem et risus.</div>
                </div>
              </div>

              <div class="image-container">
                <div class="image-box">
                  <img src={logo4} style={{ height: '320px', width: '340px' }} />
                  <div class="image-caption">Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut iaculis arcu. Proin tincidunt, ipsum nec vehicula euismod, neque nibh pretium lorem, at ornare risus sem et risus.</div>
                </div>
              </div>
            </div>
            <br />
            <div class="comment-form-container">
              <h2>Leave a Comment</h2>
              <form id="comment-form">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <label for="comment">Comment:</label>
                <textarea id="comment" name="comment" rows="4" required></textarea>
                <Link to={'/'} className="submit-comment-link">Submit Comment</Link>
              </form>
            </div>
          </div>
        </div>

        <Snowfall snowflakeCount={100} style={{ zIndex: 9999 }} />

        <footer>
          <div className="footer-content">
            <div className="footer-logo">
              <h3>FURNITURE</h3>
            </div>
            <div className="footer-links">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contactus">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-social">
              <i><img src="./assets/image/twitter.png" alt="" width="30px" /></i>
              <i><img src="./assets/image/facebook.png" alt="" width="30px" /></i>
              <i><img src="./assets/image/google-plus.png" alt="" width="30px" /></i>
            </div>
          </div>
          <div class="copyright">
            <p>©2022, Tech2 etc - HTML CSS Ecommerce Template</p>
          </div>

        </footer>
      </div>





    </main>
  )
}

export default Blog;