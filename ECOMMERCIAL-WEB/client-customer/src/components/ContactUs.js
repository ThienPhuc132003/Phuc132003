import React, { Component } from 'react';
import Snowfall from 'react-snowfall';
import logo3 from '../../src/assets/image/c3.png'
import { Link } from 'react-router-dom';
class ContactUs extends Component {
  render() {
    return (
      <div className="align-centerr">
        <h2 className="text-centerr">CONTACT US</h2>
        <br />
        <div class="contact-info">
          <div>
            <Link to={'https://www.facebook.com/profile.php?id=100034736148365'} className="text-centerr">support@domain.com</Link>
            <Link to={'https://www.youtube.com/watch?v=EWGCmgRYwZo'} className="text-centerr">@domain.com</Link>
          </div>
          <div>
            <h4> ADDRESS:</h4>
            <h4> Trường THCS Trảng Dài, XVJ4+HPR, Đ. Bùi Trọng Nghĩa,</h4>
            <h4> Trảng Dài, Thành phố Biên Hòa, Đồng Nai</h4>
          </div>
          <div>
            <h4> HOTLINE:</h4>
            <h4> 0123-456-78910</h4>
            <h4> 0987-654-32100</h4>
          </div>
        </div>
        <br />
        <br />
        <iframe title="gmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.7637874656384!2d106.8539674615397!3d10.
        981193889135113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174dc4926980729%3A0x59706330a0c7bd1f!2zWFZKNCtIUFIgVHLGsOG7nW5
        nIFRIQ1MgVHLhuqNuZyBEw6BpLCDEkC4gQsO5aSBUcuG7jW5nIE5naMSpYSwgVHLhuqNuZyBEw6BpLCBUaMOgbmggcGjhu5EgQmnDqm4gSMOyYSwgxJDhu5NuZyBOYWksIF
        Zp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1700130471208!5m2!1svi!2s"
          width="900" height="800" style={{ border: 0 }} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        <br />
        <br />
        <div className="align-centerr">
          <p className="text-centerr">“Proin gravida nibh vel velit auctor aliquet. Aenean sollicudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vultate cursus a sit amet mauris. Proin gravida nibh vel velit auctor aliquet.”</p>
        </div>
        <br />
        <br />
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <h2>Contact Us</h2>
            <p>Swing by for a cup of coffee, or leave us a message:</p>
          </div>
          <div className="row">
            <div className="column">
              <img src={logo3} style={{ height: '350px', width: '650px' }} />
            </div>
            <div className="column">
              <form action="/action_page.php">
                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                <label htmlFor="country">City</label>
                <select id="country" name="city">
                  <option value="australia">HCM</option>
                  <option value="canada">Thu Duc</option>
                  <option value="usa">Ha Noi</option>
                  <option value="usa">...</option>
                </select>
                <label htmlFor="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: 170 }} defaultValue={""} />
                <Link to={'/'} className="submit-comment-link">Submit Information</Link>
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

    );
  }
}
export default ContactUs;