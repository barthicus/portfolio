import Layout from '../components/Layout';
import Projects from '../components/Projects';

export default () => (
  <Layout>
    <section className="section section--projects">
      <h2 className="section__subtitle">Projekty</h2>
      <h1 className="section__title">Ostatnie wykonane realizacje</h1>
      <Projects />
      <div className="lead">
        <div className="lead__container">
          <div className="lead__text">
            <p>Lista wykonanych projektów jest nieustannie rozszerzana.</p>
            <p>Niektóre z nich staram się umieścić na GitHubie.</p>
          </div>
          <a href="" className="lead__link button button--outlined">
            Projekty
          </a>
        </div>
      </div>
    </section>
  </Layout>
);
