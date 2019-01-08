import PropTypes from 'prop-types';
import gulpSvg from './svgs/gulp';
import linkedinSvg from './svgs/linkedin';
import githubSvg from './svgs/github';
import arrowUpSvg from './svgs/arrowUp';
import wordpressSvg from './svgs/wordpress';
import gruntSvg from './svgs/grunt';
import jquerySvg from './svgs/jquery';
import colorBarSvg from './svgs/colorBar';
import reactSvg from './svgs/react';
import calendarSvg from './svgs/calendar';
import codeSvg from './svgs/code';
import laptopSvg from './svgs/laptop';
import './index.scss';

const svgIcons = {};

svgIcons.gulp = gulpSvg;
svgIcons.colorBar = colorBarSvg;
svgIcons.linkedin = linkedinSvg;
svgIcons.github = githubSvg;
svgIcons.arrowUp = arrowUpSvg;
svgIcons.wordpress = wordpressSvg;
svgIcons.grunt = gruntSvg;
svgIcons.jquery = jquerySvg;
svgIcons.react = reactSvg;
svgIcons.calendar = calendarSvg;
svgIcons.code = codeSvg;
svgIcons.laptop = laptopSvg;

const SvgIcon = ({ icon, className, viewBox, title, fillRule }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox={viewBox || svgIcons[icon].viewBox}
    className={className}
    aria-labelledby={title}
    title={title}
    fillRule={fillRule}
  >
    {svgIcons[icon].content}
  </svg>
);

SvgIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
  viewBox: PropTypes.string,
  title: PropTypes.string,
  fillRule: PropTypes.string
};

SvgIcon.defaultProps = {
  className: 'svg-icon',
  viewBox: null,
  title: null,
  fillRule: null
};

export default SvgIcon;
