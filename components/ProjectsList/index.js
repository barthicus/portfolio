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

  getResizedImage = (filename, newSize) => {
    const extension = filename.split('.').pop();
    if (extension === 'gif') return filename;
    const path = filename.replace('//a.storyblok.com', '');
    return `https://img2.storyblok.com/${newSize}${path}`;
  };

  getImagePlaceholder = filename => {
    if (!filename) return;
    return this.getResizedImage(filename, '10x0');
  };

  getScreenByTitle = (screens, name) => {
    if (!screens) return;
    return screens.find(screen => screen.name === name);
  };

  getThumbnail = assets => {
    const defaultThumbnail = {
      filename: 'https://via.placeholder.com/800x800',
      placeholder: 'https://via.placeholder.com/10x10'
    };
    const thumbnailScreen = this.getScreenByTitle(assets, 'thumb');
    if (thumbnailScreen)
      thumbnailScreen.placeholder = this.getImagePlaceholder(
        thumbnailScreen.filename
      );

    return thumbnailScreen || defaultThumbnail;
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
            <Project
              slug={slug}
              {...content}
              key={id}
              thumbnail={this.getThumbnail(content.assets)}
            />
          ))}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
