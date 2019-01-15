import Link from 'next/link';
import Socials from '../Socials';
import './index.scss';

const Intro = () => (
  <div className="intro bg-with-pattern">
    <div className="container container--column">
      <h1 className="intro__title">Front-End Developer</h1>
      <h2 className="intro__subtitle">Bartosz Podgruszecki</h2>
      <Link href="/">
        <a className="intro__link button">Contact</a>
      </Link>
      <Socials showLabel />
    </div>
  </div>
);

export default Intro;
