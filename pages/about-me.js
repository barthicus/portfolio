import Layout from '../components/Layout';
import SvgIcon from '../components/SvgIcon';
import Head from '../components/Layout/Head';

import './about-me.scss';

const AboutPage = () => (
  <Layout>
    <Head
      title="About me | Bartosz Podgruszecki Portfolio"
      description="A few informations about who I am and what I can do."
    />
    <section className="section section--about-me">
      <div className="container">
        <h1 className="section__title">About me</h1>
        <div className="intro-contact">
          <div className="intro">
            <p>
              My name is Bartosz Podgruszecki and I&apos;m Polish Front-End
              Developer who is not afraid of the Back-end.
            </p>
          </div>
          <div className="photo">
            <img
              // eslint-disable-next-line import/no-unresolved,global-require
              src={require('../static/img/me.jpg?size=270')}
              alt="Bartosz Podgruszecki"
              className="photo__img"
            />
          </div>
          <div className="contact">
            <ul className="contact__items">
              <li className="contact__item">
                <a
                  href="mailto:bartosz.podgruszecki@gmail.com"
                  className="contact__link"
                >
                  <SvgIcon icon="email" className="contact__svg" />
                  <span className="contact__label">
                    bartosz.podgruszecki@gmail.com
                  </span>
                </a>
              </li>
              <li className="contact__item">
                <a
                  href="https://github.com/barthicus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__link"
                >
                  <SvgIcon icon="github" className="contact__svg" />
                  <span className="contact__label">github.com/barthicus</span>
                </a>
              </li>
              <li className="contact__item">
                <a
                  href="https://www.linkedin.com/in/bartosz-podgruszecki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__link"
                >
                  <SvgIcon icon="linkedin" className="contact__svg" />
                  <span className="contact__label">
                    linkedin.com/in/bartosz-podgruszecki
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <SvgIcon icon="colorBar" className="color-bar" />

        <h2 className="section__title">Skills</h2>
        <div className="columns skills">
          <div className="column">
            <div className="skills__box skills__box--frontend">
              <SvgIcon icon="javascript" className="skills__icon" />
              <h3 className="skills__title">Front-End</h3>
              <ul className="skills__items">
                <li className="skills__item">
                  <SvgIcon icon="chevronRight" />
                  JavaScript ES6+
                  <br />
                  <small>since 2014, started with jQuery and AngularJS</small>
                </li>
                <li className="skills__item">
                  <SvgIcon icon="chevronRight" />
                  Vue.js
                  <br />
                  <small>3 commercial projects since August 2016</small>
                </li>
                <li className="skills__item">
                  <SvgIcon icon="chevronRight" />
                  React
                  <br />
                  <small>1 project since Decemeber 2018</small>
                </li>
                <li className="skills__item">
                  <SvgIcon icon="chevronRight" />
                  webpack / gulp + eslint + prettier
                </li>
                <li className="skills__item">
                  <SvgIcon icon="chevronRight" />
                  RWD, SCSS (BEM), Css frameworks: Bootstrap, SemanticUI,
                  BulmaCSS
                </li>
                <li className="skills__item">
                  <SvgIcon icon="chevronRight" />
                  HTML5
                </li>
              </ul>
            </div>
          </div>
          <div className="column">
            <div className="skills__box skills__box--backend">
              <SvgIcon icon="php" className="skills__icon" />
              <h3 className="skills__title">Back-End</h3>
              <ul className="skills__items">
                <li className="skills__item">
                  <SvgIcon icon="chevronRight" />
                  PHP (Laravel, ApiPlatform)
                </li>
                <li className="skills__item">
                  <SvgIcon icon="chevronRight" />
                  MySQL
                </li>
                <li className="skills__item">
                  <SvgIcon icon="chevronRight" />
                  API integrations: REST, graphQL, headless CMS
                </li>
                <li className="skills__item">
                  <SvgIcon icon="chevronRight" />
                  CMS: Storyblok, Wordpress + Timber, Bolt.cm
                </li>
              </ul>
            </div>
          </div>
          <div className="column">
            <div className="skills__box skills__box--general">
              <SvgIcon icon="github" className="skills__icon" />
              <h3 className="skills__title">
                General / <br />
                Development process
              </h3>
              <ul className="skills__items">
                <li className="skills__item">
                  <SvgIcon icon="chevronRight" />
                  GIT (TravisCI)
                </li>
                <li className="skills__item">
                  <SvgIcon icon="chevronRight" />
                  Basic nginx, mysql, php services managment
                </li>
                <li className="skills__item">
                  <SvgIcon icon="chevronRight" />
                  PuPHPet: Ubuntu + Nginx + MySQL
                </li>
                <li className="skills__item">
                  <SvgIcon icon="chevronRight" />
                  Photohop / Adobe XD
                </li>
                <li className="skills__item">
                  <SvgIcon icon="chevronRight" />
                  SEO
                </li>
              </ul>
            </div>
          </div>
        </div>

        <SvgIcon icon="colorBar" className="color-bar" />

        <h2 className="section__title">Other abilities</h2>
        <div className="columns skills">
          <div className="column">
            <div className="skills__box skills__box--archive">
              <h3 className="skills__title">Archive skills</h3>
              <p className="skills__small-title">
                Let&#39;s not go there again, ok?
              </p>
              <ul className="skills__items">
                <li className="skills__item">
                  <SvgIcon icon="chevronRight" />
                  Kohana (PHP Framework)
                </li>
                <li className="skills__item">
                  <SvgIcon icon="chevronRight" />
                  Flash ActionScript
                </li>
                <li className="skills__item">
                  <SvgIcon icon="chevronRight" />
                  runt, rollup
                </li>
                <li className="skills__item">
                  <SvgIcon icon="chevronRight" />
                  jQuery
                </li>
                <li className="skills__item">
                  <SvgIcon icon="chevronRight" />
                  vtiger 5 (CRM)
                </li>
              </ul>
            </div>
          </div>
          <div className="column">
            <div className="skills__box skills__box--general">
              <h3 className="skills__title">Languages</h3>
              <ul className="skills__items">
                <li className="skills__item">
                  <SvgIcon icon="chevronRight" />
                  <b>Polish native</b> - I come from Poland so the Polish
                  language is my native language.
                </li>
                <li className="skills__item">
                  <SvgIcon icon="chevronRight" />
                  <b>English intermediate</b> (B1) - I can read anything in
                  English and write code in this language. Unfortunately
                  I&#39;ve never worked with other co-workers or talk with
                  clients in English.
                </li>
                <li className="skills__item">
                  <SvgIcon icon="chevronRight" />
                  <b>German</b> - beginner (A1)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
