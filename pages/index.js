import PropTypes from 'prop-types';
import Link from 'next/link';
import StoryblokService from '../utils/StoryblokService';
import Layout from '../components/Layout';
import Projects from '../components/ProjectsList';
import Intro from '../components/Intro';
import SvgIcon from '../components/SvgIcon';

const HomePage = ({ projects }) => (
  <Layout>
    <Intro />
    <SvgIcon icon="colorBar" className="color-bar" />
    <section className="section section--projects">
      <h2 className="section__subtitle">Projects</h2>
      <h1 className="section__title">Latest projects</h1>
      <Projects projects={projects} />
      <div className="lead">
        <div className="lead__container">
          <div className="lead__text">
            <p>Lista wykonanych projektów jest nieustannie rozszerzana.</p>
            <p>Niektóre z nich staram się umieścić na GitHubie.</p>
          </div>
          <Link href="/projects" prefetch>
            <a className="lead__link button button--outlined">Projects</a>
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

HomePage.getInitialProps = async ({ query }) => {
  StoryblokService.setQuery(query);

  const storyBlockContent = await StoryblokService.get('cdn/stories', {
    starts_with: `projects`,
    per_page: 4
  });

  return {
    projects: storyBlockContent.data.stories
  };
};

HomePage.propTypes = {
  projects: PropTypes.array.isRequired
};

export default HomePage;
