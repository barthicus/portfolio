import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Filter extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    by: PropTypes.string.isRequired,
    onFilter: PropTypes.func.isRequired,
    className: PropTypes.string
  };

  static defaultProps = {
    className: 'filter'
  };

  constructor(props) {
    super(props);
    this.state = {
      currentItem: 'all'
    };
  }

  getButtonClassName = item => {
    let className = 'filter__item button button--outlined';
    if (item === this.state.currentItem) className += ' filter__item--active';
    return className;
  };

  getFields = (items, by) => {
    const fields = items.map(item => item.content[by]);
    fields.unshift('all');
    return fields.filter((item, i, array) => array.indexOf(item) === i);
  };

  filterItems = (value, callback) => {
    this.setState({ currentItem: value });
    const filteredItems = this.props.items.filter(
      item => item.content[this.props.by] === value || value === 'all'
    );
    callback(filteredItems);
  };

  render() {
    return (
      <div className={this.props.className}>
        {this.getFields(this.props.items, this.props.by).map(item => (
          <button
            type="button"
            className={this.getButtonClassName(item)}
            onClick={() => this.filterItems(item, this.props.onFilter)}
            key={item}
          >
            {item}
          </button>
        ))}
      </div>
    );
  }
}
