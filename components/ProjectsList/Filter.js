import PropTypes from 'prop-types';

const getButtonClassName = (item, currentItem) => {
  let className = 'filter__item button button--outlined';
  if (item === currentItem) className += ' filter__item--active';
  return className;
};

const getFields = (items, by) => {
  const fields = items.map(item => item.content[by]);
  fields.unshift('all');
  return fields.filter((item, i, array) => array.indexOf(item) === i);
};

const filterItems = (items, by, value, callback) => {
  const filteredItems = items.filter(
    item => item.content[by] === value || value === 'all'
  );
  callback(value, filteredItems);
};

const Filter = ({ items, by, className, currentItem, onFilter }) => (
  <div className={className}>
    {getFields(items, by).map(value => (
      <button
        type="button"
        className={getButtonClassName(value, currentItem)}
        onClick={() => filterItems(items, by, value, onFilter)}
        key={value}
      >
        {value}
      </button>
    ))}
  </div>
);

Filter.propTypes = {
  items: PropTypes.array.isRequired,
  by: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
  className: PropTypes.string,
  currentItem: PropTypes.string
};

Filter.defaultProps = {
  className: 'default',
  currentItem: null
};

export default Filter;
