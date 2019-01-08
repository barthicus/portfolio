import Layout from '../../components/Layout/index';
import SvgIcon from '../../components/SvgIcon';
import './project.scss';

export default () => (
  <Layout>
    <section className="section section--project">
      <div className="header">
        <img
          src="/static/img/projects/taxibus_desktop.png"
          alt=""
          className="header__bg"
        />
        <h1 className="header__title">TaxiBus Kraków</h1>
      </div>
      <div className="container">
        <div className="columns">
          <div className="column is-half text">
            <h2>Opis projektu</h2>
            <p>
              Dla TaxiBus została wykonana kompletna przebudowa strony
              internetowej, która obecnie oferuje możliwość rezerwacji przewozu
              osobowego lub wycieczki na terenie Krakowa.
            </p>
            <p>
              Wdrożony panel administracyjny pozwala na zarządzanie oferowanymi
              usługami przewozowymi oraz ustalaniem i cen w różnych walutach.
            </p>
            <p>
              Ważną częścią projektu był formularz/konfigurator rezerwacji
              przewozu/wycieczki, który na bieżąco oblicza cenę dla wybranych
              parametrów usługi.
            </p>
            <p>
              Firmie zależało na dotarciu do szerszego grona klientów, dlatego
              została także wdrożona wielojęzyczność (dostępne jezyki: Polski i
              Angielski).
            </p>

            <h2>Technologies</h2>
            <p>
              Portal wykonany został w Wordpress, kod JavaScript został oparty w
              dużej mierze na jQuery.
            </p>
            <p>
              Za cały proces deweloperski związane z JS i CSS odpowiadał Grunt
              (minifikacja, kompilacja Less, łączenie plików).
            </p>
            <div className="tags">
              <span className="tags__tag" title="WordPress">
                <SvgIcon icon="wordpress" fillRule="evenodd" />
              </span>
              <span className="tags__tag" title="Grunt">
                <SvgIcon icon="grunt" />
              </span>
              <span className="tags__tag" title="jQuery">
                <SvgIcon icon="jquery" />
              </span>
            </div>

            {/* <h2>Tags</h2>
            <p>wordpress, grunt, jquery</p> */}

            <h2>Released</h2>
            <div className="released">
              <SvgIcon icon="calendar" />
              <p>07/2017</p>
            </div>
          </div>
          <div className="column is-half">
            <div className="images">
              <img
                src="/static/img/projects/taxibus_desktop.png"
                alt="Taxibus Desktop View"
                className="images__img images__img--desktop"
                title="Desktop View"
              />
              <img
                src="/static/img/projects/taxibus_tablet.png"
                alt="Taxibus Tablet View"
                className="images__img images__img--tablet"
                title="Tablet View"
              />
              <img
                src="/static/img/projects/taxibus_phone.gif"
                alt="Taxibus Phone View"
                className="images__img images__img--phone"
                title="Phone View"
              />
            </div>
            <div className="online-source">
              <div className="text">
                <p className="text__title">Strona internetowa</p>
                <p className="text__desc">
                  Strona jest dostępna pod adresami:
                  <br />
                  taxibuskrakow.com
                  <br />
                  taxibuskrakow.pl
                </p>
              </div>
              <div className="buttons">
                <a
                  href="http://taxibuskrakow.com"
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
