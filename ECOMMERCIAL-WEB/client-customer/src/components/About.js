import axios from 'axios';
import React, { Component } from 'react';
import Snowfall from 'react-snowfall';
import logo3 from '../../src/assets/image/a1.png'
import logo4 from '../../src/assets/image/a2.png'
import logo5 from '../../src/assets/image/about.png'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main className="aboutt">
      <h3 className="text-center" style={{ marginTop: '0px' }}>ABOUT US</h3>
      <div class="about" id="about">
        <div class="about-img">
          <img src={logo3} style={{ height: '350px', width: '750px' }} />
        </div>
        <div class="about-text">
          <h2>FURNITURE What We Got</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, saepe possimus quo,
            quasi animi natus nulla beatae neque soluta pariatur id ducimus eum, sed quis enim minima?
            Fugiat delectus quo optio nemo voluptatem ullam officiis neque exercitationem tenetur eum corporis
            quas in esse blanditiis, quasi animi nam eos! Tempora deleniti eligendi magni ex voluptatum ut dicta
            nemo et consequuntur distinctio quae atque porro inventore assumenda, nihil odio iusto accusamus libero
            error nam aut, at praesentium cum reiciendis. Possimus consequatur obcaecati at illum in dolores earum
            vero ipsum. Ipsam vitae adipisci corrupti totam vel consequuntur fugiat. Perferendis fuga doloremque
            tempora, in eos, voluptates iure, optio qui modi ex ea saepe. Eum perspiciatis, voluptates fugiat
            nesciunt corrupti minima aliquam repellat, ea quasi natus, recusandae aut nobis modi. Commodi, alias
            reiciendis reprehenderit hic soluta consectetur corporis accusantium placeat, totam minima nostrum
            magnam dolorum aut dolore, sapiente ea. Magni est quo ipsam nisi iste.</p>
          <Link to="/blog">
            <button className="btn">Learn More</button>
          </Link>
        </div>
      </div>

      <div class="about" id="about">
        <div class="about-img2">
          <img src={logo4} style={{ height: '350px', width: '730px' }} />
        </div>
        <div class="about-text2">
          <h2>FURNITURE Why You Can Choose Us</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, saepe possimus quo,
            quasi animi natus nulla beatae neque soluta pariatur id ducimus eum, sed quis enim minima?
            Fugiat delectus quo optio nemo voluptatem ullam officiis neque exercitationem tenetur eum corporis
            quas in esse blanditiis, quasi animi nam eos! Tempora deleniti eligendi magni ex voluptatum ut dicta
            nemo et consequuntur distinctio quae atque porro inventore assumenda, nihil odio iusto accusamus libero
            error nam aut, at praesentium cum reiciendis. Possimus consequatur obcaecati at illum in dolores earum
            vero ipsum. Ipsam vitae adipisci corrupti totam vel consequuntur fugiat. Perferendis fuga doloremque
            tempora, in eos, voluptates iure, optio qui modi ex ea saepe. Eum perspiciatis, voluptates fugiat
            nesciunt corrupti minima aliquam repellat, ea quasi natus, recusandae aut nobis modi. Commodi, alias
            reiciendis reprehenderit hic soluta consectetur corporis accusantium placeat, totam minima nostrum
            magnam dolorum aut dolore, sapiente ea. Magni est quo ipsam nisi iste.</p>
          <Link to="/blog">
            <button className="btn">Learn More</button>
          </Link>
        </div>
      </div>

      <div class="about" id="about">
        <div class="about-img">
          <img src={logo5} style={{ height: '350px', width: '750px' }} />
        </div>
        <div class="about-text">
          <h2>Best Part Of Every House</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, saepe possimus quo,
            quasi animi natus nulla beatae neque soluta pariatur id ducimus eum, sed quis enim minima?
            Fugiat delectus quo optio nemo voluptatem ullam officiis neque exercitationem tenetur eum corporis
            quas in esse blanditiis, quasi animi nam eos! Tempora deleniti eligendi magni ex voluptatum ut dicta
            nemo et consequuntur distinctio quae atque porro inventore assumenda, nihil odio iusto accusamus libero
            error nam aut, at praesentium cum reiciendis. Possimus consequatur obcaecati at illum in dolores earum
            vero ipsum. Ipsam vitae adipisci corrupti totam vel consequuntur fugiat. Perferendis fuga doloremque
            tempora, in eos, voluptates iure, optio qui modi ex ea saepe. Eum perspiciatis, voluptates fugiat
            nesciunt corrupti minima aliquam repellat, ea quasi natus, recusandae aut nobis modi. Commodi, alias
            reiciendis reprehenderit hic soluta consectetur corporis accusantium placeat, totam minima nostrum
            magnam dolorum aut dolore, sapiente ea. Magni est quo ipsam nisi iste.</p>
          <Link to="/blog">
            <button className="btn">Learn More</button>
          </Link>
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
    </main>
  )
}


export default About;