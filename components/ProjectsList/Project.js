import PropTypes from 'prop-types';
import SbEditable from 'storyblok-react';
import { Link } from '../../routes';
import SvgIcon from '../SvgIcon';

import './project.scss';

const Project = ({
  thumb,
  title,
  cat,
  intro,
  online,
  slug,
  github,
  tags,
  ...project
}) => (
  <SbEditable content={project}>
    <div className="project">
      <Link route="projects/detail" params={{ slug }} prefetch>
        <a className="project__link-img">
          <div className="project__img-wrapper">
            <img src={thumb} className="project__img" alt={title} />
          </div>
        </a>
      </Link>
      <div className="project__text">
        <Link route="projects/detail" params={{ slug }} prefetch>
          <a className="project__title">
            <h3 className="project__title">{title}</h3>
          </a>
        </Link>
        <span className="project__cat">{cat}</span>
        <p className="project__intro">{intro}</p>
        <div className="footer">
          <div className="footer__links">
            {github && (
              <a href={github} className="footer__link button button--outlined">
                Github
              </a>
            )}
            {online && (
              <a
                href={online}
                className="footer__link button button--outlined"
                target="_blank"
                rel="noopener noreferrer"
              >
                See Online
              </a>
            )}
          </div>
          <div className="footer__tags">
            {tags.map(tag => (
              <span className="footer__tag" title={tag} key={tag}>
                <SvgIcon icon={tag} showDefault={false} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </SbEditable>
);

Project.propTypes = {
  thumb: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cat: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  online: PropTypes.string,
  slug: PropTypes.string.isRequired,
  github: PropTypes.string,
  tags: PropTypes.array
};

Project.defaultProps = {
  online: null,
  github: null,
  tags: null
};

export default Project;
