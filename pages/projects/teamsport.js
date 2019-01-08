import Layout from '../../components/Layout/index';
import SvgIcon from '../../components/SvgIcon';
import './project.scss';

export default () => (
  <Layout>
    <section className="section section--project">
      <div className="header">
        <img
          src="/static/img/projects/teamsport_desktop.png"
          alt=""
          className="header__bg"
        />
        <h1 className="header__title">TeamSport</h1>
      </div>
      <div className="container">
        <div className="columns">
          <div className="column is-half text">
            <h2>Opis projektu</h2>
            <p>
              TeamSport jest firmą, która oferuje szereg usług z zakresu
              aktywności fizycznej tj. obozy sportowe, kursy pod okiem
              intruktorów.
            </p>
            <p>
              Można się także zapisać na sekcje sportowe ściśle poświęcone danej
              dyscyplinie.
            </p>
            <p>
              Zaprojektowany portal pozwala na zarządzanie całą ofertą z poziomu
              panelu administracyjnego.
            </p>
            <p>
              W łatwy i przyjazny sposób można dodawać nowe wydarzenia sportowe,
              na które klienci mogą się zapisywać na stronie po wypełnieniu
              formularza.
            </p>
            <p>
              Panel umożliwia także zarządzanie galeriami oraz licznymi
              formularzami na stronie.
            </p>

            <h2>Technologies</h2>
            <p>
              Strona została zaprojektowana w Wordpress z szablonem opartym na
              pluginie Timber, który umożliwia tworzenie plików widoków w
              formacie .twig.
            </p>
            <p>Za wszelkie operacje związane z bundlingiem odpowiada Gulp.</p>
            <div className="tags">
              <span className="tags__tag" title="WordPress">
                <SvgIcon icon="wordpress" fillRule="evenodd" />
              </span>
              <span className="tags__tag" title="Gulp">
                <SvgIcon icon="gulp" />
              </span>
              <span className="tags__tag" title="jQuery">
                <SvgIcon icon="jquery" />
              </span>
            </div>

            <h2>Released</h2>
            <div className="released">
              <SvgIcon icon="calendar" />
              <p>11/2017</p>
            </div>
          </div>
          <div className="column is-half">
            <div className="images">
              <img
                src="/static/img/projects/teamsport_desktop.png"
                alt="TeamSport Desktop View"
                className="images__img images__img--desktop"
                title="Desktop View"
              />
              <img
                src="/static/img/projects/teamsport_tablet.png"
                alt="TeamSport Tablet View"
                className="images__img images__img--tablet"
                title="Tablet View"
              />
              <img
                src="/static/img/projects/teamsport_phone.gif"
                alt="TeamSport Phone View"
                className="images__img images__img--phone"
                title="Phone View"
              />
            </div>
            <div className="online-source">
              <div className="text">
                <p className="text__title">Strona internetowa</p>
                <p className="text__desc">
                  Strona jest dostępna pod adresem:
                  <br />
                  teamsport.krakow.pl
                </p>
              </div>
              <div className="buttons">
                <a
                  href="http://teamsport.krakow.pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visit-online button"
                >
                  See online
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);
