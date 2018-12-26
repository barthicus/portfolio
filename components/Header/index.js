import Link from 'next/link';
import { withRouter } from 'next/router';
import { Component } from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
import Intro from '../Intro';
import Nav from '../Nav';
import './index.scss';

class Header extends Component {
  static propTypes = {
    router: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.handleScroll();
    document.addEventListener('scroll', this.handleScroll, true);
  }

  handleScroll() {
    const navbar = document.querySelector('header .navbar');
    const mainSection = document.querySelector('header + main');

    if (window.pageYOffset >= mainSection.offsetTop) {
      navbar.classList.add('navbar--sticky');
    } else {
      navbar.classList.remove('navbar--sticky');
    }
  }

  isHomepage() {
    return this.props.router.route === '/';
  }

  render() {
    return (
      <header className="header">
        <div className="navbar">
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
