import Layout from '../components/Layout/index';
import Projects from '../components/Projects/index';

export default () => (
  <Layout>
    <section className="section section--projects">
      <h1 className="section__title">Projekty</h1>
      <div className="filter">
        <button
          type="button"
          className="filter__item filter__item--active button button--outlined"
        >
          Wszystko
        </button>
        <button type="button" className="filter__item button button--outlined">
          Aplikacje
        </button>
        <button type="button" className="filter__item button button--outlined">
          Strony www
        </button>
      </div>
      <Projects />
    </section>
  </Layout>
);
