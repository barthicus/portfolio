import Link from 'next/link';
import Socials from '../Socials';
import './index.scss';

const Intro = () => (
  <div className="main-intro bg-with-pattern">
    <div className="container container--column">
      <h1 className="main-intro__title">Front-End Developer</h1>
      <h2 className="main-intro__subtitle">Bartosz Podgruszecki</h2>
      <Link href="/about-me">
        <a className="main-intro__link button">About me</a>
      </Link>
      <Socials />
    </div>
  </div>
);

export default Intro;
