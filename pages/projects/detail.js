/* eslint no-underscore-dangle: ["error", { "allow": ["_uid"] }] */

import { Component } from 'react';
import PropTypes from 'prop-types';
import animateScrollTo from 'animated-scroll-to';
import SyntaxHighlighter from 'react-syntax-highlighter';
import marked from 'marked';
import StoryblokService from '../../utils/StoryblokService';
import Layout from '../../components/Layout/index';
import SvgIcon from '../../components/SvgIcon';

import './detail.scss';

export default class ProjectDetailsPage extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    stack: PropTypes.string.isRequired,
    thumb: PropTypes.string.isRequired,
    released: PropTypes.string.isRequired,
    desktop_view: PropTypes.string,
    tablet_view: PropTypes.string,
    phone_view: PropTypes.string,
    online: PropTypes.string,
    tags: PropTypes.array,
    code_fragments: PropTypes.array,
    screencasts: PropTypes.array
  };

  static defaultProps = {
    desktop_view: null,
    tablet_view: null,
    phone_view: null,
    tags: null,
    online: null,
    code_fragments: null,
    screencasts: null
  };

  static async getInitialProps({ asPath, query }) {
    StoryblokService.setQuery(query);

    const storyBlockContent = await StoryblokService.get(
      `cdn/stories${asPath}`
    );

    return storyBlockContent.data.story.content;
  }

  componentDidMount() {
    StoryblokService.initEditor(this);
    if (window.location.hash === '') return;
    setTimeout(() => this.scrollToSection(window.location.hash, 500), 1000);
  }

  getMdContent(mdContent, classname) {
    return (
      <div
        /* eslint-disable-next-line */
        dangerouslySetInnerHTML={{ __html: marked(mdContent) }}
        className={classname}
      />
    );
  }

  scrollToSection = (elSelector, speed = 200) => {
    const position = document.querySelector(elSelector).offsetTop - 120;
    animateScrollTo(position, { speed });
  };

  render() {
    return (
      <Layout>
        <section className="section section--project">
          <div className="header">
            <img src={this.props.thumb} alt="" className="header__bg" />
            <h1 className="header__title">{this.props.title}</h1>
          </div>
          <div className="container">
            <div className="columns">
              <div className="column is-half text">
                <h2>Description</h2>
                {this.getMdContent(this.props.desc, 'text__desc')}

                <h2>Technologies</h2>
                {this.getMdContent(this.props.stack, 'text__stack')}

                <div className="tags">
                  {this.props.tags.map(tag => (
                    <span className="tags__tag" title={tag} key={tag}>
                      <SvgIcon icon={tag} />
                    </span>
                  ))}
                </div>

                <h2>Released</h2>
                <div className="released">
                  <SvgIcon icon="calendar" />
                  <p>{this.props.released}</p>
                </div>
              </div>
              <div className="column column--centered is-half">
                <div className="images">
                  {this.props.desktop_view && (
                    <img
                      src={this.props.desktop_view}
                      alt={`${this.props.title} desktop view`}
                      className="images__img images__img--desktop"
                      title="Desktop View"
                    />
                  )}
                  {this.props.tablet_view && (
                    <img
                      src={this.props.tablet_view}
                      alt={`${this.props.title} tablet view`}
                      className="images__img images__img--tablet"
                      title="Tablet View"
                    />
                  )}
                  {this.props.phone_view && (
                    <img
                      src={this.props.phone_view}
                      alt={`${this.props.title} phone view`}
                      className="images__img images__img--phone"
                      title="Phone View"
                    />
                  )}
                </div>
                <div className="online-source">
                  <div className="text">
                    <p className="text__title">Projekt komercyjny</p>
                    <p className="text__desc">
                      {this.props.online &&
                      this.props.online !== 'commercial' ? (
                        <>
                          Strona jest dostępna pod adresem:
                          <br />
                          {this.props.online}
                        </>
                      ) : (
                        'Podgląd kodu źródłowego dla tego projektu nie jest dostępny. Zostały jednak wydzielone jego fragmenty oraz dostępne są screencasty.'
                      )}
                    </p>
                  </div>
                  <div className="buttons">
                    {this.props.online && this.props.online !== 'commercial' && (
                      <a
                        href={this.props.online}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="visit-online button"
                      >
                        See online
                      </a>
                    )}
                    {this.props.code_fragments.length > 1 && (
                      <a
                        href="#code-fragments"
                        onClick={() => this.scrollToSection('#code-fragments')}
                        className="button button--outlined"
                      >
                        Code
                      </a>
                    )}
                    {this.props.screencasts.length > 1 && (
                      <a
                        href="#screencasts"
                        onClick={() => this.scrollToSection('#screencasts')}
                        className="button button--outlined"
                      >
                        Screencasts
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {this.props.code_fragments.length > 1 && (
              <>
                <SvgIcon icon="colorBar" className="color-bar" />
                <div className="columns code-fragments">
                  <div className="column">
                    <h2 id="code-fragments">Code examples</h2>
                    <div className="columns">
                      {this.props.code_fragments.map(fragment => (
                        <figure className="column" key={fragment._uid}>
                          <SyntaxHighlighter language={fragment.lang}>
                            {fragment.content}
                          </SyntaxHighlighter>
                          <figcaption className="file">
                            {fragment.filename}
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}

            {this.props.screencasts.length > 1 && (
              <>
                <SvgIcon icon="colorBar" className="color-bar" />
                <div className="columns screencasts">
                  <div className="column">
                    <h2 id="screencasts">Screencasts</h2>
                    <div className="columns">
                      {this.props.screencasts.map(screencast => (
                        <figure className="column" key={screencast._uid}>
                          <img src={screencast.source} alt={screencast.title} />
                          <figcaption className="file">
                            {screencast.title}
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      </Layout>
    );
  }
}
