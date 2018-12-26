import Link from 'next/link';
import Socials from '../Socials';
import './index.scss';

const Intro = () => (
  <div className="header__intro">
    <div className="container container--column">
      <h1 className="header__title">Front-End Developer</h1>
      <h2 className="header__subtitle">Bartosz Podgruszecki</h2>
      <Link href="/">
        <a className="link button">Napisz do mnie</a>
      </Link>
      <Socials showLabel />
    </div>
  </div>
);

export default Intro;
