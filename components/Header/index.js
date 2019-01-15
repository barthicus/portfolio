import Link from 'next/link';
import { withRouter } from 'next/router';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
import Nav from '../Nav';
import './index.scss';

class Header extends Component {
  static propTypes = {
    router: PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.navbar = React.createRef();
  }

  state = {
    isSticky: false
  };

  componentDidMount() {
    this.handleScroll();
    document.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll, true);
  }

  handleScroll = () => {
    this.setState({
      isSticky: window.pageYOffset > (this.isHomepage() ? 200 : 150)
    });

    const intro = document.querySelector('.root-header__intro');
    const main = document.querySelector('main');
    const navBarHeight = `${this.navbar.current.clientHeight}px`;

    if (this.isHomepage() && intro) {
      intro.style.marginTop = this.state.isSticky ? navBarHeight : 0;
    } else if (main) {
      main.style.marginTop = this.state.isSticky ? navBarHeight : 0;
    }
  };

  isHomepage() {
    return this.props.router.route === '/';
  }

  render() {
    return (
      <header className="root-header bg-with-pattern">
        <div
          className={this.state.isSticky ? 'navbar navbar--sticky' : 'navbar'}
          ref={this.navbar}
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
        {!this.isHomepage() && (
          <SvgIcon icon="colorBar" className="color-bar" />
        )}
      </header>
    );
  }
}

export default withRouter(Header);
