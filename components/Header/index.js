import Link from 'next/link';
import { withRouter } from 'next/router';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
import Intro from '../Intro';
import Nav from '../Nav';
import './index.scss';

class Header extends Component {
  static propTypes = {
    router: PropTypes.object.isRequired
  };

  state = {
    isSticky: false
  };

  componentDidMount() {
    this.handleScroll();
    document.addEventListener('scroll', this.handleScroll, true);
  }

  handleScroll = () => {
    this.setState({
      // isSticky: window.pageYOffset > this.colorBar.current.offsetTop
      isSticky: window.pageYOffset > 200
    });
  };

  isHomepage() {
    return this.props.router.route === '/';
  }

  render() {
    return (
      <header className="header">
        <div
          className={this.state.isSticky ? 'navbar navbar--sticky' : 'navbar'}
        >
          <div className="container">
            <div className="navbar__logo">
              <Link href="/">
                <a className="nav__link">
                  <span>Bartosz</span> <span>Podgruszecki</span>
                </a>
              </Link>
            </div>
            <Nav className="navbar__nav nav" />
          </div>
          <SvgIcon icon="colorBar" className="color-bar" />
        </div>
        {this.isHomepage() && <Intro />}
        <SvgIcon icon="colorBar" className="color-bar" />
      </header>
    );
  }
}

export default withRouter(Header);
