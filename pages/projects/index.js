import PropTypes from 'prop-types';
import StoryblokService from '../../utils/StoryblokService';
import Layout from '../../components/Layout/index';
import Projects from '../../components/ProjectsList/index';

const ProjectsPage = ({ projects }) => (
  <Layout>
    <section className="section section--projects">
      <h1 className="section__title">Projekty</h1>
      <Projects projects={projects} showFilter />
    </section>
  </Layout>
);

ProjectsPage.getInitialProps = async ({ query }) => {
  StoryblokService.setQuery(query);

  const storyBlockContent = await StoryblokService.get('cdn/stories', {
    starts_with: `projects`
  });

  return {
    projects: storyBlockContent.data.stories
  };
};

ProjectsPage.propTypes = {
  projects: PropTypes.array.isRequired
};

export default ProjectsPage;
