import PropTypes from 'prop-types';
import SvgIcon from '../SvgIcon';
import './index.scss';

const Socials = ({ className, showLabel }) => (
  <div className={className}>
    {showLabel && <p className="socials__label">my online profiles:</p>}
    <a
      href="https://github.com/barthicus"
      target="_blank"
      rel="noopener noreferrer"
      className="socials__link"
    >
      <SvgIcon icon="github" className="socials__svg" />
    </a>
    <a
      href="https://www.linkedin.com/in/bartosz-podgruszecki"
      target="_blank"
      rel="noopener noreferrer"
      className="socials__link"
    >
      <SvgIcon icon="linkedin" className="socials__svg" />
    </a>
  </div>
);

Socials.propTypes = {
  className: PropTypes.string,
  showLabel: PropTypes.bool
};

Socials.defaultProps = {
  className: 'socials',
  showLabel: false
};

export default Socials;
