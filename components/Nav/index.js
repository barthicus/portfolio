import Link from 'next/link';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import './index.scss';

const Nav = props => (
  <nav className={props.className}>
    <ul className="nav__items">
      <li
        className={
          props.router.route === '/'
            ? 'nav__item nav__item--active'
            : 'nav__item'
        }
      >
        <Link href="/" prefetch>
          <a className="nav__link">Home</a>
        </Link>
      </li>
      <li
        className={
          props.router.route === '/projects'
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
          props.router.route === '/contact'
            ? 'nav__item nav__item--active'
            : 'nav__item'
        }
      >
        <Link href="/contact" prefetch>
          <a className="nav__link">Contact</a>
        </Link>
      </li>
    </ul>
  </nav>
);

Nav.propTypes = {
  router: PropTypes.object.isRequired,
  className: PropTypes.string
};

Nav.defaultProps = {
  className: 'nav'
};

export default withRouter(Nav);
