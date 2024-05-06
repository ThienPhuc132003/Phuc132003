import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withRouter from '../utils/withRouter';
import Snowfall from 'react-snowfall';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      hotprods: [],
    };
  }
  render() {
    const prods = this.state.products.map((item) => {
      return (
        <div key={item._id} className="inline-furniture">
          <figure>
            <Link to={'/product/' + item._id}><img src={"data:image/jpg;base64," + item.image} width="300px" height="300px" alt="" /></Link>
            <figcaption className="text-center">{item.name}<br />Price: {item.price}</figcaption>
            <Link to={'/product/' + item._id} class="furniture">BUY NOW</Link>
          </figure>
        </div>
      );
    });
    return (
      <div className="text-center">
        <h2 className="text-center">LIST PRODUCTS</h2>
        {prods}
        <br />
        <br />
        <h5>Đang Cập Nhập Thêm Sản Phẩm ...</h5>
        <br />
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

  componentDidMount() { // first: /product/...
    const params = this.props.params;
    if (params.cid) {
      this.apiGetProductsByCatID(params.cid);
    } else if (params.keyword) {
      this.apiGetProductsByKeyword(params.keyword);
    }
  }
  componentDidUpdate(prevProps) { // changed: /product/...
    const params = this.props.params;
    if (params.cid && params.cid !== prevProps.params.cid) {
      this.apiGetProductsByCatID(params.cid);
    } else if (params.keyword && params.keyword !== prevProps.params.keyword) {
      this.apiGetProductsByKeyword(params.keyword);
    }
  }
  // apis
  apiGetProductsByKeyword(keyword) {
    axios.get('/api/customer/products/search/' + keyword).then((res) => {
      const result = res.data;
      this.setState({ products: result });
    });
  }
  apiGetProductsByCatID(cid) {
    axios.get('/api/customer/products/category/' + cid).then((res) => {
      const result = res.data;
      this.setState({ products: result });
    });
  }
}
export default withRouter(Product);