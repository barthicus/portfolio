import Link from 'next/link';
import SvgIcon from './SvgIcon';

const Footer = () => (
  <footer className="footer">
    <SvgIcon icon="colorBar" className="color-bar" />
    <section className="section section--blog">
      <h2 className="section__subtitle">Blog</h2>
      <h1 className="section__title">Najnowsze wpisy na blogu</h1>
      <div className="blog container">blog content</div>
    </section>
    <div className="footer__bottom">
      <div className="container">
        <div className="columns">
          <div className="column logo">
            <Link href="/">
              <a className="nav__link">
                <span>Bartosz</span> <span>Podgruszecki</span>
              </a>
            </Link>
          </div>
          <div className="column socials">
            <a
              href="https://github.com/barthicus"
              target="_blank"
              rel="noopener noreferrer"
              className="socials__link"
            >
              <SvgIcon
                icon="github"
                className="socials__svg"
                viewBox="0 0 24 24"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/bartosz-podgruszecki"
              target="_blank"
              rel="noopener noreferrer"
              className="socials__link"
            >
              <SvgIcon
                icon="linkedin"
                className="socials__svg"
                viewBox="0 0 24 24"
              />
            </a>
          </div>
          <div className="column">
            <nav className="nav">
              <ul className="nav__items">
                <li className="nav__item">
                  <Link href="/">
                    <a className="nav__link">Home</a>
                  </Link>
                </li>
                <li className="nav__item">
                  <Link href="/projects">
                    <a className="nav__link">Projects</a>
                  </Link>
                </li>
                <li className="nav__item">
                  <Link href="/contact">
                    <a className="nav__link">Contact</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div className="footer__copyrights">
      <p>© 2018 Copyrights by Bartosz Podgruszecki. All Rights Reserved.</p>
    </div>
  </footer>
);

export default Footer;
