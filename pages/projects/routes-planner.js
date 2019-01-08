import SyntaxHighlighter from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/styles/hljs';
import animateScrollTo from 'animated-scroll-to';
import Layout from '../../components/Layout/index';
import SvgIcon from '../../components/SvgIcon';

import './project.scss';

const JsSnippet = () => {
  const codeString = `const lul = 'asfsdf';
(num) => num + 1;

class Testowa {
  constructor(age) {
    this.prop = 541 + age;
  }
}

testObject = new Testowa(43);`;
  return (
    // <SyntaxHighlighter language="javascript" style={docco}>
    <SyntaxHighlighter language="javascript">{codeString}</SyntaxHighlighter>
  );
};

const scrollToSection = e => {
  const position = document.querySelector(e.target.hash).offsetTop - 120;
  animateScrollTo(position, { speed: 200 });
};

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
            <p>
              Planer tras to panel administracyjny umożliwiający zarządzenie
              zamówieniami dodawanymi przez pracowników firmy i przydzielania
              ich do trasy (grupy).
            </p>
            <p>
              Dodane zamówienia są widoczne jako interaktywne markery na mapie
              OpenStreetMap, można w nie kliknąć, aby przejrzeć lub edytować
              zamówienie.
            </p>
            <p>
              Użytkownik po zalogowaniu ma możliwość zarządzania zamówieniami
              lub trasami, można je filtrować, sortować i przeszukiwać.
            </p>
            <p>
              W aplikacji wykorzystywana jest także geolokalizacja, dzięki
              której na podstawie danych adresowych zamówienia możliwe jest
              ustalenie jego koordynatów GPS.
            </p>

            <h2>Technologies</h2>
            <p>
              Jest to druga iteracja aplikacji, która jest wykorzystywana
              nieprzerwanie od 2014 roku. Pierwsza wersja była napisana w
              jQuery, jQuery UI, leaflet.js a jej backend był oparty na prostym
              API RESTOwym w PHP.
            </p>
            <p>
              Aktualnie front aplikacji został oparty na Vue.js i Vuex,
              natomiast za wygląd aplikacji odpowiedzialne jest Buefy. Buefy to
              zestaw komponentów dla Vue.js ostylowanych w Bulmie. Paczka Buefy
              została wybrana głównie ze względu na komponent table, który
              pozwala na dynamiczne ładowanie zawartości z serwera z paginacją,
              jest bardzo dobrze udokumentowany, daje duże możliwości
              konfiguracji i wprowadzania własnych zmian.
            </p>
            <p>
              Backend aplikacji to ApiPlatform, umożliwiający wygodne tworzenie
              RESTowego API w oparciu o Symfony 4. Autentykacja odbywa się za
              pomocą JWT (Json Web Token), któęgo token przechowywany jest w
              LocalStorage.
            </p>
            <p>
              Gwarancję poprawnego działania i dalszego rozwoju aplikacji
              zapewniają testy E2E wykonane w Cypress.
            </p>
            <div className="tags">
              {/* vue, vuex, apiplatform, leaflet, buefy, cypress, e2e */}
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
              <p>10/2018</p>
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
                <a
                  href="#code-fragments"
                  onClick={e => scrollToSection(e)}
                  className="button button--outlined"
                >
                  Code
                </a>
                <a
                  href="#screencasts"
                  onClick={e => scrollToSection(e)}
                  className="button button--outlined"
                >
                  Screencasts
                </a>
              </div>
            </div>
          </div>
        </div>
        <SvgIcon icon="colorBar" className="color-bar" />
        <div className="columns code-fragments">
          <div className="column">
            <h2 id="code-fragments">Code examples</h2>
            <div className="columns">
              <div className="column">
                <JsSnippet />
                <span className="file">/src/components/SomeFile.js</span>
              </div>
              <div className="column">
                <JsSnippet />
                <span className="file">/src/components/SomeOtherFile.js</span>
              </div>
              <div className="column">
                <JsSnippet />
                <span className="file">/src/components/SomeOtherFile.js</span>
              </div>
              <div className="column">
                <JsSnippet />
                <span className="file">/src/components/SomeOtherFile.js</span>
              </div>
              <div className="column">
                <JsSnippet />
                <span className="file">/src/components/SomeOtherFile.js</span>
              </div>
            </div>
          </div>
        </div>
        <SvgIcon icon="colorBar" className="color-bar" />
        <div className="columns screencasts">
          <div className="column">
            <h2 id="screencasts">Screencasts</h2>
            <div className="columns">
              <div className="column screencast">
                <div>screencast 1</div>
                <span className="file">adding order</span>
              </div>
              <div className="column screencast">
                <div>screencast 2</div>
                <span className="file">switching tabs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);
