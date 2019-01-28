/* eslint import/no-dynamic-require: 0 */
/* eslint global-require: 0 */
import PropTypes from 'prop-types';
import SbEditable from 'storyblok-react';
import { LazyImage } from 'react-lazy-images';
import { Link } from '../../routes';
import SvgIcon from '../SvgIcon';

import './project.scss';

const Project = ({
  title,
  cat,
  intro,
  online,
  slug,
  github,
  tags,
  assets,
  ...project
}) => {
  const getResizedImage = (filename, newSize) => {
    const extension = filename.split('.').pop();
    if (extension === 'gif') return filename;
    const path = filename.replace('//a.storyblok.com', '');
    return `http://img2.storyblok.com/${newSize}${path}`;
  };

  const getImagePlaceholder = filename => {
    if (!filename) return;
    return getResizedImage(filename, '10x0');
  };

  const getScreenByTitle = (screens, name) => {
    if (!screens) return;
    return screens.find(screen => screen.name === name);
  };

  const getThumbnail = screns =>
    getScreenByTitle(screns, 'thumb') || (screns && screns[0]);

  const thumbnailScreen = getThumbnail(assets);
  if (thumbnailScreen)
    thumbnailScreen.placeholder = getImagePlaceholder(thumbnailScreen.filename);
  const defaultThumbnail = {
    filename: 'https://via.placeholder.com/800x800',
    placeholder: 'https://via.placeholder.com/10x10'
  };
  const thumbnail = thumbnailScreen || defaultThumbnail;

  return (
    <SbEditable content={project}>
      <div className="project">
        <Link route="projects/detail" params={{ slug }} prefetch>
          <a className="project__link-img" aria-label={title}>
            <div className="project__img-wrapper">
              <LazyImage
                src={thumbnail.filename}
                alt={`Project ${slug}`}
                className="project__img"
                placeholder={({ imageProps, ref }) => (
                  <img
                    ref={ref}
                    className="project__img"
                    src={thumbnail.placeholder}
                    alt={imageProps.alt}
                  />
                )}
                actual={({ imageProps }) => (
                  /* eslint-disable-next-line */
                  <img {...imageProps} />
                )}
              />
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
                <a
                  href={github}
                  className="footer__link button button--outlined"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              )}
              {online && online !== 'commercial' && (
                <a
                  href={online}
                  className="footer__link button button--outlined"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Preview
                </a>
              )}
            </div>
            <div className="footer__tags">
              {tags &&
                tags.map(tag => (
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
};

Project.propTypes = {
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
