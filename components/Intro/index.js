import Link from 'next/link';
import Socials from '../Socials';
import './index.scss';

const Intro = () => (
  <div className="root-header__intro">
    <div className="container container--column">
      <h1 className="root-header__title">Front-End Developer</h1>
      <h2 className="root-header__subtitle">Bartosz Podgruszecki</h2>
      <Link href="/">
        <a className="link button">Napisz do mnie</a>
      </Link>
      <Socials showLabel />
    </div>
  </div>
);

export default Intro;
