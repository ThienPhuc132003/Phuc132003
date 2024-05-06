import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Snowfall from 'react-snowfall';
import logo from '../../src/assets/image/c1.png'
import logo1 from '../../src/assets/image/c2.png'
import logo2 from '../../src/assets/image/c3.png'
import logo3 from '../../src/assets/image/a1.png'
import logo4 from '../../src/assets/image/a2.png'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newprods: [],
      hotprods: [],
      theme: 'light-mode', // Chế độ sáng mặc định
    };
  }
  // Hàm chuyển đổi giữa chế độ sáng và chế độ tối
  toggleTheme = () => {
    const newTheme = this.state.theme === 'light-mode' ? 'dark-mode' : 'light-mode';
    this.setState({ theme: newTheme });
  };

  render() {
    document.body.className = this.state.theme;
    const newprods = this.state.newprods.map((item) => {
      return (
        <section id="banner-product">
          <div key={item._id} className="inline">
            <figure>
              <Link to={'/product/' + item._id}><img src={"data:image/jpg;base64," + item.image} width="300px" height="300px" alt="" /></Link>
              <figcaption className="text-center">{item.name}<br />Price: {item.price}</figcaption>
              <div class="btn-dark">
                <Link to={'/product/' + item._id} class="dark"></Link>
              </div>
            </figure>
          </div>
        </section>
      );
    });
    const hotprods = (this.state.hotprods.length != 0) ? this.state.hotprods.map((item) => {
      if (item) {
        return (
          <section id="banner-product">
            <div key={item._id} className="inline">
              <figure>
                <Link to={'/product/' + item._id}><img src={"data:image/jpg;base64," + item.image} width="300px" height="300px" alt="" /></Link>
                <figcaption className="text-center">{item.name}<br />Price: {item.price}</figcaption>
                <div class="btn-dark">
                  <Link to={'/product/' + item._id} class="dark"></Link>
                </div>
              </figure>
            </div>
          </section>
        );
      };
    }) : <></>;
    return (
      /* logo trang web và content, ảnh dưới logo*/
      <div>
        <div >
          {/* Nút chuyển đổi giữa chế độ sáng và chế độ tối */}
          <button class="dark-light" onClick={this.toggleTheme}>Christmas Mode</button>

          {/* ... (các phần khác của mã JSX) */}
        </div>
        <div className="navbar-top">
          <div className="social-link">
            <i><img src="./assets/image/twitter.png" alt="" width="30px" /></i>
            <i><img src="./assets/image/facebook.png" alt="" width="30px" /></i>
            <i><img src="./assets/image/google-plus.png" alt="" width="30px" /></i>
          </div>
          <div className="logo">
            <h1>FURNITURE</h1>
          </div>
          <div className="icons">
            <i><img src="./assets/image/search.png" alt="" width="20px" /></i>
            <i><img src="./assets/image/heart.png" alt="" width="20px" /></i>
            <i><img src="./assets/image/shopping-cart.png" alt="" width="25px" /></i>
          </div>
        </div>
        <div>
          <div className="content">
            <h1>Make Your Home
              <br /> Modern Design.
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Repellendus minus modi illum cumque velit consectetur?</p>
            <div id="btn1">
              <Link to="/product/category/65645e97968589ea21287e84">
                <button>Shop Now</button>
              </Link>
            </div>
          </div>
        </div>

        {/* service we offer */}
        <div>
          <br />
          <h1 className="text-center" style={{ paddingTop: '30px' }}>SERVICES WE OFFERED</h1>
          <br />
          <br />
          <div className="banner-service">
            <section id="banner-1" >
              <img src={logo} style={{ width: '100%', height: '220px', borderRadius: '5%', marginBottom: '20px' }} />
              <h5 className="card-title" style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>HIGH QUALITY PRODUCT</h5>
              <p className="text-center-service" style={{ textAlign: 'center', fontSize: '1rem', textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Numquam ipsam vitae
                facere eius modi iure possimus, <br /> soluta ea inventore. Omnis!</p>
              <Link to="/about">
                <button className="find-service1"></button>
              </Link>
            </section>
            <section id="banner-2">
              <img src={logo1} style={{ width: '100%', height: '220px', borderRadius: '5%', marginBottom: '20px' }} />
              <h5 className="card-title" style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>LONG TEARM WARRANTY</h5>
              <p className="text-center-service" style={{ textAlign: 'center', fontSize: '1rem', textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Numquam ipsam vitae
                facere eius modi iure possimus, <br /> soluta ea inventore. Omnis!</p>
              <Link to="/about">
                <button className="find-service1"></button>
              </Link>
            </section>
            <section id="banner-3">
              <img src={logo2} style={{ width: '100%', height: '220px', borderRadius: '5%', marginBottom: '20px' }} />
              <h5 className="card-title" style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>BEST CUSTOMER CARE</h5>
              <p className="text-center-service" style={{ textAlign: 'center', fontSize: '1rem', textAlign: 'center' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Numquam ipsam vitae
                facere eius modi iure possimus, <br /> soluta ea inventore. Omnis!</p>
              <Link to="/about">
                <button className="find-service1"></button>
              </Link>
            </section>
          </div>
          {/* chủ đề new product */}
        </div>
        <div className="home">
          <br />
          <br />
          <h2 className="text-center">NEW PRODUCTS</h2>
          <Link to={"/product/category/65645e97968589ea21287e84"} className="view-more">View More</Link>
          <br />
          <br />
          {newprods}
        </div>
        {/* chủ đề */}

        <div>
          <h3 className="text-center" style={{ paddingTop: '48px' }}>THEMED INTERIORS</h3>
          <br />
          <div id="sm-banner" class="section-p1">
            <div className="banner-box">
              <h4>Hot Deals</h4>
              <h2>Buy 2 get 1 free</h2>
              <span>The best furniture is on sale at FURNITURE</span>
              <Link to="/product/category/65645e97968589ea21287e84">
                <button className="white">Find out</button>
              </Link>
            </div>
            <div className="banner-box banner-box1">
              <h4>Summer/Autumn</h4>
              <h2>Upcoming Season</h2>
              <span>The best furniture is on sale at FURNITURE</span>
              <Link to="/product/category/65645e97968589ea21287e84">
                <button className="white">Find out</button>
              </Link>
            </div>
            <div className="banner-box banner-box2">
              <h4>Office Furniture</h4>
              <h2>Best Deals</h2>
              <span>The best furniture is on sale at FURNITURE</span>
              <Link to="/product/category/65645e97968589ea21287e84">
                <button className="white">Find out</button>
              </Link>
            </div>
            <div className="banner-box banner-box3">
              <h4>Winter/Spring</h4>
              <h2>Upcoming Season</h2>
              <span>The best furniture is on sale at FURNITURE</span>
              <Link to="/product/category/65645e97968589ea21287e84">
                <button className="white">Find out</button>
              </Link>
            </div>
          </div>
        </div>

        {this.state.hotprods.length > 0 ?
          <div className="home">
            <h2 className="text-center">HOT PRODUCTS</h2>
            <Link to={"/product/category/65645e97968589ea21287e84"} className="view-more">View More</Link>
            <br />
            <br />
            {hotprods}
          </div>
          : <div />}
        <br />
        <br />

        <h3 className="text-center" style={{ marginTop: '0px' }}>ABOUT US</h3>
        <div className="about" id="about">
          <div className="about-img">
            <img src={logo3} style={{ height: '350px', width: '750px' }} />
          </div>
          <div className="about-text">
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
            <Link to="/about">
              <button className="btn">EXPLORE MORE</button>
            </Link>
          </div>
        </div>

        <div className="about" id="about">
          <div className="about-img2">
            <img src={logo4} style={{ height: '350px', width: '730px' }} />
          </div>
          <div className="about-text2">
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
            <Link to="/about">
              <button className="btn">EXPLORE MORE</button>
            </Link>
          </div>
        </div>

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




        <Snowfall snowflakeCount={100} style={{ zIndex: 9999 }} />
      </div>





    );
  }
  componentDidMount() {
    this.apiGetNewProducts();
    this.apiGetHotProducts();
  }
  // apis
  apiGetNewProducts() {
    axios.get('/api/customer/products/new').then((res) => {
      const result = res.data;
      this.setState({ newprods: result });
    });
  }
  apiGetHotProducts() {
    axios.get('/api/customer/products/hot').then((res) => {
      const result = res.data;
      this.setState({ hotprods: result });
    });
  }
}
export default Home;