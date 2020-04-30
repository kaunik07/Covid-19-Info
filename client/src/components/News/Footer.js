import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footerSection">
        <Link to="/News" className="smoothScroll">
          <i className="fa fa-2x fa-arrow-up" aria-hidden="true" />
        </Link>
      </div>
    );
  }
}

export default Footer;
