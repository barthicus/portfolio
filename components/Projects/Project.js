import PropTypes from 'prop-types';

const Project = ({ img, title, cat, desc, link }) => (
  <div className="project">
    <div className="project__img-wrapper">
      <img src={img} className="project__img" alt={title} />
    </div>
    <div className="project__text">
      <h3 className="project__title">{title}</h3>
      <span className="project__cat">{cat}</span>
      <p className="project__desc">{desc}</p>
      <a href={link} className="project__link button button--outlined">
        Kod źródłowy
      </a>
    </div>
  </div>
);

Project.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cat: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default Project;
