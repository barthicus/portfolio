import Link from 'next/link';
import SvgIcon from '../SvgIcon';
import Nav from '../Nav';
// import Blog from '../Blog';
import Socials from '../Socials';
import './index.scss';

const Footer = () => (
  <footer className="root-footer">
    <SvgIcon icon="colorBar" className="color-bar" />
    {/* <Blog /> */}
    <div className="root-footer__bottom">
      <div className="container">
        <div className="columns">
          <div className="column logo">
            <Link href="/">
              <a className="nav__link">
                <span>Bartosz</span> <span>Podgruszecki</span>
              </a>
            </Link>
          </div>
          <Socials className="column socials" />
          <div className="column">
            <Nav />
          </div>
        </div>
      </div>
    </div>
    <div className="root-footer__copyrights">
      <div className="container">
        <p>© 2018 Copyrights by Bartosz Podgruszecki. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
