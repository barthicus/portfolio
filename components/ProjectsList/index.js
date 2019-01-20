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

  state = {
    projects: this.props.projects,
    currentCategory: 'all'
  };

  onFilter = (currentCategory, filteredItems) => {
    this.setState(state => ({
      ...state,
      currentCategory,
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
            currentItem={this.state.currentCategory}
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
