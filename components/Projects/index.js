import Project from './Project';
import './index.scss';

const projects = [
  {
    thumb: '/static/img/projects/routes-planner_thumb.jpg',
    title: 'Routes planner',
    cat: 'Aplikacja',
    intro: `System zarządzania zamówieniami z lokalizacją na mapie OpenStreetMap w postaci markerów.`,
    desc: `Planer tras to panel administracyjny umożliwiający zarządzenie zamówieniami dodawanymi przez pracowników firmy i przydzielania ich do trasy (grupy). 
           Dodane zamówienia są widoczne jako interaktywne markery na mapie OpenStreetMap, można w nie kliknąć, aby przejrzeć lub edytować zamówienie.
           Użytkownik po zalogowaniu ma możliwość zarządzania zamówieniami lub trasami, można je filtrować, sortować i przeszukiwać.
           W aplikacji wykorzystywana jest także geolokalizacja, dzięki której na podstawie danych adresowych zamówienia możliwe jest ustalenie jego koordynatów GPS.`,
    stack: `Jest to druga iteracja aplikacji, która jest wykorzystywana nieprzerwanie od 2014 roku.
            Pierwsza wersja była napisana w jQuery, jQuery UI, leaflet.js a jej backend był oparty na prostym API RESTOwym w PHP.
            Aktualnie front aplikacji został oparty na Vue.js i Vuex, natomiast za wygląd aplikacji odpowiedzialne jest Buefy.
            Buefy to zestaw komponentów dla Vue.js ostylowanych w Bulmie. Paczka Buefy została wybrana głównie ze względu na komponent table, który pozwala na dynamiczne ładowanie zawartości z serwera z paginacją, jest bardzo dobrze udokumentowany, daje duże możliwości konfiguracji i wprowadzania własnych zmian.
            Backend aplikacji to ApiPlatform, umożliwiający wygodne tworzenie RESTowego API w oparciu o Symfony 4.
            Autentykacja odbywa się za pomocą JWT (Json Web Token), którego token przechowywany jest w LocalStorage.
            Gwarancję poprawnego działania i dalszego rozwoju aplikacji zapewniają testy E2E wykonane w Cypress.`,
    tags: ['vue', 'vuex', 'apiplatform', 'leaflet', 'buefy', 'cypress', 'e2e'],
    github: null,
    online: 'commercial',
    released: '10/2018',
    slug: 'routes-planner'
  },
  {
    thumb: 'https://via.placeholder.com/245x245',
    // title: 'Konfigurator produktowy 3D',
    title: '3D garage builder',
    cat: 'Aplikacja',
    intro: `Konfigurator garażu blaszanego z podglądem 3D wykonany w Vue.js + Vuex.`,
    desc: `Aplikacja jest wykorzystywana na stronie firmy oferującej produkcję i sprzedaż garażu blaszanych.
           Dzięki niej klient ma możliwość zaprojektowania własnego garażu z jednoczesnym podglądaniem produktu, który finalnie otrzyma.
           Konfigurator w pełnej wersji pozwala zmienić kierunek przetłoczenia blachy, jej kolor, dodawać elementy opcjonalne tj. drzwi, otwory, bramy czy zmieniać rodzaj dachu.
           Na bieżąco jest także liczona cena produktu na bazie kosztów ustalanych w panelu administracyjnym klienta.
           Więcej informacji o samym aplikacji i jej środowisku można znaleźć na githubie.
           Znajduje się tam także link do wersji wykonanej w React z większą liczbą funkcjonalności.`,
    stack: `Aplikacja została wykonana w Vue + Vuex, natomiast do renderowania wizualizacji została wykorzystana biblioteka Three.js.
            Konfigurator przeszedł szereg iteracji od pierwszej wersji i nieustannie jest wzbogacany o nowe funkcjonalności.`,
    tags: ['vue', 'vuex', 'three', 'javascript'],
    github: 'https://github.com/barthicus/vue-garage-builder',
    online: 'https://barthicus.github.io/vue-garage-builder',
    released: '09/2017',
    slug: '3d-garage-builder'
  },
  {
    thumb: 'https://via.placeholder.com/245x245',
    title: 'SVG product ingredients',
    // title: 'Plansza produktowa',
    cat: 'Aplikacja',
    intro: `Interaktywna plansza produktowa wyświetlająca skład danego produktu.`,
    desc: `SVG product ingredients to interaktywna plansza produktowa wyświetlająca skład danego produktu.
           W centrum planszy znajduje się zdjęcie produktu a wokół niego dodawane są składniki wchodzące w jego skład w postaci klikalnych okręgów.
           Ich wielkość i pozycję można określać podczas implementowania bilioteki.
           Plansza produktowa pozwala także na integrację z innymi komponentami tj. slidery czy alerty.
           Biblioteka została wykorzystana na stronie klienta oferujące Bio produkty żywnościowe.`,
    stack: `Biblioteka została napisana w JavaScript z pomocą webpacka, natomiast do manipulacji z obiektami svg na planszy zostało użyte Snap.svg.
            Dzięki wbudowanemu EventEmmiterowi biblioteka wysyła i nasłuchuje zdarzenia co pozwala na łatwą integrację z innymi bibliotekami komponentami.
            Na github znajduje się przykład integracji z sliderem, którego nawigacja jest zintegrowana z wybieraniem aktualnego składnika.
            Za ostylowanie CSS w wersji demo na github odpowiada Bulma.`,
    tags: ['webpack', 'svg'],
    github: 'https://github.com/barthicus/svg-project-ingredients',
    online: 'https://barthicus.github.io/svg-project-ingredients',
    released: '11/2017',
    slug: 'svg-product-ingredients'
  },
  {
    thumb: 'https://via.placeholder.com/245x245',
    title: 'PDF documents generator',
    cat: 'Aplikacja',
    intro: `Generator dokumentów i umów PDF dla kancelarii prawnej z synchronizacją w PHP.`,
    desc: `System został napisany dla kancelarii prawnej i służy jej pracownikom do zawierania umów oraz generowania dokumentów (PDF) na laptopach podczas spotkania z klientami.
           Umożliwia on także zarządzanie pracownikami, kientami i dokumentami z poziomu strony www dostępnej online dla administratorów.
           Jest to centralne miejsce, które pobiera dane z każdej instancji na laptopach pracowników i synchronizuje je pomiędzy innymi klientami.`,
    stack: `Aplikacja została napisana w 2015 roku w Laravel 4.2. Pozwala na dynamiczne generowanie dokumentów na bazie szablonów wykonanych w plikach .blade.
           Poza wersją kliencką wdrożona została także wersja serwerowa pozwalająca na zarządzanie zasobami m.in. użytkownikami, umowami i wzorami dokumentów.
           Największym wyzwaniem był wymóg działania aplikacji w trybie offline (bez poł. internetowego). Dlatego konieczne było napisanie aplikacji z uwględnieniem lokalnego serwera apache, który uruchamiany jest wraz ze startem komputera.
           W systemie zaimplementowany został moduł synchronizacji, którego zadaniem jest wyczekiwanie na aktywne połączenie internetowe oraz wykonywanie odpowiednich działań tj. pobieranie nowych umów, zmiany uprawnień itp. Innymi słowy system pilnuje, aby dane znajdujące się na wersjach klienckich były zgodne z tymi na serwerze.
           Napisany został również moduł aktualizacyjny, który gwarantował, że na wersjach klienckich zawsze znajdowała się najnowsza wersja aplikacji i w razie potrzeby ją aktualizował (pobierając odpowiedni patch z serwera).`,
    tags: ['php', 'laravel', 'jquery'],
    github: null,
    online: 'commercial',
    released: '2014',
    slug: 'pdf-documents-generator'
  },
  {
    thumb: 'https://via.placeholder.com/245x245',
    title: 'Curly Weddings',
    cat: 'Strona WWW',
    intro: `Wizytówka firmowa dla Curly Weddings (layout i wdrożenie).`,
    desc: `Dwujęzyczna strona internetowa wykonana dla polskiej firmy Curly Weddings oferującej kompleksową organizację oraz koordynację Ślubu i Wesela.`,
    stack: `Layout strony został wykonany w Adobe XD. Frontend to responsywny HTML5, Scss, PostCSS oraz JavaScript z webpackiem.
            Strona musiała posiadać panel administracyjny, więc został wdrożony Bolt.cm.`,
    tags: ['bolt.cm', 'javascript'],
    github: null,
    online: 'https://curlyweddings.com',
    released: '12/2018',
    slug: 'curly-weddings'
  },
  {
    thumb: 'https://via.placeholder.com/245x245',
    title: 'Portfolio',
    cat: 'Strona WWW',
    intro: `Moje portfolio wykonane w Next.js.`,
    desc: `Portfolio wykonane w Next.js.`,
    stack: `Layout został wykonany w Adobe XD a następnie została zaprojektowana strona w HTLM5 z wykorzystaniem Next.js.`,
    tags: ['react', 'next.js'],
    github: 'https://github.com/barthicus/portfolio',
    online: 'https://barthicus.github.io',
    released: '01/2019',
    slug: 'portfolio'
  },
  {
    thumb: 'https://via.placeholder.com/245x245',
    title: 'Suwała Studio Bruku',
    cat: 'Strona WWW',
    intro: `Strona internetowa dla Suwała Studio Bruku - firmy ogólnobudowlanej.`,
    desc: `Strona intetnetowa z blogiem zaprojektowna dla firmy Suwała Studio Bruku w oparciu o popularny system zarządzania treścią Wordpress.
           Klient posiada możliwość zarządzania stroną za pomocą panelu administracyjnego, może także dodawać wpisy na bloga i rozbudowywać swoją ofertę.`,
    stack: `Strona została zaprojektowana w Wordpress z szablonem opartym na pluginie Timber, który umożliwia tworzenie plików widoków w formacie .twig.
    Za wszelkie operacje związane z bundlingiem odpowiada Gulp (kompilacja scss, autoprefixer, sourcemaps).`,
    tags: ['wordpress', 'gulp', 'jquery'],
    github: null,
    online: 'https://studiobruku.pl',
    released: '10/2017',
    slug: 'suwala-studio-bruku'
  },
  {
    thumb: '/static/img/projects/taxibus_thumb.jpg',
    title: 'TaxiBus Kraków',
    cat: 'Strona WWW',
    intro: `Dwujęzyczny portal dla firmy oferującej usługi przewozowe - TaxiBus Kraków.`,
    desc: `Dla TaxiBus została wykonana kompletna przebudowa strony internetowej, która obecnie oferuje możliwość rezerwacji przewozu osobowego lub wycieczki na terenie Krakowa.
           Wdrożony panel administracyjny pozwala na zarządzanie oferowanymi usługami przewozowymi oraz ustalaniem i cen w różnych walutach.
           Ważną częścią projektu był formularz/konfigurator rezerwacji przewozu/wycieczki, który na bieżąco oblicza cenę dla wybranych parametrów usługi.
           Firmie zależało na dotarciu do szerszego grona klientów, dlatego została także wdrożona wielojęzyczność (dostępne jezyki: Polski i Angielski).`,
    stack: `Portal wykonany został w Wordpress, kod JavaScript został oparty w dużej mierze na jQuery.
            Za cały proces deweloperski związane z JS i CSS odpowiadał Grunt (minifikacja, kompilacja Less, łączenie plików).`,
    tags: ['wordpress', 'grunt', 'jquery'],
    github: null,
    online: 'http://taxibuskrakow.com',
    released: '07/2017',
    slug: 'taxibus'
  },
  {
    thumb: '/static/img/projects/teamsport_thumb.jpg',
    title: 'TeamSport',
    cat: 'Strona WWW',
    intro: `Portal dla firmy oferującej zajęcia sportowe z profesjonalnymi trenerami oraz obozy sportowo-rekreacyjne.`,
    desc: `TeamSport jest firmą, która oferuje szereg usług z zakresu aktywności fizycznej tj. obozy sportowe, kursy pod okiem intruktorów.
           Można się także zapisać na sekcje sportowe ściśle poświęcone danej dyscyplinie.
           Zaprojektowany portal pozwala na zarządzanie całą ofertą z poziomu panelu administracyjnego.
           W łatwy i przyjazny sposób można dodawać nowe wydarzenia sportowe, na które klienci mogą się zapisywać na stronie po wypełnieniu formularza.
           Panel umożliwia także zarządzanie galeriami oraz licznymi formularzami na stronie.`,
    stack: `Strona została zaprojektowana w Wordpress z szablonem opartym na pluginie Timber, który umożliwia tworzenie plików widoków w formacie .twig.
            Za wszelkie operacje związane z bundlingiem odpowiada Gulp.`,
    tags: ['wordpress', 'gulp', 'jquery'],
    github: null,
    online: 'http://teamsport.krakow.pl',
    released: '11/2017',
    slug: 'teamsport'
  }
];

const Projects = () => (
  <div className="projects container">
    {projects.map(project => (
      <Project {...project} key={project.title} />
    ))}
  </div>
);

export default Projects;
