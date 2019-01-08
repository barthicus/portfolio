import PropTypes from 'prop-types';
import Link from 'next/link';
import './project.scss';

const Project = ({ thumb, title, cat, intro, online, slug }) => (
  <div className="project">
    <Link href={`/projects/${slug}`}>
      <a className="project__link-img">
        <div className="project__img-wrapper">
          <img src={thumb} className="project__img" alt={title} />
        </div>
      </a>
    </Link>
    <div className="project__text">
      <Link href={`/projects/${slug}`}>
        <a className="project__title">
          <h3 className="project__title">{title}</h3>
        </a>
      </Link>
      <span className="project__cat">{cat}</span>
      <p className="project__intro">{intro}</p>
      <a href={online} className="project__link button button--outlined">
        Kod źródłowy
      </a>
    </div>
  </div>
);

Project.propTypes = {
  thumb: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cat: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  online: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired
};

export default Project;
