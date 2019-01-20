import Link from 'next/link';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import './index.scss';

const Nav = ({ className, isMobileMenuOpen, handleClick, router }) => (
  <nav className={className}>
    <button
      type="button"
      className={
        isMobileMenuOpen ? 'nav__trigger nav__trigger--active' : 'nav__trigger'
      }
      onClick={handleClick}
    >
      <div className="lines">
        <span className="line line-1" />
        <span className="line line-2" />
        <span className="line line-3" />
      </div>
    </button>
    <ul className="nav__items bg-with-pattern">
      <li
        className={
          router.pathname === '/' ? 'nav__item nav__item--active' : 'nav__item'
        }
      >
        <Link href="/" prefetch>
          <a className="nav__link">Home</a>
        </Link>
      </li>
      <li
        className={
          router.pathname === '/projects'
            ? 'nav__item nav__item--active'
            : 'nav__item'
        }
      >
        <Link href="/projects" prefetch>
          <a className="nav__link">Projects</a>
        </Link>
      </li>
      <li
        className={
          router.pathname === '/about-me'
            ? 'nav__item nav__item--active'
            : 'nav__item'
        }
      >
        <Link href="/about-me" prefetch>
          <a className="nav__link">About me</a>
        </Link>
      </li>
    </ul>
  </nav>
);

Nav.propTypes = {
  router: PropTypes.object.isRequired,
  isMobileMenuOpen: PropTypes.bool,
  handleClick: PropTypes.func,
  className: PropTypes.string
};

Nav.defaultProps = {
  className: 'nav',
  handleClick: () => {},
  isMobileMenuOpen: false
};

export default withRouter(Nav);
