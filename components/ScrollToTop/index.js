import animateScrollTo from 'animated-scroll-to';
import { Component } from 'react';
import SvgIcon from '../SvgIcon';
import './index.scss';

export default class ScrollToTop extends Component {
  componentDidMount() {
    this.handleScroll();
    document.addEventListener('scroll', this.handleScroll, true);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll, true);
  }

  handleClick = () => {
    animateScrollTo(0, { speed: 200 });
  };

  handleScroll() {
    const scrollToTopBtn = document.querySelector('.scrolltop');

    if (!scrollToTopBtn) return;

    if (window.pageYOffset >= 100) {
      scrollToTopBtn.classList.add('scrolltop--visible');
    } else {
      scrollToTopBtn.classList.remove('scrolltop--visible');
    }
  }

  render() {
    return (
      <button type="button" className="scrolltop" onClick={this.handleClick}>
        <SvgIcon icon="arrowUp" className="scrolltop__svg" />
        <span className="scrolltop__text">to top</span>
      </button>
    );
  }
}
