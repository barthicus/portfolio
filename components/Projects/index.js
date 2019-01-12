import { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Project from './Project';
import Filter from './Filter';
import './index.scss';

export default class Projects extends Component {
  static propTypes = {
    projects: PropTypes.array.isRequired,
    showFilter: PropTypes.bool
  };

  static defaultProps = {
    showFilter: false
  };

  constructor(props) {
    super(props);
    this.state = {
      projects: props.projects
    };
  }

  onFilter = filteredItems => {
    this.setState(state => ({
      ...state,
      projects: filteredItems
    }));
  };

  render() {
    return (
      <div className="projects container">
        {this.props.showFilter && (
          <Filter
            items={this.props.projects}
            by="cat"
            onFilter={this.onFilter}
            className="projects__filter filter"
          />
        )}
        <ReactCSSTransitionGroup
          transitionName="fade"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          component="div"
          className="projects__items"
        >
          {this.state.projects.map(({ content, id, slug }) => (
            <Project slug={slug} {...content} key={id} />
          ))}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
