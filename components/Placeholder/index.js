import PropTypes from 'prop-types';

import './index.scss';

const Placeholder = ({ width, height }) => (
  <div className="lazy-load-placeholder" style={{ width, height }}>
    <div className="spinner">
      <div className="rect1" />
      <div className="rect2" />
      <div className="rect3" />
      <div className="rect4" />
      <div className="rect5" />
    </div>
  </div>
);

Placeholder.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

Placeholder.defaultProps = {
  width: null,
  height: null
};

export default Placeholder;
