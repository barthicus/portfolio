import PropTypes from 'prop-types';
import svgIcons from './svgs';

import './index.scss';

const SvgIcon = ({ icon, className, showDefault }) => {
  const svgIcon = svgIcons[icon];

  if (!svgIcon && !showDefault) return null;

  if (svgIcon) {
    const scaleStyle = svgIcon.scale && {
      transform: `scale(${svgIcon.scale})`
    };
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        viewBox={svgIcon.viewBox}
        className={className}
        aria-labelledby={svgIcon.title}
        title={svgIcon.title}
        fillRule={svgIcon.fillRule}
        style={scaleStyle}
      >
        {svgIcon.content}
      </svg>
    );
  }
  return <span className="no-svg">{icon}</span>;
};

SvgIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
  showDefault: PropTypes.bool
};

SvgIcon.defaultProps = {
  className: 'svg-icon',
  showDefault: true
};

export default SvgIcon;
