import Layout from '../../components/Layout/index';
import SvgIcon from '../../components/SvgIcon';

import './project.scss';

export default () => (
  <Layout>
    <section className="section section--project">
      <div className="header">
        <img
          src="/static/img/projects/routes-planner_desktop.png"
          alt=""
          className="header__bg"
        />
        <h1 className="header__title">Routes Planner</h1>
      </div>
      <div className="container">
        <div className="columns">
          <div className="column is-half text">
            <h2>Opis projektu</h2>
            <p>Portfolio wykonane w Next.js.</p>

            <h2>Technologies</h2>
            <p>
              Layout został wykonany w Adobe XD a następnie została
              zaprojektowana strona w HTLM5 z wykorzystaniem Next.js.
            </p>
            <div className="tags">
              <span className="tags__tag" title="React">
                <SvgIcon icon="react" />
              </span>
              <span className="tags__tag" title="Next.js">
                {/* <SvgIcon icon="next.js" /> */}
              </span>
            </div>

            {/* <h2>Tags</h2>
            <p>wordpress, grunt, jquery</p> */}

            <h2>Released</h2>
            <div className="released">
              <SvgIcon icon="calendar" />
              <p>01/2019</p>
            </div>
          </div>
          <div className="column column--centered is-half">
            <div className="images">
              <img
                src="/static/img/projects/routes-planner_desktop.png"
                alt="Routes Planner desktop view"
                className="images__img images__img--desktop"
                title="Desktop View"
              />
              <img
                src="/static/img/projects/routes-planner_tablet.png"
                alt="Routes Planner tablet view"
                className="images__img images__img--tablet"
                title="Tablet View"
              />
              <img
                src="/static/img/projects/routes-planner_phone.png"
                alt="Routes Planner phone view"
                className="images__img images__img--phone"
                title="Phone View"
              />
            </div>
            <div className="online-source">
              <div className="text">
                <p className="text__title">Projekt komercyjny</p>
                <p className="text__desc">
                  Podgląd kodu źródłowego dla tego projektu nie jest dostępny.
                  Zostały jednak wydzielone jego fragmenty oraz dostępne są
                  screencasty.
                </p>
              </div>
              <div className="buttons">
                <a href="https://barthicus.github.io" className="button">
                  See online
                </a>
                <a
                  href="https://github.com/barthicus/portfolio"
                  className="button button--outlined"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);
